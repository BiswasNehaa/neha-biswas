

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
      </div>
    </section>
  );
};

export default About;
