


import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { z } from 'zod';
import './Toolbars.css';

import { useParams, useNavigate } from 'react-router-dom';

const contentSchema = z.object({
  pageName: z.string().nonempty('Page Name is required'),
  metaTitle: z.string().nonempty('Meta Title is required'),
  metaDescription: z.string().nonempty('Meta Description is required'),
  metaKeywords: z.string().nonempty('Meta Keywords are required'),
  editorData: z.string().min(1, 'Content cannot be empty'),
  status: z.string().nonempty('Status is required'),
});

const CsmEditorComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [editorData, setEditorData] = useState<string>('<p></p>');
  const [pageName, setPageName] = useState<string>('');
  const [status, setStatus] = useState<string>('active');
  const [metaTitle, setMetaTitle] = useState<string>('');
  const [metaDescription, setMetaDescription] = useState<string>('');
  const [metaKeywords, setMetaKeywords] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get(`http://192.168.1.2:8000/auth/page-list/${id}/`);
        const pageData = response.data;
        setPageName(pageData.page_name);
        setStatus(pageData.status);
        setMetaTitle(pageData.meta_title);
        setMetaDescription(pageData.meta_description);
        setMetaKeywords(pageData.meta_keywords);
        setEditorData(pageData.content);
      } catch (error) {
        console.error('There was an error fetching the page data!', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPageData();
    }
  }, [id]);

  const handleEditorChange = (_event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
    setErrors((prevErrors) => ({ ...prevErrors, editorData: '' }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case 'pageName':
        setPageName(value);
        setErrors((prevErrors) => ({ ...prevErrors, pageName: '' }));
        break;
      case 'metaTitle':
        setMetaTitle(value);
        setErrors((prevErrors) => ({ ...prevErrors, metaTitle: '' }));
        break;
      case 'metaDescription':
        setMetaDescription(value);
        setErrors((prevErrors) => ({ ...prevErrors, metaDescription: '' }));
        break;
      case 'metaKeywords':
        setMetaKeywords(value);
        setErrors((prevErrors) => ({ ...prevErrors, metaKeywords: '' }));
        break;
      case 'status':
        setStatus(value);
        setErrors((prevErrors) => ({ ...prevErrors, status: '' }));
        break;
      default:
        break;
    }
  };

  const handleSave = async () => {
    setErrors({});
  
    const formData = {
      page_name: pageName, // Changed to snake_case
      status,
      content: editorData, // Changed to 'content' based on backend requirements
      meta_title: metaTitle, // Changed to snake_case
      meta_description: metaDescription, // Changed to snake_case
      meta_keywords: metaKeywords, // Changed to snake_case
    };
  
    try {
      const validatedData = contentSchema.parse({
        pageName: pageName,
        status: status,
        editorData: editorData,
        metaTitle: metaTitle,
        metaDescription: metaDescription,
        metaKeywords: metaKeywords,
      });
  
      const response = await axios.put(`http://192.168.1.2:8000/auth/page/edit/${id}/`, formData);
      
      if (response.status === 200) {
        console.log('Page updated successfully');
        navigate("/CsmDataTable");
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path.length) {
            formattedErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(formattedErrors);
      } else {
        console.error('There was an error updating the page data!', error);
      }
    }
  };
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">CSM Page</h2>
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="pageName" className="block mb-2">Page Name</label>
          <input
            type="text"
            id="pageName"
            value={pageName}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-md w-full text-sm"
          />
          {errors.pageName && <span className="text-red-500 text-sm">{errors.pageName}</span>}
        </div>
        <div className="flex-1">
          <label htmlFor="metaTitle" className="block mb-2">Meta Title</label>
          <input
            type="text"
            id="metaTitle"
            value={metaTitle}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-md w-full text-sm"
          />
          {errors.metaTitle && <span className="text-red-500 text-sm">{errors.metaTitle}</span>}
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
       
        <div className="flex-1">
          <label htmlFor="metaDescription" className="block mb-2">Meta Description</label>
          <input
            type="text"
            id="metaDescription"
            value={metaDescription}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-md w-full text-sm"
          />
          {errors.metaDescription && <span className="text-red-500 text-sm">{errors.metaDescription}</span>}
        </div>
        <div className="flex-1">
        <label htmlFor="metaKeywords" className="block mb-2">Meta Keywords</label>
        <input
          type="text"
          id="metaKeywords"
          value={metaKeywords}
          onChange={handleInputChange}
          className="px-3 py-2 border border-gray-300 rounded-md w-full text-sm"
        />
        {errors.metaKeywords && <span className="text-red-500 text-sm">{errors.metaKeywords}</span>}
      </div>
      </div>
     
      <div className="mb-4">
        <label htmlFor="editor" className="block mb-2">Content</label>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onReady={() => {}}
          onChange={handleEditorChange}
          config={{
            toolbar: [
              'heading', '|',
              'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
              'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
              'undo', 'redo'
            ],
          }}
        />
        {errors.editorData && <span className="text-red-500 text-sm">{errors.editorData}</span>}
      </div>
      <div className="flex-1">
          <label htmlFor="status" className="block mb-2">Status</label>
          <select
            id="status"
            value={status}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-md w-full text-sm"
          >
             <option value=" ">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && <span className="text-red-500 text-sm">{errors.status}</span>}
        </div>
        <br/>
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit Content
      </button>
    </div>
  );
};

export default CsmEditorComponent;
