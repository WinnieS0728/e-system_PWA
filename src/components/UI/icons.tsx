import {
  FaCircleCheck,
  FaCircleQuestion,
  FaCircleXmark,
  FaArrowRightLong,
  FaCircleArrowDown,
} from "react-icons/fa6";

interface iconProps {
  className?: string;
}

function Check({ className }: iconProps) {
  return <FaCircleCheck className={className} />;
}
function Unknown({ className }: iconProps) {
  return <FaCircleQuestion className={className} />;
}
function NoSupport({ className }: iconProps) {
  return <FaCircleXmark className={className} />;
}
function Next({ className }: iconProps) {
  return <FaArrowRightLong className={className} />;
}
function Extend({ className }: iconProps) {
  return <FaCircleArrowDown className={className} />;
}

export const Icons = {
  yes: Check,
  unknown: Unknown,
  no: NoSupport,
  next: Next,
  extend_arrow: Extend,
};
