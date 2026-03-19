
import { Award, BookOpen } from 'lucide-react';

const Certifications = () => {
  // Most recent certifications first
  const technicalCerts = [
    {
      title: "Advanced RAG Applications with Vector Databases",
      provider: "LinkedIn Learning",
    },
    {
      title: "Machine Learning Crash Course",
      provider: "Google",
      status: "Ongoing",
    },
    {
      title: "Introduction to Git and GitHub",
      provider: "Coursera",
    },
    {
      title: "IT Fundamentals for Everyone",
      provider: "Coursera",
    },
    {
      title: "Introduction to C Programming Language",
      provider: "Infosys Springboard",
    },
  ];

  const nonTechnicalCerts = [
    {
      title: "Microsoft Word, Excel, PowerPoint & Microsoft 365 Fundamentals",
      provider: "Coursera",
    },
    {
      title: "English for Career Development",
      provider: "Coursera",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Continuous learning through industry-recognized courses and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Certifications */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Technical Certifications</h3>
            </div>
            <ul className="space-y-4">
              {technicalCerts.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 mt-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                      {cert.title}
                      {cert.status && (
                        <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                          {cert.status}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500">{cert.provider}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Technical Certifications */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Non-Technical Certifications</h3>
            </div>
            <ul className="space-y-4">
              {nonTechnicalCerts.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 mt-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800 font-medium group-hover:text-teal-600 transition-colors">{cert.title}</p>
                    <p className="text-sm text-gray-500">{cert.provider}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
