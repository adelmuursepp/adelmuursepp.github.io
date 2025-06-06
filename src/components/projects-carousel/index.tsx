import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import ProjectModal from '../project-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface GithubProject {
  name: string;
  html_url: string;
  description?: string;
  stargazers_count: string | number;
  forks_count: string | number;
  language?: string;
  // Extended fields for modal
  longDescription?: string;
  media?: Array<{
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }>;
  technologies?: string[];
  features?: string[];
  achievements?: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
}

interface ExternalProject {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  // Extended fields for modal
  longDescription?: string;
  media?: Array<{
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }>;
  technologies?: string[];
  features?: string[];
  achievements?: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
}

interface ProjectsCarouselProps {
  githubProjects?: GithubProject[];
  externalProjects?: ExternalProject[];
  projectsPerView?: number;
  autoplay?: boolean;
  showSeeAll?: boolean;
  onSeeAll?: () => void;
}

const ProjectsCarousel: FC<ProjectsCarouselProps> = ({
  githubProjects = [],
  externalProjects = [],
  projectsPerView = 3,
  autoplay = true,
  showSeeAll = true,
  onSeeAll,
}) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProjects = [
    ...githubProjects.map(p => ({ ...p, type: 'github' })),
    ...externalProjects.map(p => ({ ...p, type: 'external' })),
  ];


  const handleProjectClick = (project: any) => {
    const modalData = {
      title: project.type === 'github' ? project.name : project.title,
      description: project.description || '',
      longDescription: project.longDescription,
      media: project.media,
      technologies: project.technologies || (project.language ? [project.language] : []),
      features: project.features,
      achievements: project.achievements,
      links: project.links || {
        github: project.type === 'github' ? project.html_url : undefined,
        website: project.type === 'external' ? project.link : undefined,
      },
    };
    setSelectedProject(modalData);
    setIsModalOpen(true);
  };

  const renderProjectCard = (project: any) => {
    if (project.type === 'github') {
      return (
        <div
          className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full min-h-[200px]"
          onClick={() => handleProjectClick(project)}
        >
          <div className="card-body">
            <h3 className="card-title text-lg flex items-center gap-2">
              <FaGithub className="text-base-content/70" />
              {project.name}
            </h3>
            <p className="text-sm text-base-content/70 line-clamp-3">
              {project.description || 'No description available'}
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4">
              <div className="flex items-center gap-1 text-sm">
                <FaStar className="text-yellow-500" />
                <span>{project.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <FaCodeBranch className="text-base-content/70" />
                <span>{project.forks_count}</span>
              </div>
              {project.language && (
                <div className="badge badge-primary badge-sm ml-auto">
                  {project.language}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full min-h-[200px]"
          onClick={() => handleProjectClick(project)}
        >
          {project.imageUrl && (
            <figure className="aspect-video">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </figure>
          )}
          <div className="card-body">
            <h3 className="card-title text-lg">{project.title}</h3>
            <p className="text-sm text-base-content/70 line-clamp-3">
              {project.description}
            </p>
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-auto pt-4">
                {project.technologies.slice(0, 3).map((tech: string, index: number) => (
                  <span key={index} className="badge badge-primary badge-sm rounded-full">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="badge badge-ghost badge-sm rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  // If no projects, return null
  if (allProjects.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: projectsPerView },
          }}
          className="projects-carousel"
        >
          {allProjects.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="h-full">{renderProjectCard(project)}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showSeeAll && onSeeAll && allProjects.length > projectsPerView && (
          <div className="text-center mt-4">
            <button onClick={onSeeAll} className="btn btn-primary btn-sm">
              View All Repositories
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject || {}}
      />
    </>
  );
};

export default ProjectsCarousel;