import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Daffodil International University',
      grades: 'CGPA: 3.89',
      year: ' [2020-2023]',
      desc: "I have completed my CSE degree from Daffodil International University, Savar, Dhaka.",
    },
    {
      degree: 'Higher Secondary School Certificate - HSC',
      institution: 'K.C. College, Jhenaidah',
      grades: 'Grade: 5.00 ',
      year: ' [2017-2018]',
      desc: "I completed my HSC from K.C. College, Jhenaidah, where I studied Science.",       
    },
    {
      degree: 'Secondary School Certificate - SSC',
      institution: 'Jhenaidah Govt. High School',
      grades: 'Grade: 5.00 ',
      year: ' [2015-2016]',
      desc: "I completed my SSC from Jhenaidah Govt. High School, where I studied Science.",       
    },
  ];

  return (
    <div id='education' className="container mx-auto px-4 py-16">
      <h3 className="text-4xl text-center font-semibold mb-1 text-gray-100">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal text-gray-300 mb-8">My educational details are as follows.</p>
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <div className="text-lg font-medium mb-2 text-gray-300">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-300">{edu.institution}</div>
              <div className="text-base text-gray-300">{edu.grades}</div>
              <div className="text-base text-gray-300">{edu.year}</div>
            </div>
            <p className="text-gray-300">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;