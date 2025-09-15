import HomeContent from "../organism/HomeContent";
import TextContent from "../organism/TextContent";
import Navbar from "../templates/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <HomeContent />
        <TextContent />
      </div>
    </>
  );
};

export default Home;
