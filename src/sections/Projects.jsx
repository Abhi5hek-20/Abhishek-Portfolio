import { useState } from "react";
import { myProjects } from "../constants";
import { X, LinkIcon } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div id="work" className="min-h-screen">
      <section className="c-space section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
              My Projects |
            </h1>
            <a
              href="https://github.com/Abhi5hek-20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center text-white font-bold text-2xl md:text-4xl hover:text-blue-400 transition-colors"
            >
              Explore on GitHub <LinkIcon className="w-7 h-7" />
            </a>
          </div>

          {myProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-100 mb-4 text-md line-clamp-3">
                {project.description.substring(0, 150)}...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-gray-600 text-gray-200 px-2 py-1 rounded-full text-xs"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleReadMore(project)}
                className="bg-gradient-to-r from-blue-600 to-purple-800 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center sm:p-3">
            <div className=" relative rounded-2xl shadow-2xl max-w-7xl w-full max-h-[94vh] overflow-y-auto p-6 pt-0 ">
              <button
                onClick={handleClose}
                className="absolute right-0 text-white hover:text-blue-400 transition mx-2"
              >
                <X size={28} />
              </button>

              <div className="mb-6 text-center text-2xl font-bold">
                <h2 className="text-white text-2xl font-bold  text-center">
                {selectedProject.title}
              </h2>
              { selectedProject.id == 2 && (<h2>{selectedProject?.subTitle}</h2>)}
              </div>

              {/* Images */}
              <div className="flex flex-col sm:flex-row gap-9 mb-6 overflow-x-auto ">
                {selectedProject.extraImages?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                    className="object-contain max-h-[260px]"
                  />
                ))}
              </div>

              {/* Description */}
              <div className="text-white ">
                <h3 className="text-blue-400 text-2xl font-semibold mb-2">
                  Description
                </h3>
                <p className="text-gray-300 mb-2">
                  {selectedProject.description}
                </p>
                {selectedProject.subDescription?.map((desc, idx) => (
                  <p key={idx} className="text-gray-300 mb-2">
                    {desc}
                  </p>
                ))}

                {/* Tags */}
                <div className="mt-6 ">
                  <h3 className="text-blue-400 text-2xl font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
