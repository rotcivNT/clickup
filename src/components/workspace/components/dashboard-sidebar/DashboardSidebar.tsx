import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./sidebar-content/SidebarContent";
import SidebarFooter from "./sidebar-footer/SidebarFooter";
function DashboardSidebar() {
  return (
    <div className="w-[255px] bg-primary-dark z-10 relative">
      <Collapsible open className="w-full h-work-space-content">
        <CollapsibleContent>
          <SidebarHeader />
          <Separator className="bg-[#3C414A]" />
          <ScrollArea className="w-full">
            <SidebarContent />
          </ScrollArea>
          <SidebarFooter />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default DashboardSidebar;
