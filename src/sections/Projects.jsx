import { useState } from "react";
import { myProjects } from "../constants";
import { ChevronRight, ChevronLeft, X, LinkIcon } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentView, setCurrentView] = useState("images"); // 'images' or 'info'

  const handleReadMore = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setCurrentView("images");
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentView("images");
    setSelectedProject(null);
  };

  const handleNext = () => setCurrentView("info");
  const handlePrev = () => setCurrentView("images");

  return (
    <div id="work" className="min-h-screen">
      <section className="c-space section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="flex sm:flex-row md:flex-row mb-8 gap-2 flex-col items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">My Projects  |</h1>
            <a
              href="https://github.com/Abhi5hek-20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center text-white font-bold text-2xl md:text-4xl hover:text-blue-400 transition-colors whitespace-nowrap"
            >
             Explore on GitHub  <LinkIcon className="w-7 h-7" />
            </a>
          </div>

          {myProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                {project.description.substring(0, 150)}...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleReadMore(project)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="rounded-xl max-w-xl h-150 overflow-hidden relative w-fit mx-auto"> {/* project card */}
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 hover:text-blue-400 z-10 w-1"  
              >
                <X size={20} />
              </button>

              {/* Images View */}
              {currentView === "images" && (
                <div className="relative flex flex-col items-center">
                  <h2 className="text-xl font-bold text-white mb-2 mt-4 p-2">{selectedProject.title}</h2>
                  <div className="flex flex-col w-[70vh] overflow-y-auto max-h-[75vh] gap-1  justify-center">
                    {selectedProject.extraImages &&
                      selectedProject.extraImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${selectedProject.title} screenshot ${idx + 1}`} 
                          className="w-fit h-60 mb-1 object-contain mx-auto p-5"
                        />
                      ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className="pr-0 absolute right-8 top-[52%] -translate-y-1/2 bg-transparent text-white rounded-full w-1 h-0 "
                    style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}
                  >
                    <ChevronRight size={30} />
                  </button>
                </div>
              )}

              {/* Info View */}
              {currentView === "info" && (
                <div className="relative p-9 pt-3 mt-4 max-h-[85vh] overflow-y-auto">
                  <h2 className="text-lg font-bold text-white mb-6">{selectedProject.title}</h2>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Description</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {selectedProject.description}
                    </p>
                    {selectedProject.subDescription?.map((desc, idx) => (
                      <p key={idx} className="text-gray-300 leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {selectedProject.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h3>
                      <ul className="text-gray-300 space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Left Arrow */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent text-white rounded-full"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
                  >
                    <ChevronLeft size={30} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
