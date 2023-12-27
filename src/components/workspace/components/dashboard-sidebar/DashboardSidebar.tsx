"use client";
import { useBearStore } from "@/app/store/store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import SidebarContent from "./sidebar-content/SidebarContent";
import SidebarFooter from "./sidebar-footer/SidebarFooter";
import SidebarHeader from "./sidebar-header/SidebarHeader";
function DashboardSidebar() {
  const { isOpenSidebar } = useBearStore();

  return (
    <div className="z-10 relative h-work-space-content">
      <div
        className={cn(
          "bg-primary-dark flex flex-col justify-between h-full transition-all duration-300 overflow-hidden",
          `${isOpenSidebar ? "w-[var(--sidebar-large)]" : "w-[calc(var(--sidebar-small))]"}`,
        )}
      >
        <div className="h-full overflow-hidden">
          <SidebarHeader />
          <Separator className="bg-[#3C414A]" />
          <ScrollArea className="w-full h-full">
            <SidebarContent />
          </ScrollArea>
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
}

export default DashboardSidebar;
