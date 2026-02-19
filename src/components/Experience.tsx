
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Iskraemeco India Private Limited",
      duration: "Oct 2025 – Nov 2025",
      location: "India",
      bullets: [
        "Worked with the software development team on a Workforce Management System used for managing field workforce involved in metering installation activities.",
        "Assisted in understanding system architecture, operational workflows, and data flow across workforce processes.",
        "Created and maintained database documentation, including table structures, relationships, and data descriptions.",
        "Prepared and updated technical and database documentation following internal enterprise standards.",
        "Gained exposure to real-world enterprise software systems supporting large-scale utility operations."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hands-on industry experience in software development and documentation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-teal-400 hidden sm:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-10">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 sm:items-end text-sm text-gray-500 flex-shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-blue-200 to-teal-200 mb-4"></div>

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
