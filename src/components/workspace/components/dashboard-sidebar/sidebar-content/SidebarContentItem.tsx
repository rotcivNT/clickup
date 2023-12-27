import { useBearStore } from "@/app/store/store";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  icon: React.ReactNode;
  title: string;
}
function SidebarContentItem({ icon, title }: IProps) {
  const { orgId } = useAuth();
  const { isOpenSidebar } = useBearStore();
  const pathName = usePathname();
  const isActive = pathName.includes(title.toLocaleLowerCase());
  return (
    <Link
      className={cn(
        "text-[#F0F1F3] font-[300] flex items-center px-3 py-2 hover:bg-[rgba(255,255,255,0.1)] rounded-[6px]",
        `${isActive ? "bg-[#3B3A70] opacity-80 pointer-events-none" : ""}`,
        `${isOpenSidebar ? "gap-[10px] " : "gap-0"}`,
      )}
      href={`/workspace/${orgId}/${title.toLowerCase()}`}
    >
      <p className={`${isActive ? "[&_svg]:stroke-[#9992FF]" : ""}`}>{icon}</p>
      <p
        className={cn(
          "text-sm transition duration-300 overflow-hidden",
          `${isOpenSidebar ? "w-auto" : "w-0"}`,
          `${isActive ? "text-[#9992FF] font-medium" : ""}`,
        )}
      >
        {title}
      </p>
    </Link>
  );
}

export default SidebarContentItem;
