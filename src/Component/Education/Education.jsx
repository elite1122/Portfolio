import React, { useEffect, useState } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const educationDetails = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Daffodil International University',
      grades: 'CGPA: 3.89',
      year: '2020-2023',
      desc: "Completed my CSE degree from Daffodil International University, Savar, Dhaka. Gained comprehensive knowledge in software development, algorithms, data structures, and modern web technologies.",
      icon: '🎓',
      level: 'Bachelor\'s Degree',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      degree: 'Higher Secondary School Certificate - HSC',
      institution: 'K.C. College, Jhenaidah',
      grades: 'Grade: 5.00',
      year: '2017-2018',
      desc: "Completed HSC from K.C. College, Jhenaidah, with a focus on Science subjects. Built a strong foundation in mathematics, physics, and analytical thinking.",
      icon: '📚',
      level: 'Higher Secondary',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'Secondary School Certificate - SSC',
      institution: 'Jhenaidah Govt. High School',
      grades: 'Grade: 5.00',
      year: '2015-2016',
      desc: "Completed SSC from Jhenaidah Govt. High School with excellent grades in Science stream. Developed core academic skills and discipline.",
      icon: '🏫',
      level: 'Secondary',
      color: 'from-emerald-500 to-green-500'
    },
  ];

  const achievements = [
    { title: "Dean's List", desc: "Top 10% of graduating class", icon: "🏆" },
    { title: "Perfect GPA", desc: "5.00 in both HSC & SSC", icon: "⭐" },
    { title: "Programming Excellence", desc: "Multiple coding competitions", icon: "💻" },
    { title: "Leadership", desc: "Student organization member", icon: "👥" }
  ];

  return (
    <section id='education' className="section-container">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic journey that shaped my technical foundation and passion for learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/60 via-purple-500/60 to-emerald-500/60 transform md:-translate-x-1/2"></div>

          <div className="space-y-8 lg:space-y-12">
            {educationDetails.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-16 animate-fade-in`}
                style={{animationDelay: `${index * 300}ms`}}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-cyan-400/70 to-blue-500/70 rounded-full transform md:-translate-x-1/2 border border-gray-800 z-10 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-blue-500/40 rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-8 lg:ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="glass-card p-4 lg:p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="text-2xl lg:text-4xl animate-bounce">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-1 lg:gap-2 mb-2">
                          <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${edu.color} text-white shadow-md`}>
                            {edu.level}
                          </span>
                          <span className="text-gray-300 text-xs lg:text-sm font-semibold">
                            {edu.year}
                          </span>
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-300 font-bold mb-3 lg:mb-4 text-sm lg:text-base">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-300 font-bold text-sm lg:text-base">{edu.grades}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      {edu.desc}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-100 mb-8 lg:mb-12">
            Academic <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="glass-card p-4 lg:p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-scale-in"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="text-2xl lg:text-3xl mb-3 lg:mb-4 animate-bounce">{achievement.icon}</div>
                <h4 className="text-base lg:text-lg font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-xs lg:text-sm font-medium">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Developed */}
        <div className="mt-12 lg:mt-16 glass-card p-6 lg:p-8 hover:shadow-2xl transition-all duration-500">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-100 text-center mb-6 lg:mb-8">
            Skills Developed Through Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              "Data Structures & Algorithms",
              "Software Engineering",
              "Database Management",
              "Web Development",
              "Object-Oriented Programming",
              "System Design", 
              "Mathematical Analysis",
              "Critical Thinking"
            ].map((skill, index) => (
              <div 
                key={skill}
                className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-gray-900/40 rounded-lg border border-gray-800 hover:border-cyan-600/30 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                style={{animationDelay: `${index * 75}ms`}}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex-shrink-0 animate-pulse"></div>
                <span className="text-gray-300 font-semibold text-xs lg:text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;