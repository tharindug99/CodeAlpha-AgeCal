import React, { useState } from 'react';

const AgeCalculator = () => {

    const [birthDate, setBirthDate]=useState('');
    const [age,setAge] = useState(0);

    const calculateAge= () => {
        const today = new Date();
        const birthDateday = new Date(birthDate);

        let age = today.getFullYear() - birthDateday.getFullYear();
        const monthDiff = today.getMonth() - birthDateday.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateday.getDate())) 
        {
          age--;  
        }
        setAge(age);
    }

    const resetAge =()=> {
        setAge(0);
        setBirthDate("");
    }

  return (
    <>
      <div className='mx-5 container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

        {/* Get The user Input in here */}
        <div className='m-5 py-10 flex flex-col bg-white shadow-md'>
          <div className="grid grid-cols-1">
            <div>
              <h1 className='mx-10'>Date
              <input className="mx-5 date border-2 rounded-2xl p-3 border-black" type="date" value={birthDate} onChange={e => {
                setBirthDate(e.target.value);
              }}></input>
              </h1>
              
            </div>
            <div className='button_container flex justify-center gap-x-5 mt-10'>
                <button
                className="bg-teal-600 rounded-md p-5 text-white hover:bg-teal-700 transition duration-300"
                onClick={calculateAge}
                >
                Calculate Age
                </button>
                <button
                className="bg-red-600 rounded-md p-5 text-white hover:bg-red-700 transition duration-300"
                onClick={resetAge}
                >
                Reset Age
                </button>
      </div>
          </div>
        </div>

        {/* Get The user Output in here */}
        <div className='m-5 py-10 flex flex-start bg-white shadow-md'>
          <h1 className='mx-10'>Your are  {age > 0 ? `${age}` : ``} years old..</h1>
        </div>
      </div>
    </>
  );
};

export default AgeCalculator;
