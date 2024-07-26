

import React, {  useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';

const validationSchema = z.object({
  site_name: z.string().min(1, "Site name is required"),
  meta_title: z.string().min(1, "Meta title is required"),
  description: z.string().min(1, "Description is required"),
  contact_number: z.string().min(10, "Contact number must be at least 10 digits").max(15, "Contact number must be at most 15 digits"),
  whatsapp_number: z.string().min(10, "WhatsApp number must be at least 10 digits").max(15, "WhatsApp number must be at most 15 digits"),
  email_address: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof validationSchema>;

const SiteDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    site_name: '',
    meta_title: '',
    description: '',
    contact_number: '',
    whatsapp_number: '',
    email_address: '',
  });

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };


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
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!errors.description}
                  helperText={errors.description ? errors.description.message : ''}
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

export default  SiteDetailsForm;
