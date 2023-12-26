import { useBearStore } from "@/app/store/store";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { HelpCircle, UserRoundPlus } from "lucide-react";

function SidebarFooter() {
  const { isOpenSidebar } = useBearStore();
  return (
    <div className="sticky bottom-0 left-0 w-full transition duration-300">
      <Separator className="bg-[#3C414A]" />
      <div className="flex justify-between items-center px-5 py-[10px] overflow-hidden">
        <div className={cn("flex items-center gap-[10px]", `${isOpenSidebar ? "w-0" : "w-auto"}`)}>
          <UserRoundPlus
            className={`${isOpenSidebar ? "w-0" : "w-auto"}`}
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
