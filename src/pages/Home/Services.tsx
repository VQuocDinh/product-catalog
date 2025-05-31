import { type FC, memo } from "react";
import { Block, FreeShip, Headphone, TruckBlue } from "../../assets/icons";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const servicesList: ServiceItem[] = [
  {
    id: 1,
    icon: FreeShip,
    title: "Miễn phí vận chuyển",
    description: "Với hóa đơn từ 1 triệu",
  },
  {
    id: 2,
    icon: Headphone,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
  },
  {
    id: 3,
    icon: TruckBlue,
    title: "Giao hàng nhanh 2h",
    description: "Trong vùng bán kính 10km nội thành TP.HCM",
  },
  {
    id: 4,
    icon: Block,
    title: "30 ngày đổi trả",
    description: "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
  },
] as const;

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: FC<ServiceCardProps> = memo(({ service }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div
      className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mr-4"
      aria-hidden="true"
    >
      <img src={service.icon} alt="" className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-900">{service.title}</h3>
      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
        {service.description}
      </p>
    </div>
  </div>
));

ServiceCard.displayName = "ServiceCard";

const Services: FC = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-8 cursor-pointer"
      aria-label="Dịch vụ"
    >
      {servicesList.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
};

export default memo(Services);
