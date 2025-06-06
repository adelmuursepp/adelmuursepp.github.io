import { FC } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaPlay } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription?: string;
    technologies?: string[];
    media?: MediaItem[];
    links?: {
      github?: string;
      demo?: string;
      website?: string;
    };
    features?: string[];
    achievements?: string[];
  };
}

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-base-100 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-base-300">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="btn btn-ghost btn-sm btn-circle"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                {project.media && project.media.length > 0 && (
                  <div className="relative bg-base-200">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      className="w-full"
                      spaceBetween={0}
                      slidesPerView={1}
                    >
                      {project.media.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative aspect-video">
                            {item.type === 'image' ? (
                              <img
                                src={item.url}
                                alt={item.caption || `${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="relative w-full h-full">
                                <video
                                  src={item.url}
                                  controls
                                  className="w-full h-full"
                                >
                                  Your browser does not support the video tag.
                                </video>
                                <FaPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl pointer-events-none opacity-50" />
                              </div>
                            )}
                            {item.caption && (
                              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                                {item.caption}
                              </div>
                            )}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-base-content/80">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-base-content/80">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.achievements && project.achievements.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="text-base-content/80">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="badge badge-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.links && (
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm gap-2"
                        >
                          <FaGithub /> View Code
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-primary gap-2"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-secondary gap-2"
                        >
                          <FaExternalLinkAlt /> Website
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;