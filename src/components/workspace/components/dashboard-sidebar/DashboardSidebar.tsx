import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SidebarHeader from "./sidebar-header/SidebarHeader";
import SidebarContent from "./sidebar-content/SidebarContent";
import SidebarFooter from "./sidebar-footer/SidebarFooter";
import { useBearStore } from "@/app/store/store";
import { cn } from "@/lib/utils";
function DashboardSidebar() {
  const { isOpenSidebar } = useBearStore();
  return (
    <div className="z-10 relative">
      <div
        className={cn(
          "w-[255px] bg-primary-dark flex flex-col justify-between h-work-space-content transition-all duration-300 overflow-hidden",
          `${isOpenSidebar ? "w-[60px]" : ""}`,
        )}
      >
        <SidebarHeader />

        <div className="flex-1">
          <Separator className="bg-[#3C414A]" />
          <ScrollArea className="w-full">
            <SidebarContent />
          </ScrollArea>
        </div>

        <SidebarFooter />
      </div>
    </div>
  );
}

export default DashboardSidebar;
