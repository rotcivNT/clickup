import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

interface IProps {
  icon: React.ReactNode;
  title: string;
}
function SidebarContentItem({ icon, title }: IProps) {
  const { orgId } = useAuth();

  return (
    <Link
      className="text-[#F0F1F3] font-[300] flex items-center px-5 py-2 gap-[10px]"
      href={`/workspace/${orgId}/${title.toLowerCase()}`}
    >
      {icon}
      <p className="text-sm">{title}</p>
    </Link>
  );
}

export default SidebarContentItem;
