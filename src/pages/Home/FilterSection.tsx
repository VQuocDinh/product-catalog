import { type FC, memo } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FilterSection: FC<FilterSectionProps> = memo(
  ({ title, isOpen, onToggle, children }) => (
    <div>
      <hr className="my-4 border-gray-200" />
      <div
        className="flex items-center justify-between mb-4 cursor-pointer"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <h3 className="text-sm font-medium">{title}</h3>
        <div>{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}</div>
      </div>
      {isOpen && children}
    </div>
  )
);

FilterSection.displayName = "FilterSection";

export default FilterSection;
