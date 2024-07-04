import facebook from '../../assets/socials/facebook.png';
import instagram from '../../assets/socials/instagram.png';
import dribbble from '../../assets/socials/dribbble.png';
import email from '../../assets/socials/sms.png';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-3 text-black md:w-3/4 leading-[2]">
      Satisfied with me? Please contact me
      </p>
      {/* social icons */}
      <div className="flex ">
        <a href="https://www.facebook.com/didarul1981" target="_blank" rel="noreferrer">
          <img src={facebook} alt="" />
        </a>
        <a className="ml-4" href="https://www.linkedin.com/in/didartech/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="" />
        </a>
        <a className="ml-4" href="https://github.com/didarulZend1981" target="_blank" rel="noreferrer">
        <img src={dribbble} alt="" />
        </a>
        <a className="ml-4" href="mailto:didarul1981@live.com" target="_blank" rel="noreferrer">
        <img src={email} alt="" />
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-black text-2xl mb-6">Contact me, let's make magic together</p>
            <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;