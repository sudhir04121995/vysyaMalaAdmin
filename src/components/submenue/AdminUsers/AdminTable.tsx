import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  fullName: string;
  role: string;
  phoneNumber: string;
  status: string;
}

const dummyUsers: User[] = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    password: '********',
    fullName: 'John Doe',
    role: 'Admin',
    phoneNumber: '123-456-7890',
    status: 'active',
  },
  {
    id: 2,
    username: 'jane_smith',
    email: 'jane@example.com',
    password: '********',
    fullName: 'Jane Smith',
    role: 'User',
    phoneNumber: '098-765-4321',
    status: 'inactive',
  },
  {
    id: 3,
    username: 'alice_jones',
    email: 'alice@example.com',
    password: '********',
    fullName: 'Alice Jones',
    role: 'User',
    phoneNumber: '555-555-5555',
    status: 'active',
  },
];

const PageList: React.FC = () => {
    const navigate =useNavigate()
  const handleEdit = (id: number) => {
    console.log(`Edit user with id: ${id}`);
    // Implement edit functionality here
  };

  const handleDelete = (id: number) => {
    console.log(`Delete user with id: ${id}`);
    // Implement delete functionality here
  };

  const handleAdd = () => {
    navigate('/AdminUsers');
    console.log('Add new page');
  };

  return (
    <Paper>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAdd}
          style={{ marginBottom: '10px' }}
        >
          Add
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '18px', paddingLeft: '60px' }}>
                Username
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '18px', paddingLeft: '60px' }}>
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '18px', paddingLeft: '60px' }}>
                Password
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '18px', paddingLeft: '60px' }}>
                Full Name
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '18px', paddingLeft: '60px' }}>
                Role
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '18px', paddingLeft: '60px' }}>
                Phone Number
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textAlign: 'right',
                  paddingRight: '100px',
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textAlign: 'right',
                  paddingRight: '100px',
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ fontSize: '18px', paddingLeft: '60px' }}>{user.username}</TableCell>
                <TableCell sx={{ fontSize: '18px', paddingLeft: '60px' }}>{user.email}</TableCell>
                <TableCell sx={{ fontSize: '18px', paddingLeft: '60px' }}>{user.password}</TableCell>
                <TableCell sx={{ fontSize: '18px', paddingLeft: '60px' }}>{user.fullName}</TableCell>
                <TableCell sx={{ fontSize: '18px', paddingLeft: '60px' }}>{user.role}</TableCell>
                <TableCell sx={{ fontSize: '18px', paddingLeft: '60px' }}>{user.phoneNumber}</TableCell>
                <TableCell sx={{ fontSize: '18px', paddingLeft: '60px' }}>{user.status}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleEdit(user.id)}
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: 8 }}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(user.id)}
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
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
