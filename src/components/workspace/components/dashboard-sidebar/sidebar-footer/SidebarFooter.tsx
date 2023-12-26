import { Separator } from "@/components/ui/separator";
import { HelpCircle, UserRoundPlus } from "lucide-react";

function SidebarFooter() {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <Separator className="bg-[#3C414A]" />
      <div className="flex justify-between items-center px-5 py-[10px]">
        <div className="flex items-center gap-[10px]">
          <UserRoundPlus width={18} height={18} color="rgb(173,179,189)" />
          <p className="text-[#F0F1F3] font-[300] text-sm">Invite</p>
        </div>
        <HelpCircle width={18} height={18} color="rgb(173,179,189)" />
      </div>
    </div>
  );
}

export default SidebarFooter;
