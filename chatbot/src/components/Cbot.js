import React, { useState} from "react";
import ChatBot from "react-simple-chatbot";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "./Calnedar.css";
import Select from 'react-select';
//import 'react-select/dist/react-select.css';

const Cbot = () => {
  let [selectedDate, setSelectedDate] = useState(null);
  let currentDate = new Date();
 
  const handleDateChange = (date) => {
   setSelectedDate('');
   console.log(date)
 console.log("SD",selectedDate);

  };
  
  

  const options = [
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' },
    { value: '32', label: '32' },
    { value: '33', label: '33' },
    { value: '34', label: '34' },
    { value: '35', label: '35' },
    { value: '36', label: '36' },
    { value: '37', label: '37' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  
  };
 
 
  
  
       let steps=[
  {
    id: "0",
    message: "Hello, Welcome to the student info system!",
    trigger: "1",
  },
  {
    id: "1",
    options: [{ value: "y", label: "Got it", trigger: "select" }],
  },
  {
    id: "select",
    message: "Pick a slot",
    trigger: "2",
  },
  {
    id: "2",
    component: (
      <Calendar
        value={selectedDate}
        minDate={currentDate}
        onChange={handleDateChange}
      />
    ),
    trigger: "slot",
  },
  {
    id: "slot",
    options: [
      { value: "Mng", label: "Morning", trigger: "Mtimings" },
      { value: "Aft", label: "Noon", trigger: "Atimings" },
      { value: "Eve", label: "Evening", trigger: "Etimings" },
    ],
  },
  {
    id: "Mtimings",
    options: [
      { value: "9", label: "9 AM", trigger: "time-selected" },
      { value: "10", label: "10 AM", trigger: "time-selected" },
      { value: "11", label: "11 AM", trigger: "time-selected" },
      { value: "12", label: `12'O clock`, trigger: "time-selected" },
    ],
  },
  {
    id: "Atimings",
    options: [
      { value: "1", label: "1 PM", trigger: "time-selected" },
      { value: "2", label: "2 PM", trigger: "time-selected" },
      { value: "3", label: "3 PM", trigger: "time-selected" },
      { value: "4", label: "4 PM", trigger: "time-selected" },
    ],
  },
  {
    id: "Etimings",
    options: [
      { value: "5", label: "5 PM", trigger: "time-selected" },
      { value: "6", label: "6 PM", trigger: "time-selected" },
      { value: "7", label: "7 PM", trigger: "time-selected" },
      { value: "8 pm", label: "8 PM", trigger: "time-selected" },
    ],
  },
  {
    id: "time-selected",
    message: `Should we confirm your Schedule for ${
      selectedDate ? selectedDate.toString(): ''
    }?`,
    trigger: "options",
  },
  {
    id: "options",
    options: [
      {
        value: 'Yes',
        label: "Yes",
        trigger: '3'
      },
      {
        value: 'No',
        label: 'No',
      }
    ],
  },
  {
    id: '3',
    message: 'Enter your name',
    trigger: 'user-input'
  },
  {
    id: 'user-input',
    user: true,
    trigger: '4'
  },
  {
    id: '4',
    message: "Enter your age",
    trigger: 'age_confirm'
  },
  {
    id: 'age_confirm',
    component: (
      <Select
        options={options}
        value={options.filter(function (option) {
          return option.value === selectedOption;
        })}
        onChange={handleOptionChange}
      />
    ),
  },
  
]


  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <ChatBot steps={steps} />
    </div>
  );
};

export default Cbot;
