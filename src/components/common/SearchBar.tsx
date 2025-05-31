import { FiCamera, FiSearch } from "react-icons/fi";
import Button from "./ButtonCustom";


const SearchBar = () => (
  <div className="flex items-center space-x-4 w-1/2">
    <div
      className="flex items-center bg-white rounded-full flex-1 border-3 border-blue-500 p-[6px] pl-4 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <input
        type="text"
        placeholder="Tìm sản phẩm"
        className="flex-1 outline-none text-black font-bold"
      />
      <FiCamera className="text-gray-500 mr-2 cursor-pointer" size={20} />
      <Button
        variant="primary"
        size="medium"
        className="p-2 px-6 ml-2"
        style={{ borderRadius: "9999px" }}
      >
        <FiSearch className="text-white" size={20} />
      </Button>
    </div>
  </div>
);

export default SearchBar;