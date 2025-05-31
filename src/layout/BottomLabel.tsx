import { ArrowRight, Location } from "../assets/icons";

const BottomLabel = () => {
  return (
    <div className="h-16 bg-[#E6F1FF]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <img src={Location} alt="" className="w-5 h-5" />
            <span className="text-sm text-gray-700">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </span>
          </div>
          
          <button className="flex bg-white p-2 px-4 rounded-full items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
            <span>Xem ngay</span>
            <img src={ArrowRight} alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomLabel;
