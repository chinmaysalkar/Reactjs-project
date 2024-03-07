import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'


const departmentgridlist =[
    { name: 'John Smith', 
      role: 'Web Development', 
      employeeCount: 105, 
      earnings: '$3100', 
      imageSrc:  avatar1 },

    { name: 'Maryam Amiri', 
      role: 'Web Development', 
      employeeCount: 105, 
      earnings: '$3100', 
      imageSrc: avatar2},

    { name: 'Fidel Tonn ', 
      role: 'Web Development',
      employeeCount: 12, 
      earnings: '$3100', 
      imageSrc: avatar1 },

    { name: 'Frank Camly ', 
      role: 'Web Development', 
      employeeCount: 105, 
      earnings: '$3100', 
      imageSrc: avatar3 },

    { name: 'Maryam Amiri ', 
      role: 'Web Development', 
      employeeCount: 105, 
      earnings: '$3100', 
      imageSrc: avatar1 },

    { name: 'John Smith ', 
      role: 'Web Development', 
      employeeCount: 55, 
      earnings: '$12,045', 
      imageSrc: avatar2 },

    { name: 'John Smith ', 
      role: 'Web Development', 
      employeeCount: 23, 
      earnings: '$5100', 

      imageSrc: avatar3 },
]


const departmentlistview =[
    {  no: '01 ',
       departmentname: 'Web Development',
       departmenthead: 'John Smith', 
       totalemployee: '102',   
       action: '', },

    {  no: '02 ',
       departmentname: ' Marketing', 
       departmenthead: 'Maryam Amiri', 
       totalemployee: '13',   
       action: '', },

    {  no: '03 ',
       departmentname: ' App Development',
       departmenthead: 'Frank Camly', 
       totalemployee: '21',  
       action: '', },

    {  no: '04 ',
       departmentname: ' Support',
       departmenthead: ' Gary Camara', 
       totalemployee: '84', 
       action: '', },

    {  no: '05 ',
       departmentname: ' Accounts',
       departmenthead: ' Fidel Tonn', 
       totalemployee: '11',   
       action: '', },

    {  no: '06 ',
       departmentname: ' PHP Open Source',
       departmenthead: ' Maryam Amiri', 
       totalemployee: '37',  
       action: '', },

    {  no: '07 ',
       departmentname: ' Design and Printing',
       departmenthead: ' Maryam Amiri', 
       totalemployee: '17', 
       action: '', },
]

export {departmentgridlist , departmentlistview}