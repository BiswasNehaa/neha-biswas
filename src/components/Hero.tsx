
import { ArrowDown, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-3xl transform rotate-45 opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-full opacity-60 animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-2xl transform rotate-12 opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-teal-200/50 to-green-200/50 rounded-full opacity-60 animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-300/20 to-teal-300/20 rounded-lg transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            {/* Main heading with enhanced typography */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-full shadow-sm">
                <span className="text-blue-600 text-sm font-medium">👋 Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Hi, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient-x">
                  Neha
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                A creative and fast-learning <span className="font-semibold text-gray-800">Computer Science student</span> who loves exploring the world of technology.
              </p>
            </div>
            
            {/* Enhanced tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-5 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 shadow-sm">
                🚀 Open to learning
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 rounded-full text-sm font-medium border border-teal-200/50 shadow-sm">
                🎓 B.E. CSE 2023–2027
              </span>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Let's Connect
                </span>
              </button>
            </div>

            {/* Stats or additional info */}
            <div className="pt-8 border-t border-gray-200/50">
              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">2024</div>
                  <div>Current Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">CSE</div>
                  <div>Major</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">∞</div>
                  <div>Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Background blur effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
              
              {/* Main image container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 border border-white/50">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Neha Biswas"
                    className="w-80 h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-1000 shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
