
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a Computer Science Engineering student at Acharya Institute of Technology. 
              I'm a creative thinker, fast learner, and someone who enjoys exploring new ideas and technologies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm excited to learn, grow, and take on new challenges in the ever-evolving world of technology.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Personal Traits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Creative
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Fast Learner
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Dedicated
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Curious
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Education</h3>
                <div className="text-gray-600">
                  <p className="font-medium">B.E. Computer Science Engineering</p>
                  <p className="text-sm">Acharya Institute of Technology</p>
                  <p className="text-sm text-blue-600">2023 – 2027</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full transform scale-105 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Neha Biswas"
                className="relative w-80 h-80 object-cover rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
