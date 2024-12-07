import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";


const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  githubLink,
  liveLink,
}: {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative w-full pt-[56.25%] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 min-h-[72px]">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 transition-colors"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-950 text-indigo-950 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <BiLinkExternal className="text-xl" />
              See Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projectsData = [
    {
      title: "Mealit Website",
      image: "/images/mealit.png",
      description:
        "A comprehensive web application built with React, utilizing Redux for state management and SCSS for styling.",
      technologies: ["React", "Redux", "SCSS"],
      githubLink: "https://github.com/mealit01/website",
      liveLink: "https://mealit01.github.io/website/#/",
    },
    {
      title: "Bayt Alebaa",
      image: "/images/bayt.png",
      description: "An E-commerce website built with Magento 2, using Html, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Jquery"],
      liveLink: "https://baytalebaa.com/en",
    },
    {
      title: "Rock Paper Scissors",
      image: "/images/game.png",
      description: "A special version of the classic game of Rock, Paper, Scissors.",
      technologies: ["React", "SCSS", "Motion.js"],
      liveLink: "https://salma247.github.io/game-react/",
      githubLink: "https://github.com/salma247/game-react"
    }
  ];

  return (
    <section
      className="max-w-screen-xl mx-auto px-4 py-16 md:py-24"
      id="projects"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of my recent projects, demonstrating my skills in web development 
          and creative problem-solving.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}