


const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
    {
      name: "WEB SCRAPING WITH PYTHON",
      image: "/src/assets/icons/python-svg.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24 pt-50" id="about" >
      <h2 className="h-[100px]"></h2>
      <h1 className="text-primary font-semibold text-3xl">About me:</h1>
      <p className="my-3 text-black md:w-2/3 leading-[2]">
      I completed my M.Sc in Zoology in 2010 from Govt Titumir College under National University.
 As a Full Stack Developer, I create responsive and user-friendly interfaces with HTML, CSS, and React, while building robust backend systems using Node.js, Express, and MongoDB. My expertise ensures seamless and efficient web application performance across the entire stack.

      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">5+</div>
        <p className="text-black text-2xl md:ml-5">
        I am a Full Stack Developer skilled in frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB) technologies. I aim to leverage my training to create impactful web applications with intuitive interfaces and robust functionalities.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-black font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      {/* <Services/> */}
    </div>
  );
};

export default About;