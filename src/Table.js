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
import {  useSelector } from 'react-redux';


const SimpleTable = ({data}) => {
  const newList = useSelector((state)=> state.form.newList)
 
  
    return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>residence</TableCell>
            <TableCell>password</TableCell>
            <TableCell>Bank</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>IFSC</TableCell>
            <TableCell>branch</TableCell>
            <TableCell>course</TableCell>
            <TableCell>university</TableCell>
            <TableCell>percentage</TableCell>
            <TableCell>passingYear</TableCell>
            <TableCell>company</TableCell>
            <TableCell>position</TableCell>
            <TableCell>joinDate</TableCell>
            <TableCell>endDate</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {newList &&
            newList.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.PersonalInfo.name}</TableCell>
                <TableCell>{user.PersonalInfo.email}</TableCell>
                <TableCell>{user.PersonalInfo.phone}</TableCell>
                <TableCell>{user.PersonalInfo.residence}</TableCell>
                <TableCell>{user.PersonalInfo.password}</TableCell>
                <TableCell>{user.BankDetails.bank}</TableCell>
                <TableCell>{user.BankDetails.accountNumber}</TableCell>
                <TableCell>{user.BankDetails.ifsc}</TableCell>
                <TableCell>{user.BankDetails.branch}</TableCell>
                <TableCell>{user.EducationInfo.course}</TableCell>
                <TableCell>{user.EducationInfo.university}</TableCell>
                <TableCell>{user.EducationInfo.percentage}</TableCell>
                <TableCell>{user.EducationInfo.passingYear}</TableCell>
                <TableCell>{user.ExperienceInfo.company}</TableCell>
                <TableCell>{user.ExperienceInfo.position}</TableCell>
                <TableCell>{user.ExperienceInfo.joinDate}</TableCell>
                <TableCell>{user.ExperienceInfo.endDate}</TableCell>
                
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
