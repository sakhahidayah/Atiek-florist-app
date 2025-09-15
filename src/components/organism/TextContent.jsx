import TitleContent from "../molecules/TitleContent";
import MenuContent from "../molecules/MenuContent";
const TextContent = () => {
  return (
    <div className="mt-10 flex flex-col gap-5 justify-center   items-center px-4">
      <TitleContent />
      <div className="grid grid-cols-2 md:grid-cols-4 mb-5 mt-5 gap-10">
        <MenuContent />
      </div>
    </div>
  );
};

export default TextContent;
