import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCounts, setAnimatedCounts] = useState({});

  const skills = [
    {
      name: 'LLM Integration',
      logo: 'sparkles-outline',
      level: 'Advanced',
      count: 90,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Agentic AI',
      logo: 'git-network-outline',
      level: 'Advanced',
      count: 88,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Voice AI',
      logo: 'mic-outline',
      level: 'Advanced',
      count: 85,
      color: 'from-emerald-500 to-cyan-500',
    },
    {
      name: 'RAG / NLP',
      logo: 'language-outline',
      level: 'Advanced',
      count: 82,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Node.js',
      logo: 'logo-nodejs',
      level: 'Advanced',
      count: 88,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Python',
      logo: 'logo-python',
      level: 'Advanced',
      count: 85,
      color: 'from-yellow-500 to-blue-500',
    },
    {
      name: 'React',
      logo: 'logo-react',
      level: 'Advanced',
      count: 90,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Framer Motion',
      logo: 'aperture-outline',
      level: 'Intermediate',
      count: 78,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Tailwind CSS',
      logo: 'color-palette-outline',
      level: 'Advanced',
      count: 90,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      name: 'MongoDB',
      logo: 'leaf-outline',
      level: 'Advanced',
      count: 82,
      color: 'from-green-600 to-green-400',
    },
    {
      name: 'Firebase',
      logo: 'logo-firebase',
      level: 'Advanced',
      count: 80,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      name: 'Supabase',
      logo: 'flash-outline',
      level: 'Intermediate',
      count: 75,
      color: 'from-emerald-500 to-green-500',
    },
    {
      name: 'Google Cloud',
      logo: 'cloud-outline',
      level: 'Intermediate',
      count: 72,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'JavaScript',
      logo: 'logo-javascript',
      level: 'Advanced',
      count: 88,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'JWT / REST APIs',
      logo: 'shield-checkmark-outline',
      level: 'Advanced',
      count: 85,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Git / GitHub',
      logo: 'logo-github',
      level: 'Advanced',
      count: 85,
      color: 'from-gray-600 to-gray-400',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedCounts((prev) => ({
                ...prev,
                [index]: skill.count,
              }));
            }, index * 80);
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

  const categories = [
    {
      title: 'AI & Machine Learning',
      skills: ['LLM Integration', 'Agentic AI Architectures', 'Real-time Voice AI', 'RAG', 'NLP'],
      icon: '🧠',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Backend & Automation',
      skills: ['Node.js', 'Python', 'Express.js', 'JWT', 'RESTful APIs'],
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Frontend',
      skills: ['React', 'Framer Motion', 'Tailwind CSS', 'DaisyUI'],
      icon: '🎨',
      color: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Data & Cloud',
      skills: ['MongoDB', 'Firebase', 'Supabase', 'Google Cloud (GCloud)'],
      icon: '☁️',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div
        className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            The AI, backend, and frontend stack I use to ship production agentic systems
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-4 lg:p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl lg:text-4xl mb-3 lg:mb-4 animate-bounce">{category.icon}</div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-100 mb-3 lg:mb-4">{category.title}</h3>
              <div className="space-y-1 lg:space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-gray-300 font-semibold text-sm lg:text-base">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative glass-card p-6 lg:p-8 text-center group hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/6 via-purple-500/6 to-blue-500/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <div
                className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                style={{ animationDelay: '0.2s' }}
              ></div>

              <div className="relative mb-6 lg:mb-8">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-24 h-24 lg:w-32 lg:h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgb(226, 232, 240)" strokeWidth="6" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * (animatedCounts[index] || 0)) / 100}
                      className="transition-all duration-1000 ease-out drop-shadow-lg"
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#06b6d4' }} />
                        <stop offset="50%" style={{ stopColor: '#3b82f6' }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative group-hover:animate-bounce">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 scale-150"></div>
                      <ion-icon
                        name={skill.logo}
                        className="text-4xl lg:text-5xl text-gray-100 group-hover:text-cyan-400 transition-all duration-300 drop-shadow-lg relative z-10"
                      ></ion-icon>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 lg:-bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-md opacity-50"></div>
                    <span className="relative text-sm lg:text-base font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent px-3 py-1 rounded-full bg-gray-900/60 shadow-lg">
                      {animatedCounts[index] || 0}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mt-4">
                <h3 className="text-base lg:text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className="relative inline-block">
                  <p className="text-gray-300 text-sm lg:text-base font-semibold group-hover:text-gray-100 transition-colors duration-300">
                    {skill.level}
                  </p>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className="mt-12 lg:mt-16 glass-card p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <h3 className="text-xl lg:text-2xl font-bold text-gray-100 text-center mb-6 lg:mb-8">
            Interpersonal & Workflow Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
            {[
              'Responsibility',
              'Time Management',
              'Quick Learning',
              'Team Collaboration',
              'Figma → Code',
              'Scalable Architecture',
              'Performance Optimization',
              'Agile Methodology',
            ].map((skill, index) => (
              <div
                key={skill}
                className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-gray-900/40 rounded-lg border border-gray-800 hover:border-cyan-600/30 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
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

export default Skills;
