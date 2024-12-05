import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiGit, 
  SiDocker, 
  SiJest, 
  SiRedux, 
  SiTailwindcss 
} from 'react-icons/si';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      items: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'React', icon: SiReact, color: 'text-cyan-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
        { name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' }
      ]
    },
    {
      title: 'Other Tools',
      items: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'Git', icon: SiGit, color: 'text-red-500' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
        { name: 'Jest', icon: SiJest, color: 'text-red-700' }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16" id="tech-stack">
      <div className="max-w-screen-xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          My Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-700">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.items.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg"
                  >
                    <tech.icon className={`text-4xl mb-2 ${tech.color}`} />
                    <span className="text-sm text-gray-700 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-gray-600">
          <p>
            Constantly learning and exploring new technologies to deliver 
            cutting-edge web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;