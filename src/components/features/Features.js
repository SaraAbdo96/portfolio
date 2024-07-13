import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import {
  FaBars,
  FaPaintBrush,
  FaSearch,
  FaCode,
  FaMobileAlt,
  FaTachometerAlt,
} from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" desc="What I Do" />
      <div className="grid grid-cols-1 gap-6 xl:gap-20 md:grid-cols-2 xl:grid-cols-3">
        <Card
          title="Frontend Development"
          desc="Building responsive and dynamic web applications using modern frontend technologies such as React.js."
          icon={<FaCode />}
        />
        <Card
          title="UX Design"
          desc="Creating intuitive and user-friendly interfaces is my specialty, ensuring a seamless user experience."
          icon={<FaPaintBrush />}
        />
        <Card
          title="SEO Specialist"
          desc="Optimizing websites to rank higher on search engines and attract more organic traffic through proven SEO techniques."
          icon={<FaSearch />}
        />
        <Card
          title="Business Stratagy"
          desc="I develop effective business strategies that help organizations achieve their goals and maximize their potential."
          icon={<FaBars />}
        />
        <Card
          title="Responsive Design"
          desc="Designing and developing websites that are fully responsive and provide an optimal viewing experience across all devices."
          icon={<FaMobileAlt />}
        />
        <Card
          title="Performance Optimization"
          desc="Enhancing website performance by implementing best practices for faster load times and improved user experience."
          icon={<FaTachometerAlt />}
        />
      </div>
    </section>
  );
};

export default Features;
