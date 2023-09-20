import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate =useNavigate();
    return (
        <div>
        <h1 className="text-center mt-5 font-bold text-2xl">Student Info System</h1>
        <div className="flex h-[400px] items-center justify-center">
        <button className="flex bg-blue-400 px-5 py-2 text-white mx-auto justify-center items-center mt-10 rounded-lg shadow-lg"
        onClick={()=>navigate("/cbot")}>
       Enroll Now
        </button>
        </div>
       
      </div>
       
    );
}

export default Home;
