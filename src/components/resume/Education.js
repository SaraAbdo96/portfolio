import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Informatics Engineering"
            subTitle="University of Tishreen (2015 - 2020)"
            result="80%"
            desc={
              <>
                Studied various subjects including programming, data structures,
                <br />
                algorithms, database management, computer networks,
                <br />
                and software engineering.
              </>
            }
          />
          <ResumeCard
            title="Master in Web Science"
            subTitle="University of Syrian Virtual  (2022 - 2024)"
            // result=""
            desc={
              <>
                <p>
                  Focused on advanced web technologies, web development
                  frameworks,
                </p>
                <p>
                  data analytics, and research in web science. Engaged in
                  projects involving
                </p>
                <p>
                  full-stack development, web security, and user experience
                  design.
                </p>
              </>
            }
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - Present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Web Developer"
            subTitle="Update Company - (2021 - 2023)"
            // result="3/4"
            desc="The training provided by universities in order to prepare people to work in various"
          />
          <ResumeCard
            title="Freelance Front-end Web Developer"
            subTitle="Remote - (2024 - Present)"
            // result="3/4"
            desc="The training provided by universities in order to prepare people to work in various"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
