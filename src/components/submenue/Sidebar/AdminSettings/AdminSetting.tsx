// import React, { useEffect } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { TextField, Button, Box, Typography, Grid } from '@mui/material';

// const validationSchema = z.object({
//   site_name: z.string().min(1, "Site name is required"),
//   meta_title: z.string().min(1, "Meta title is required"),
//   description: z.string().min(1, "Description is required"),
//   contact_number: z.string().min(10, "Contact number must be at least 10 digits").max(15, "Contact number must be at most 15 digits"),
//   whatsapp_number: z.string().min(10, "WhatsApp number must be at least 10 digits").max(15, "WhatsApp number must be at most 15 digits"),
//   email_address: z.string().email("Invalid email address"),
// });

// type FormData = z.infer<typeof validationSchema>;

// const MyForm: React.FC = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: zodResolver(validationSchema),
//   });

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   useEffect(()=>{
//     const fetchPageData= async()=>{
//         const response = await axios.get(`http://192.168.1.2:8000/auth/admin-settings/${4}/`);
//         const pageData = response.data;
//     }
//     fetchPageData();
//   })

//   return (
//     <Box sx={{ maxWidth: 1300, mx: 'auto', mt: 4 }}>
//       <Typography variant="h6" component="h1" gutterBottom  sx={{  fontWeight: 'bold' }}>
//         Site Information Form
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//       <Grid container spacing={5}>
//       <Grid item xs={12} sm={6}>
//         <Controller
//           name="site_name"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <TextField
//               {...field}
//               label="Site Name"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               error={!!errors.site_name}
//               helperText={errors.site_name ? errors.site_name.message : ''}
//             />
//           )}
//         />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//         <Controller
//           name="meta_title"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <TextField
//               {...field}
//               label="Meta Title"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               error={!!errors.meta_title}
//               helperText={errors.meta_title ? errors.meta_title.message : ''}
//             />
//           )}
//         />
//         </Grid>
//         </Grid>
//         <Grid container spacing={5}>
//         <Grid item xs={12} sm={6}>
//         <Controller
//           name="description"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <TextField
//               {...field}
//               label="Description"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               error={!!errors.description}
//               helperText={errors.description ? errors.description.message : ''}
//             />
//           )}
//         />
// </Grid>
// <Grid item xs={12} sm={6}>
//             <Controller
//               name="contact_number"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Contact Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.contact_number}
//                   helperText={errors.contact_number ? errors.contact_number.message : ''}
//                 />
//               )}
//             />
//             </Grid>
//          </Grid>
//          <Grid container spacing={5}>
//          <Grid item xs={12} sm={6}>
//             <Controller
//               name="whatsapp_number"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="WhatsApp Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.whatsapp_number}
//                   helperText={errors.whatsapp_number ? errors.whatsapp_number.message : ''}
//                 />
//               )}
//             />
// </Grid>
// <Grid item xs={12} sm={6}>
//         <Controller
//           name="email_address"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <TextField
//               {...field}
//               label="Email Address"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               error={!!errors.email_address}
//               helperText={errors.email_address ? errors.email_address.message : ''}
//             />
//           )}
//         />
//         </Grid>
//         </Grid>
//         <Button 
//           type="submit" 
//           variant="outlined" 
//           color="primary" 
          
//           size="medium" 
//           sx={{ height: '50px', fontSize: '16px', mt: 2  }} 
//         >
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default MyForm;


// import React, { useEffect } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import axios from 'axios';
// import { TextField, Button, Box, Typography, Grid } from '@mui/material';

// const validationSchema = z.object({
//   site_name: z.string().min(1, "Site name is required"),
//   meta_title: z.string().min(1, "Meta title is required"),
//   description: z.string().min(1, "Description is required"),
//   contact_number: z.string().min(10, "Contact number must be at least 10 digits").max(15, "Contact number must be at most 15 digits"),
//   whatsapp_number: z.string().min(10, "WhatsApp number must be at least 10 digits").max(15, "WhatsApp number must be at most 15 digits"),
//   email_address: z.string().email("Invalid email address"),
// });

// type FormData = z.infer<typeof validationSchema>;

// const MyForm: React.FC = () => {
//   const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
//     resolver: zodResolver(validationSchema),
//   });

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   useEffect(() => {
//     const fetchPageData = async () => {
//       try {
//         const response = await axios.get(`http://192.168.1.2:8000/auth/admin-settings/${4}/`);
//         const pageData = response.data;

        
//         reset({
//           site_name: pageData.site_name || '',
//           meta_title: pageData.meta_title || '',
//           description: pageData.description || '',
//           contact_number: pageData.contact_number || '',
//           whatsapp_number: pageData.whatsapp_number || '',
//           email_address: pageData.email_address || '',
//         });
//       } catch (error) {
//         console.error('Error fetching page data:', error);
//       }
//     };

//     fetchPageData();
//   }, [reset]);

//   return (
//     <Box sx={{ maxWidth: 1300, mx: 'auto', mt: 4 }}>
//       <Typography variant="h6" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//         Site Information Form
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="site_name"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Site Name"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.site_name}
//                   helperText={errors.site_name ? errors.site_name.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="meta_title"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Meta Title"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.meta_title}
//                   helperText={errors.meta_title ? errors.meta_title.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="description"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Description"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.description}
//                   helperText={errors.description ? errors.description.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="contact_number"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Contact Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.contact_number}
//                   helperText={errors.contact_number ? errors.contact_number.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="whatsapp_number"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="WhatsApp Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.whatsapp_number}
//                   helperText={errors.whatsapp_number ? errors.whatsapp_number.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="email_address"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Email Address"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.email_address}
//                   helperText={errors.email_address ? errors.email_address.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           variant="outlined"
//           color="primary"
//           size="medium"
//           sx={{ height: '50px', fontSize: '16px', mt: 2 }}
//         >
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default MyForm;


// import React, { useEffect, useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import axios from 'axios';
// import { TextField, Button, Box, Typography, Grid } from '@mui/material';

// const validationSchema = z.object({
//   site_name: z.string().min(1, "Site name is required"),
//   meta_title: z.string().min(1, "Meta title is required"),
//   description: z.string().min(1, "Description is required"),
//   contact_number: z.string().min(10, "Contact number must be at least 10 digits").max(15, "Contact number must be at most 15 digits"),
//   whatsapp_number: z.string().min(10, "WhatsApp number must be at least 10 digits").max(15, "WhatsApp number must be at most 15 digits"),
//   email_address: z.string().email("Invalid email address"),
// });

// type FormData = z.infer<typeof validationSchema>;

// const SiteDetailsForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     site_name: '',
//     meta_title: '',
//     description: '',
//     contact_number: '',
//     whatsapp_number: '',
//     email_address: '',
//   });

//   const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
//     resolver: zodResolver(validationSchema),
//     defaultValues: formData,
//   });

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   useEffect(() => {
//     const fetchPageData = async () => {
//       try {
//         const response = await axios.get(`http://192.168.1.2:8000/auth/admin-settings/`);
//         const pageData = response.data;

//         // Set the fetched data as default values
//         setFormData({
//           site_name: pageData.site_name || '',
//           meta_title: pageData.meta_title || '',
//           description: pageData.description || '',
//           contact_number: pageData.contact_number || '',
//           whatsapp_number: pageData.whatsapp_number || '',
//           email_address: pageData.email_address || '',
//         });

//         // Reset form with new default values
//         reset(pageData);
//       } catch (error) {
//         console.error('Error fetching page data:', error);
//       }
//     };

//     fetchPageData();
//   }, [reset]);

//   return (
//     <Box sx={{ maxWidth: 1300, mx: 'auto', mt: 4 }}>
//       <Typography variant="h6" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//         Site Information Form
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="site_name"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Site Name"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.site_name}
//                   helperText={errors.site_name ? errors.site_name.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="meta_title"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Meta Title"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.meta_title}
//                   helperText={errors.meta_title ? errors.meta_title.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="description"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Description"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.description}
//                   helperText={errors.description ? errors.description.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="contact_number"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Contact Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.contact_number}
//                   helperText={errors.contact_number ? errors.contact_number.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="whatsapp_number"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="WhatsApp Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.whatsapp_number}
//                   helperText={errors.whatsapp_number ? errors.whatsapp_number.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="email_address"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Email Address"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.email_address}
//                   helperText={errors.email_address ? errors.email_address.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           variant="outlined"
//           color="primary"
//           size="medium"
//           sx={{ height: '50px', fontSize: '16px', mt: 2 }}
//         >
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default  SiteDetailsForm;


// import React, { useEffect, useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import axios from 'axios';
// import { TextField, Button, Box, Typography, Grid } from '@mui/material';

// const validationSchema = z.object({
//   site_name: z.string().min(1, "Site name is required"),
//   meta_title: z.string().min(1, "Meta title is required"),
//   description: z.string().min(1, "Description is required"),
//   contact_number: z.string().min(10, "Contact number must be at least 10 digits").max(15, "Contact number must be at most 15 digits"),
//   whatsapp_number: z.string().min(10, "WhatsApp number must be at least 10 digits").max(15, "WhatsApp number must be at most 15 digits"),
//   email_address: z.string().email("Invalid email address"),
// });

// type FormData = z.infer<typeof validationSchema>;

// const SiteDetailsForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     site_name: '',
//     meta_title: '',
//     description: '',
//     contact_number: '',
//     whatsapp_number: '',
//     email_address: '',
//   });

//   const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
//     resolver: zodResolver(validationSchema),
//     defaultValues: formData,
//   });

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await axios.patch('http://192.168.1.2:8000/auth/admin-settings/update/', data);
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchPageData = async () => {
//       try {
//         const response = await axios.get('http://192.168.1.2:8000/auth/admin-settings/');
//         const pageData = response.data;
// console.log(response.data)
//         // Set the fetched data as default values
//         setFormData({
//           site_name: pageData.site_name || '',
//           meta_title: pageData.meta_title || '',
//           description: pageData.description || '',
//           contact_number: pageData.contact_number || '',
//           whatsapp_number: pageData.whatsapp_number || '',
//           email_address: pageData.email_address || '',
//         });

//         // Reset form with new default values
//         reset(pageData);
//       } catch (error) {
//         console.error('Error fetching page data:', error);
//       }
//     };

//     fetchPageData();
//   }, [reset]);

//   return (
//     <Box sx={{ maxWidth: 1300, mx: 'auto', mt: 4 }}>
//       <Typography variant="h6" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//         Site Information Form
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="site_name"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Site Name"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.site_name}
//                   helperText={errors.site_name ? errors.site_name.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="meta_title"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Meta Title"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.meta_title}
//                   helperText={errors.meta_title ? errors.meta_title.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="description"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Description"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.description}
//                   helperText={errors.description ? errors.description.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="contact_number"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Contact Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.contact_number}
//                   helperText={errors.contact_number ? errors.contact_number.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="whatsapp_number"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="WhatsApp Number"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.whatsapp_number}
//                   helperText={errors.whatsapp_number ? errors.whatsapp_number.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="email_address"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Email Address"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                   error={!!errors.email_address}
//                   helperText={errors.email_address ? errors.email_address.message : ''}
//                 />
//               )}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           variant="outlined"
//           color="primary"
//           size="medium"
//           sx={{ height: '50px', fontSize: '16px', mt: 2 }}
//         >
//           Submit
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default SiteDetailsForm;


import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';

const validationSchema = z.object({
  site_name: z.string().min(1, "Site name is required"),
  meta_title: z.string().min(1, "Meta title is required"),
  meta_description: z.string().min(1, "Description is required"),
  contact_number: z.string().min(10, "Contact number must be at least 10 digits").max(15, "Contact number must be at most 15 digits"),
  whatsapp_number: z.string().min(10, "WhatsApp number must be at least 10 digits").max(15, "WhatsApp number must be at most 15 digits"),
  email_address: z.string().email("Invalid email address"),
  Location_Address: z.string().min(1, "Location address name is required"),
});

type FormData = z.infer<typeof validationSchema>;

const SiteDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    site_name: '',
    meta_title: '',
    meta_description: '',
    contact_number: '',
    whatsapp_number: '',
    email_address: '',
    Location_Address:''
  });

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.patch('http://192.168.1.2:8000/auth/admin-settings/update/', data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get('http://192.168.1.2:8000/auth/admin-settings/');
        const pageData = response.data;

        // Set the fetched data as default values
        setFormData({
          site_name: pageData.site_name || '',
          meta_title: pageData.meta_title || '',
          meta_description: pageData.meta_description || '',
          contact_number: pageData.contact_number || '',
          whatsapp_number: pageData.whatsapp_number || '',
          email_address: pageData.email_address || '',
          Location_Address:''
        });

        // Reset form with new default values
        reset(pageData);
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    fetchPageData();
  }, [reset]);

  return (
    <Box sx={{ maxWidth: 1300, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Site Information Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="site_name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Site Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.site_name}
                  helperText={errors.site_name ? errors.site_name.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="meta_title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Meta Title"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.meta_title}
                  helperText={errors.meta_title ? errors.meta_title.message : ''}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="meta_description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Meta Description"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.meta_description}
                  helperText={errors.meta_description ? errors.meta_description.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="contact_number"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Contact Number"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.contact_number}
                  helperText={errors.contact_number ? errors.contact_number.message : ''}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="whatsapp_number"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="WhatsApp Number"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.whatsapp_number}
                  helperText={errors.whatsapp_number ? errors.whatsapp_number.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email_address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.email_address}
                  helperText={errors.email_address ? errors.email_address.message : ''}
                />
              )}
            />
          </Grid>
        </Grid>
        <Controller
              name="Location_Address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Location Address"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.Location_Address}
                  helperText={errors.Location_Address ? errors.Location_Address.message : ''}
                />
              )}
            />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          size="medium"
          sx={{ height: '50px', fontSize: '16px', mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SiteDetailsForm;
