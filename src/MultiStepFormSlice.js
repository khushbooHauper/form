import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentStep: 0,
  formData: {
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    bank: '',
    accountNumber: '',
    ifsc: '',
    education: [{ courseName: '', university: '', percentage: '', passingYear: '' }],
    experience: [{ company: "", designation: "", joiningDate: "", leavingDate: "" }]
  },
  list:[
    {
      name: 'khushboo',
      email: 'khushboo@gmail.com',
      password: '123',
      address: 'gota',
      city: 'Ahmedabad',
      state: 'Gujarat',
      bank: 'hdfc',
      accountNumber: 353465657676786,
      ifsc: 'GRS665575',
      education: [{ courseName: 'MBA', university: 'RTU', percentage: '92', passingYear: '2015' }],
      experience: [{ company: "IBM", designation: "Engineer", joiningDate: "2022-05-11", leavingDate: "2023-12-09" }]
    },
    {
      name: 'john',
      email: 'john@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'olive',
      email: 'olive@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'max',
      email: 'max@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'farah',
      email: 'farah@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'matthew',
      email: 'matthew@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'kunal',
      email: 'kunal@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'sid',
      email: 'sid@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'shehnaaz',
      email: 'john@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'mandeep',
      email: 'mandeep@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'sanjana',
      email: 'sanjana@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'suresh',
      email: 'suresh@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'pramod',
      email: 'pramod@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    {
      name: 'neeta',
      email: 'neeta@gmail.com',
      password: '676',
      address: 'maninagar',
      city: 'pune',
      state: 'Maharashtra',
      bank: 'bob',
      accountNumber: 2435798966766,
      ifsc: 'PN446666',
      education: [{ courseName: 'IIT', university: 'GTU', percentage: '90', passingYear: '2021' }],
      experience: [{ company: "Accenture", designation: "Manager", joiningDate: "2018-08-28", leavingDate: "2020-01-21" }]
    },
    
  ],
  newformData : {
    PersonalInfo: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '555-1234',
      residence: 'New York',
      password: '********',
      confirmPassword: '********',
    },
    BankDetails: {
      bank: 'Bank of America',
      accountNumber: '1234567890',
      ifsc: 'BOFAUS3N',
      branch: 'New York',
    },
    EducationInfo: {
      course: 'Computer Science',
      university: 'Harvard University',
      percentage: '3.8',
      passingYear: '2022',
    },
    ExperienceInfo: {
      company: 'Google',
      position: 'Software Engineer',
      joinDate: '01/01/2020',
      endDate: '01/01/2022',
    },
  },
  newList:[
    {
      PersonalInfo: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '555-1234',
        residence: 'New York',
        password: '********',
        confirmPassword: '********',
      },
      BankDetails: {
        bank: 'Bank of America',
        accountNumber: '1234567890',
        ifsc: 'BOFAUS3N',
        branch: 'New York',
      },
      EducationInfo: {
        course: 'Computer Science',
        university: 'Harvard University',
        percentage: '3.8',
        passingYear: '2022',
      },
      ExperienceInfo: {
        company: 'Google',
        position: 'Software Engineer',
        joinDate: '01/01/2020',
        endDate: '01/01/2022',
      },
    },
    {
      PersonalInfo: {
        name: 'amita',
        email: 'amita@gmail.com',
        phone: '655-32323',
        residence: 'London',
        password: '********',
        confirmPassword: '********',
      },
      BankDetails: {
        bank: 'Bank of London',
        accountNumber: '454545656566',
        ifsc: 'BFTYUI7J8',
        branch: 'New York',
      },
      EducationInfo: {
        course: 'Computer Science',
        university: 'Harvard University',
        percentage: '3.8',
        passingYear: '2022',
      },
      ExperienceInfo: {
        company: 'microsoft',
        position: 'Manager',
        joinDate: '01/01/2024',
        endDate: '01/01/2026',
      },
    },
  ],
  search: "",
};

export const multiStepFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    userList: (state, action) => {
      const formData = action.payload;
      
      const userData = [
        { name: formData.name ,email: formData.email,address: formData.address,city: formData.city,state: formData.state, bank: formData.bank,accountNumber: formData.accountNumber , ifsc: formData.ifsc,education: formData.education, experience: formData.experience} 
      ];
      state.list.push(...userData);
    },
    editFormData: (state, action) => {
      const { index, updatedData } = action.payload;
      state.list[index] = updatedData;
    },
    deleteFormData(state, action) {
      const index = action.payload;
      state.list.splice(index, 1);
    },
    setnewData: (state, action) => {
      state.newformData = { ...state.newformData, ...action.payload };
    },
    newList: (state, action) => {
      const newformData = action.payload;
      
      const newuserData = [
        { name: newformData.PersonalInfo.name ,email: newformData.PersonalInfo.email,phone: newformData.PersonalInfo.phone,residence: newformData.PersonalInfo.residence,password: newformData.PersonalInfo.password, bank: newformData.BankDetails.bank,accountNumber: newformData.BankDetails.accountNumber , ifsc: newformData.BankDetails.ifsc, branch: newformData.BankDetails.branch, course: newformData.EducationInfo.course, university: newformData.EducationInfo.university, percentage: newformData.EducationInfo.percentage,passingYear: newformData.EducationInfo.passingYear,company: newformData.ExperienceInfo.company,position: newformData.ExperienceInfo.position,joinDate: newformData.ExperienceInfo.joinDate, endDate: newformData.ExperienceInfo.endDate} 
      ];
      state.newList.push(...newuserData);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((list) => list.email !== action.payload);
    },
  
  },
});

export const selectFilteredItems = (state) => {
  const search = state.list.search.toLowerCase();
  return state.form.list.filter((list) =>
  list.name.toLowerCase().includes(search)
  );
};

export const { setSearch, deleteItem, nextStep, prevStep, setFormData ,userList,setCurrentStep,editFormData,deleteFormData,newList,setnewData} = multiStepFormSlice.actions;

export default multiStepFormSlice.reducer;
