import { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = () => {
  const [activeCompany, setActiveCompany] = useState(0);

  const experiences = [
    {
      company: 'iCloud-Ready',
      title: 'Frontend Engineer',
      location: 'San Francisco, USA (Remote)',
      period: 'April 2024 - Present',
      responsibilities: [
        'Revamped the ilpApps website, improving performance by 50% and enhancing user experience',
        'Built responsive and interactive user interfaces using React, Next.js, and Ant Design',
        'Collaborated with cross-functional teams to streamline feature development',
        'Implemented advanced RESTful API solutions with React Query and Axios'
      ],
      technologies: ['JavaScript', 'React', 'Next.js', 'Ant Design', 'RESTful APIs']
    },
    {
      company: 'Bayt Alebaa',
      title: 'Frontend Engineer',
      location: 'Cairo, Egypt (Onsite)',
      period: 'November 2023 - April 2024',
      responsibilities: [
        'Developed high-performance user interfaces for an e-commerce platform with over 200,000 products',
        'Achieved 70% faster load times, significantly boosting user engagement',
        'Built a comprehensive dashboard using HTML, CSS, JavaScript, and jQuery with Laravel',
        'Provided critical insights and analytics to support decision-making'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Laravel']
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24" id="experience">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A journey of creating impactful web solutions and driving technological innovation
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-x-visible">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveCompany(index)}
                className={`
                  flex items-center gap-3 px-4 py-3 text-left w-full 
                  ${activeCompany === index 
                    ? 'bg-indigo-950 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}
                  border-b md:border-b-0 md:border-l-4 
                  transition-all duration-300
                `}
              >
                <FaBriefcase />
                {exp.company}
              </button>
            ))}
          </div>

          <div className="md:w-3/4 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {experiences[activeCompany].title} 
              <span className="text-base text-gray-600 ml-2">
                @ {experiences[activeCompany].company}
              </span>
            </h3>
            <div className="text-gray-600 mb-4">
              {experiences[activeCompany].location} | {experiences[activeCompany].period}
            </div>

            <ul className="space-y-3 mb-6 text-gray-700">
              {experiences[activeCompany].responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-indigo-950 flex-shrink-0 mt-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  {resp}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experiences[activeCompany].technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;