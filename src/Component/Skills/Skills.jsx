import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCounts, setAnimatedCounts] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill percentages
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedCounts(prev => ({
                ...prev,
                [index]: skill.count
              }));
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    {
      name: "HTML5",
      logo: "logo-html5",
      level: "Advanced",
      count: 90,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CSS3",
      logo: "logo-css3", 
      level: "Advanced",
      count: 85,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "JavaScript",
      logo: "logo-javascript",
      level: "Advanced",
      count: 80,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "React",
      logo: "logo-react",
      level: "Intermediate",
      count: 75,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Node.js",
      logo: "logo-nodejs",
      level: "Intermediate", 
      count: 70,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "MongoDB",
      logo: "logo-mongodb",
      level: "Intermediate",
      count: 65,
      color: "from-green-600 to-green-400"
    },
    {
      name: "Firebase",
      logo: "logo-firebase",
      level: "Beginner",
      count: 60,
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "Git",
      logo: "logo-github",
      level: "Intermediate",
      count: 75,
      color: "from-gray-600 to-gray-400"
    }
  ];

  const categories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
      icon: "🎨",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "MongoDB", "Firebase"],
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Figma"],
      icon: "🛠️", 
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={skill} className="text-slate-400 font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="relative mb-6">
                {/* Circular Progress */}
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="rgb(71 85 105)" 
                      strokeWidth="8" 
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="url(#gradient)" 
                      strokeWidth="8" 
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * (animatedCounts[index] || 0)) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="stop-cyan-500" />
                        <stop offset="100%" className="stop-blue-500" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ion-icon 
                      name={skill.logo}
                      class="text-3xl text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
                    ></ion-icon>
                  </div>
                </div>

                {/* Percentage */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    {animatedCounts[index] || 0}%
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-2">{skill.name}</h3>
              <p className="text-slate-400 text-sm">{skill.level}</p>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-bold text-slate-100 text-center mb-8">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Responsive Design",
              "RESTful APIs", 
              "Version Control",
              "Testing",
              "Performance Optimization",
              "UI/UX Design",
              "Agile Methodology",
              "Problem Solving"
            ].map((skill, index) => (
              <div 
                key={skill}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                style={{animationDelay: `${index * 50}ms`}}
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

export default Skills;