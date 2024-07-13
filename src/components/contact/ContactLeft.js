import contactImg from "../../assets/images/contactImg.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sara Abdo</h3>
        <p className="text-lg font-normal text-gray-400 ">
          Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          A highly skilled frontend web developer with over three years of
          experience, specializing in React.js and Vue.js, Proficient in
          JavaScript, HTML, and CSS, with a proven ability to build dynamic and
          responsive web applications. Expert in optimizing frontend
          performance, troubleshooting complex issues, and ensuring a seamless
          user experience.
        </p>
        <p className="text-base text-gray-400 flex text-center gap-2">
          Phone: <span className="text-lightText">+963997155114</span>
        </p>
        <p className="text-base text-gray-400 flex text-center gap-2">
          Email:{" "}
          <span className="text-lightText">sara.nadim.abdo@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
