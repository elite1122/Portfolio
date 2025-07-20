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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationDetails.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-16`}
                style={{animationDelay: `${index * 300}ms`}}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform md:-translate-x-1/2 border-4 border-slate-900 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${edu.color} text-white`}>
                            {edu.level}
                          </span>
                          <span className="text-slate-400 text-sm font-medium">
                            {edu.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 font-semibold mb-4">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                      <span className="text-emerald-400 font-semibold">{edu.grades}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed">
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
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">
            Academic <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="text-3xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-slate-400 text-sm">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Developed */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-bold text-slate-100 text-center mb-8">
            Skills Developed Through Education
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                style={{animationDelay: `${index * 75}ms`}}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-slate-300 font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;