import { AwardIcon, Phone, Download } from "../assets/icons";

const TopBanner = () => {
  return (
    <div
      className="flex items-center justify-between px-4 py-2"
      style={{
        background:
          "linear-gradient(270deg, #0D57C6 0%, #37CFFF 50.39%, #0F5ED6 100%)",
      }}
    >
      <div className="container flex justify-between mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center text-white">
          <img src={AwardIcon} alt="Award" className="mr-2" />
          <span>Nhập mã <span className="text-yellow-500 font-bold">NEWBIE</span> giảm ngay 10% cho lần đầu mua hàng.</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-white">
            <img src={Phone} alt="Phone" className="mr-2" />
           <span>Hotline: <span className="text-yellow-500 font-bold">0283 760 7607</span></span>
          </div>
          <div className="flex items-center text-white">
            <img src={Download} alt="Download" className="mr-2" />
            <span>Tải ứng dụng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
