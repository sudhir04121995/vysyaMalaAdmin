


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

interface Page {
  id: number;
  page_name: string;
  status: string;
}

const PageList: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
const navigate = useNavigate()
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get<Page[]>('http://192.168.1.2:8000/auth/page-list/');
        setPages(response.data);
        console.log("getRequestOfTableData:",response.data)
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
    
    fetchPages();
  }, []);


  const handleEdit = (id: number) => {
    navigate(`/EditCsmData/${id}`);
  };

  
  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this page?");
  
    if (isConfirmed) {
      try {
        const response = await axios.delete(`http://192.168.1.2:8000/auth/page/delete/${id}/`);
        console.log(`Deleted page with id: ${id}`, response.data);
        // Refresh the page list after deletion
        setPages(pages.filter(page => page.id !== id));
      } catch (error) {
        console.error('There was an error deleting the page!', error);
      }
    }
  };
  
  const handleAdd = async () => {
    navigate('/AddCsmData')
    console.log('Add new page');
  };

  return (
    <Paper>
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<AddIcon />} 
        onClick={handleAdd}
        style={{ float: 'right', margin: '10px' }}
      >
        Add
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Page Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.id}>
                <TableCell>{page.id}</TableCell>
                <TableCell>{page.page_name}</TableCell>
                <TableCell>{page.status}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEdit(page.id)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(page.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PageList;
