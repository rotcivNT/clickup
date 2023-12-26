import { useBearStore } from "@/app/store/store";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { HelpCircle, UserRoundPlus } from "lucide-react";

function SidebarFooter() {
  const { isOpenSidebar } = useBearStore();
  return (
    <div className="w-full transition duration-300">
      <Separator className="bg-[#3C414A]" />
      <div
        className={cn(
          "flex items-center px-5 py-[10px] overflow-hidden",
          `${isOpenSidebar ? "justify-between" : "justify-start"}`,
        )}
      >
        <div className={cn("flex items-center gap-[10px]", `${isOpenSidebar ? "w-auto" : "w-0"}`)}>
          <UserRoundPlus
            className={`${isOpenSidebar ? "w-auto" : "w-0"}`}
            width={18}
            height={18}
            color="rgb(173,179,189)"
          />
          <p className={cn("text-[#F0F1F3] font-[300] text-sm overflow-hidden")}>Invite</p>
        </div>
        <HelpCircle width={18} height={18} color="rgb(173,179,189)" />
      </div>
    </div>
  );
}

export default SidebarFooter;
