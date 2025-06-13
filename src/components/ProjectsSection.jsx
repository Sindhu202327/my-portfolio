import React from "react";
import * as Project1 from '../../public/projects/project1' 
const projects = [
  {
    id: 1,
    title: "Book Management",
    description: "A React Application where we can find different types of genres and wide collection of books",
    image: Project1,
    tags: ["React","HTML", "SASS", "JavaScript"],
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Application used to track the expenses",
    image: "/my-portfolio/public/projects/project2.png",
    tags: ["React", "Redux"],
  },
  {
    id: 3,
    title: "Gallery",
    description: "An Application where we can post the photos using CRUD Operations",
    image: "/my-portfolio/public/projects/project3.png",
    tags: ["React", "Redux"],
  },
];
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with intention to detail, performance and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => {
           return <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => {
                        return <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                    })}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
