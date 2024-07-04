import facebook from "../../../assets/socials/facebook.png";
import instagram from "../../../assets/socials/instagram.png";
import dribbble from "../../../assets/socials/dribbble.png";
import email from "../../../assets/socials/sms.png";


const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24 border-top border-3">
      <div className="text-black opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2022 | Willie Garrett</p>
        <p>Fullstack Developer</p>
        <p>UI Designer</p>
      
        <p>
          
        <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.linkedin.com/in/joshua-harris-321a24190/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://github.com/joshua-harris"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div></p>
      </div>
      {/* social media */}
      
    </div>
  );
};

export default Footer;