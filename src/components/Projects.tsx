
import { ExternalLink, Github } from 'lucide-react';
import justpostV2Cover from '@/assets/justpost-v2-cover.png';

const Projects = () => {
  // Most recent projects first
  const projects = [
    {
      title: "Feedback Lens Aura: Advanced Customer Intelligence System",
      description: "A high-precision NLP framework that transforms raw customer feedback into strategic business intelligence through differential analysis and trend tracking.",
      technologies: ["VADER NLP", "Python (FastAPI)", "React.js (Vite)", "Tailwind CSS", "Pandas"],
      features: [
        "Differential Sentiment Analysis: Cross-compares sentiment scores to identify competitive gaps",
        "Temporal Concept Drift Detection: Flags emerging product issues or market trends",
        "Severity Impact Scoring: Weighted calculation prioritizing critical 'Red Zone' feedback",
        "Automated Suggestion Engine: Real-time business recommendations",
        "Visualization Dashboard: Real-time KPI tracking and sentiment pulse graphs"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/BiswasNehaa/Major-Project",
      liveUrl: "",
      category: "AI / NLP",
      ongoing: true
    },
    {
      title: "TrustChain: Decentralized Charity Escrow System",
      description: "A blockchain-based platform designed to restore donor confidence. Ensures funds stay locked in a smart contract until a designated Verifier confirms the charity's request, making 'stolen funds' mathematically impossible.",
      technologies: ["Solidity", "React.js", "Ethers.js", "MetaMask", "Smart Contracts"],
      features: [
        "Role-Based Access Control: Auto-detects Donor, Charity, or Verifier roles",
        "Three-Step Escrow: Donor → Contract → Charity with Verifier approval",
        "Live Vault Tracking: Real-time contract balance from the blockchain",
        "Immutable Audit Trail: On-chain record of every request and approval"
      ],
      image: "/images/trustchain-preview.png",
      githubUrl: "https://github.com/BiswasNehaa/Donation-Fund-Management--Blockchain",
      liveUrl: "https://donation-fund-management-blockchain.vercel.app/",
      category: "Blockchain"
    },
    {
      title: "JustPost V2.0: Zero-Trace File Transfer",
      description: "An advanced privacy-focused file transfer platform for journalists and activists. Combines an off-chain privacy relay with an on-chain notary, allowing users to prove file integrity without exposing identity or content.",
      technologies: ["React / Vite", "Node.js / Express", "Solidity / Sepolia", "WebRTC", "Vercel & Render"],
      features: [
        "Metadata Shielding: IP-stripping relay for total anonymity",
        "On-Chain Notarization: File hashes anchored to Ethereum Sepolia Testnet",
        "Ephemeral Data-Plane: Files exist only in transit, zero server storage",
        "Decentralized Coordination: Blockchain-based room lifecycle management"
      ],
      image: justpostV2Cover,
      githubUrl: "https://github.com/BiswasNehaa/Sonic-Share",
      liveUrl: "https://just-post-block-chain.vercel.app/",
      category: "Privacy & Security"
    },
    {
      title: "JustPost: A P2P File Sharing System",
      description: "A decentralized, serverless file-sharing system that uses sound frequencies to pair devices for purely anonymous data transfer.",
      technologies: ["WebRTC / PeerJS", "Web Audio API", "JavaScript (ES6)"],
      features: [
        "Acoustic Handshaking: Zero-contact pairing using sound waves",
        "Serverless Architecture: Direct device-to-device transfer",
        "Privacy-First Design: Fully anonymous with no accounts or logging",
        "Future-Ready: Blockchain-based IP hashing for ultimate anonymity"
      ],
      image: "/images/justpost-preview.png",
      githubUrl: "https://github.com/BiswasNehaa/Sonic-Share",
      liveUrl: "https://kaleidoscopic-pegasus-2a8242.netlify.app/",
      category: "Peer-to-Peer Systems"
    },
    {
      title: "Leftover Food Donation System",
      description: "A socially impactful system that connects donors and NGOs to manage leftover food effectively.",
      technologies: ["Python", "Tkinter", "SQL", "DBMS"],
      features: [
        "Pickup request tracking",
        "Feedback system",
        "Delivery status management"
      ],
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      githubUrl: "https://github.com/BiswasNehaa/DBMS-Proj",
      category: "Database Management"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Showcasing my passion for creating meaningful solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium border border-white/50">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons - Show on Hover */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 hover:from-blue-100 hover:to-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced Placeholder for future projects */}
          <div className="group bg-gradient-to-br from-slate-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-300/60 flex flex-col items-center justify-center text-center min-h-[500px] hover:border-blue-400/60 hover:bg-gradient-to-br hover:from-blue-50/80 hover:to-purple-50/80 transition-all duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">+</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              I'm constantly working on new projects. Stay tuned for more exciting developments!
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
