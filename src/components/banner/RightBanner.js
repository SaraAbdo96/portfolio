import myImage from "../../assets/images/my-image.png";

const RightBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-full lgl:w-1/2">
      <img
        src={myImage}
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
      />
      <div className="absolute bottom-0 lgl:w-[500px] lgl:h-[500px] w-[350px] h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
