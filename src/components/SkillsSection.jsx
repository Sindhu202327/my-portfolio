import React from "react";
const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
  },
  {
    name: "React",
    level: 85,
    category: "frontend",
  },
  {
    name: "Angular 4+",
    level: 85,
    category: "frontend",
  },
  {
    name: "Typescript",
    level: 80,
    category: "frontend",
  },
  {
    name: "Git/GitHub",
    level: 80,
    category: "tools",
  },
  {
    name: "JIRA",
    level: 90,
    category: "tools",
  },
  {
    name: "VS Code",
    level: 90,
    category: "tools",
  },
];
function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item, key) => {
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="font-semibold text-md">{item.name}</div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                  style={{width: item.level + "%"}}/>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
