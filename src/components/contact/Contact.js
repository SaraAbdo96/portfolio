import Title from "../layouts/Title";
import { useState } from "react";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [data, setData] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(data.email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log("DATA", data);
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log("sara");
    if (data.userName === "") {
      setErrMsg("Username is required!");
    } else if (data.phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (data.email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(data.email)) {
      setErrMsg("Give a valid Email!");
    } else if (data.subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (data.message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${data.userName}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setData({
        userName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <section id="contact" className="w-full py-20 border-b-[px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="Contact" desc="Contact with mew" />
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full h-auto">
          <ContactLeft />
          <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form
              className="flex flex-col w-full gap-6 py-4"
              onSubmit={handleSend}
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex w-full gap-10">
                <div className="flex flex-col w-1/2 gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    YOU NAME
                  </p>
                  <input
                    name="userName"
                    value={data.userName}
                    onChange={handleOnChange}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-1/2 gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Phone Number
                  </p>
                  <input
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handleOnChange}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">
                  email
                </p>
                <input
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">
                  Subject
                </p>
                <input
                  name="subject"
                  value={data.subject}
                  onChange={handleOnChange}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">
                  Message
                </p>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={handleOnChange}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols={30}
                  rows={8}
                />
              </div>
              <div className="w-full">
                <button className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
