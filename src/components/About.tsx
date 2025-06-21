
const About = () => {
  const handleImageLoad = () => {
    console.log('About image loaded successfully');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('About image failed to load:', e);
    console.error('Image src:', e.currentTarget.src);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a Computer Science Engineering student at <span className="font-semibold text-blue-600">Acharya Institute of Technology, Bangalore</span>. 
                I'm a creative thinker, fast learner, and someone who enjoys exploring new ideas and technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm excited to learn, grow, and take on new challenges in the ever-evolving world of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Personal Traits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
                    Creative
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mr-3"></div>
                    Fast Learner
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                    Dedicated
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                    Curious
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 border border-teal-200/50">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                  Education
                </h3>
                <div className="text-gray-700">
                  <p className="font-medium text-gray-800">B.E. Computer Science Engineering</p>
                  <p className="text-sm text-gray-600 mt-1">Acharya Institute of Technology, Bangalore</p>
                  <div className="inline-flex items-center mt-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm rounded-full">
                    2023 – 2027
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-teal-400/30 rounded-full transform scale-110 opacity-60 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full transform scale-125 opacity-40 animate-pulse delay-1000"></div>
              
              {/* Main circular image container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-2 border-white/70">
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src="/lovable-uploads/ff18a98b-99b0-40e1-ac54-f774b12b0b3b.png"
                    alt="Neha Biswas"
                    className="w-80 h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-500"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1500"></div>
                <div className="absolute top-1/2 right-2 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
