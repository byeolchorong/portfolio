import { ServerCog, Database, MonitorCheck, Wrench } from "lucide-react";

function Skills() {
  const skillsData = [
    {
      title: "Backend",
      icon: <ServerCog size={20} />,
      items: ["Java", "Spring Boot", "Spring MVC", "JDBC", "JSP"],
    },
    { title: "Database", icon: <Database size={20} />, items: ["MySQL"] },
    {
      title: "Frontend",
      icon: <MonitorCheck size={20} />,
      items: ["JavaScript", "React", "HTML5", "CSS3"],
    },
    {
      title: "Tools",
      icon: <Wrench size={20} />,
      items: ["IntelliJ", "Git", "GitHub", "VS Code", "Maven", "Gradle"],
    },
  ];

  return (
    <section id="skills" className="container">
      <h2>SKILLS</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="card skill-card">
            <div className="skill-header">
              {skill.icon}
              <h3>{skill.title}</h3>
            </div>
            <ul className="skill-list">
              {skill.items.map((item, i) => (
                <li key={i} className="skill-tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
