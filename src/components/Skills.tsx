
import { Code, Database, Palette, Brain, Users, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python"],
      color: "blue",
      icon: Code,
      description: "Core programming languages for problem-solving"
    },
    {
      title: "Databases & Tools",
      skills: ["SQL", "DBMS", "MongoDB", "PostgreSQL", "Git", "VS Code"],
      color: "teal",
      icon: Database,
      description: "Database management and development tools"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "orange",
      icon: Globe,
      description: "Frontend web development technologies"
    },
    {
      title: "Design Tools",
      skills: ["Figma"],
      color: "purple",
      icon: Palette,
      description: "UI/UX design and prototyping"
    },
    {
      title: "CS Concepts",
      skills: ["Operating Systems", "DSA", "Computer Networks", "Project Management"],
      color: "pink",
      icon: Brain,
      description: "Fundamental computer science concepts"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem Solving", "Fast Learner"],
      color: "green",
      icon: Users,
      description: "Essential interpersonal and cognitive abilities"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100/50",
        text: "text-blue-700",
        border: "border-blue-200/50",
        accent: "from-blue-500 to-blue-600",
        skillBg: "bg-blue-100/70 text-blue-800 border-blue-200/60"
      },
      teal: {
        bg: "from-teal-50 to-teal-100/50",
        text: "text-teal-700",
        border: "border-teal-200/50",
        accent: "from-teal-500 to-teal-600",
        skillBg: "bg-teal-100/70 text-teal-800 border-teal-200/60"
      },
      orange: {
        bg: "from-orange-50 to-orange-100/50",
        text: "text-orange-700",
        border: "border-orange-200/50",
        accent: "from-orange-500 to-orange-600",
        skillBg: "bg-orange-100/70 text-orange-800 border-orange-200/60"
      },
      purple: {
        bg: "from-purple-50 to-purple-100/50",
        text: "text-purple-700",
        border: "border-purple-200/50",
        accent: "from-purple-500 to-purple-600",
        skillBg: "bg-purple-100/70 text-purple-800 border-purple-200/60"
      },
      pink: {
        bg: "from-pink-50 to-pink-100/50",
        text: "text-pink-700",
        border: "border-pink-200/50",
        accent: "from-pink-500 to-pink-600",
        skillBg: "bg-pink-100/70 text-pink-800 border-pink-200/60"
      },
      green: {
        bg: "from-green-50 to-green-100/50",
        text: "text-green-700",
        border: "border-green-200/50",
        accent: "from-green-500 to-green-600",
        skillBg: "bg-green-100/70 text-green-800 border-green-200/60"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colorScheme = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className={`group relative bg-gradient-to-br ${colorScheme.bg} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${colorScheme.border}`}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorScheme.accent} opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform`}></div>
                
                {/* Header with icon */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${colorScheme.accent} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${colorScheme.text} group-hover:scale-105 transition-transform origin-left`}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 ${colorScheme.skillBg}`}
                      style={{
                        animationDelay: `${skillIndex * 100}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              I believe in lifelong learning and constantly expanding my skill set. Each project I work on is an opportunity to grow, 
              learn new technologies, and refine my existing abilities. My goal is to become a well-rounded developer who can contribute 
              meaningfully to any team or project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
