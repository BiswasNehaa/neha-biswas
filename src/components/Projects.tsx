
const Projects = () => {
  const projects = [
    {
      title: "Leftover Food Donation System",
      description: "A socially impactful system that connects donors and NGOs to manage leftover food effectively.",
      technologies: ["SQL", "DBMS"],
      features: [
        "Pickup request tracking",
        "Feedback system",
        "Delivery status management"
      ],
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for future projects */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">More Projects Coming Soon</h3>
            <p className="text-gray-600">Stay tuned for more exciting projects!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
