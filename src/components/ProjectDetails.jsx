import { motion } from "motion/react";
import { useState } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  extraImages,
  tags,
  href,
  closeModal,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % extraImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + extraImages.length) % extraImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>

        {/* Step 1: Image Slider */}
        {!showInfo && Array.isArray(extraImages) && extraImages.length > 0 && (
          <div className="relative flex flex-col items-center p-5 gap-8">
            <div className="bg-gray-600/60 rounded-xl flex flex-col items-center justify-center w-full h-[35rem] mb-4">
              <img
                src={extraImages[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                className="h-32 object-contain mb-4"
              />
              <p className="text-lg text-white/90 font-semibold mt-2">
                {currentIndex === 0 ? "Login Interface" : "Dashboard Interface"}
              </p>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-[-32px] top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full shadow hover:bg-blue-700 transition z-10"
            >
              <img src="assets/arrow-left.svg" className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-[-32px] top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full shadow hover:bg-blue-700 transition z-10"
            >
              <img src="assets/arrow-right.svg" className="w-5 h-5" />
            </button>

            {/* Proceed to Info View */}
            <button
              onClick={() => setShowInfo(true)}
              className="mt-2 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              View Project Info
            </button>
          </div>
        )}

        {/* Step 2: Info Section */}
        {(showInfo || !extraImages || extraImages.length === 0) && (
          <div className="p-5">
            <button
              onClick={() => setShowInfo(false)}
              className="flex items-center gap-2 px-3 py-1 mb-4 text-base font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              <img src="assets/arrow-left.svg" className="w-5 h-5" />
              Back
            </button>
            <h5 className="mb-2 text-lg font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p
                key={index}
                className="mb-3 font-normal text-neutral-400"
              >
                {subDesc}
              </p>
            ))}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
