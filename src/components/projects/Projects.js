import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import chatImage from "../../assets/images/chat-app.png";
import bankImage from "../../assets/images/bank-app.png";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          desc="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard
          title="Chatting App"
          desc="A real-time chatting application built with React and Socket.io, featuring user authentication, private messaging, and a MongoDB backend for data storage."
          src={chatImage}
          codeLink="https://github.com/username/chatting-app"
        />
        <ProjectCard
          title="Bank Webpage"
          desc="A responsive banking webpage designed with React, featuring a clean and intuitive user interface. Future enhancements could include account management functionality."
          src={bankImage}
          codeLink="https://github.com/username/chatting-app"
        />
      </div>
    </section>
  );
};

export default Projects;
