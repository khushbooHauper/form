import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal,TextField } from '@material-ui/core';
import { deleteFormData, editFormData, userList } from './MultiStepFormSlice';
import EditForm from './EditForm';
import { Pagination } from '@material-ui/lab';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  search: Yup.string().required('Search query is required')
});

export const FormDataList = () => {
  const mylist = useSelector((state) => state.form.list);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [formData, setFormData] = useState(null);
  const [page, setPage] = useState(1);
  const [displayList, setDisplayList] = useState(mylist);
  const [deletekiyakya, setDeletekiyakya] = useState(false);


  
  const ITEMS_PER_PAGE = 5;
  useEffect(() => {
    if(deletekiyakya){
      setDisplayList(mylist);
    }
    
  }, [mylist,deletekiyakya]);

  const handleSearch = (values) => {
    const searchQuery = values.search.toLowerCase();
    const filteredList = mylist.filter((user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.address.toLowerCase().includes(searchQuery) ||
      user.city.toLowerCase().includes(searchQuery) ||
      user.state.toLowerCase().includes(searchQuery) ||
      user.bank.toLowerCase().includes(searchQuery) ||
      user.accountNumber.toString().toLowerCase().includes(searchQuery) ||
      user.ifsc.toLowerCase().includes(searchQuery)
    );
    setDisplayList(filteredList);
    setPage(1)
    console.log(values)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handleEdit = (formData) => {
    setEditMode(true);
    setFormData({ ...formData, index: mylist.indexOf(formData) });
  };

  
  const handleSave = (formData) => {
    const updatedIndex = formData.index;
    dispatch(editFormData({ index: updatedIndex, updatedData: formData }));
    setEditMode(false);
    setFormData(null);
    
  
    // Update filtered array with edited form data
    setDisplayList(prevData => {
      const updatedData = [...prevData];
      updatedData[updatedIndex] = formData;
      return updatedData;
    });
  };
  const handleCancel = () => {
    setEditMode(false);
    setDeleteMode(false);
    setFormData(null);
    
  };

  const handleDelete = (user, index) => {
    setDeleteMode(true);
    setFormData({ ...user, index }); 
    console.log(user)
  };

  const handleConfirmDelete = () => {
    dispatch(deleteFormData(formData.index));
    setDeleteMode(false);
    setFormData(null);

    // Remove deleted item from filtered array
    const updatedList = mylist.filter((user) => user.index !== formData.index);
    setDisplayList(updatedList);
    console.log(displayList,'displayList')
    console.log(mylist,'mylist')
    setDeletekiyakya(true)
  };



 
  return (
    <>
    {/* <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /> */}
    
    <Formik
        initialValues={{ search: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSearch}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Field
              name="search"
              label="search"
              as={TextField}
              fullWidth
              value={values.search}
              onChange={handleChange}
              error={touched.search && Boolean(errors.search)}
              helperText={touched.search && errors.search}
            />
            <Button type="submit">Search</Button>
          </Form>
        )}
      </Formik>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Bank</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>IFSC</TableCell>
            <TableCell>education</TableCell>
            <TableCell>experience</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {displayList.slice(startIndex, endIndex).map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.state}</TableCell>
                <TableCell>{user.bank}</TableCell>
                <TableCell>{user.accountNumber}</TableCell>
                <TableCell>{user.ifsc}</TableCell>
                <TableCell>
                  {user.education?.map((edu, index) => (
                    <div key={index}>
                      <p>{edu.courseName}</p>
                      <p>{edu.university}</p>
                      <p>{edu.percentage}</p>
                      <p>{edu.passingYear}</p>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {user.experience?.map((exp, index) => (
                    <div key={index}>
                      <p>{exp.company}</p>
                      <p>{exp.designation}</p>
                      <p>{exp.joiningDate}</p>
                      <p>{exp.leavingDate}</p>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(user)}>Edit</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(user,index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {editMode && (
        <Modal open={editMode} onClose={handleCancel}>
          <EditForm formData={formData} onSave={handleSave} onCancel={handleCancel} index={formData.index} />
        </Modal>
      )}
      {deleteMode && (
        <Modal open={deleteMode} onClose={handleCancel}>
          <div style={{ backgroundColor: 'white', padding: '2rem' ,width:'600px',position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
            <p align="center">Are you sure you want to delete this form data?</p>
            <div align="center">
            <Button onClick={handleConfirmDelete}>Yes</Button>
            <Button onClick={handleCancel}>No</Button>
            </div>
          </div>
        </Modal>
      )}
    </TableContainer>
     <Pagination count={Math.ceil(mylist.length / ITEMS_PER_PAGE)} page={page} onChange={handleChangePage} color="secondary"/>
     </>
  );
};
