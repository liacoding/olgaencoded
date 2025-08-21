import devbae from "/olga-images/devbae.png";

const Projects = () => {
  const projects = [
    {
      title: 'Devbae - Curated AI models & tools for developers.',
      image: devbae,
      description:
        'Built a developer-focused platform with curated AI models and a development tool hub; automated Hugging Face model discovery via Python (scraping, filtering, CSV generation, chunked GPT API processing) and deployed securely on AWS EC2 with NGINX + HTTPS.',
      url: 'https://devbae.app/',
      tags: ['Python', 'AWS EC2', 'Nginx', 'MERN', 'Scraping', 'HTTPS'],
    },
  ];

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 px-6">
      {/* Projects Title */}
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-400 text-center mb-20">
        Projects
      </h2>

      {/* Projects List */}
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-6 border border-[#1b2c68a0] rounded-lg"
          >
            {/* Project Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 w-full h-auto border border-gray-700"
                />
              </a>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-2/3 md:pl-8 space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-[#16f2b3] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
