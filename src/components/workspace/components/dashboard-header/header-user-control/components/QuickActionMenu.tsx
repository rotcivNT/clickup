import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BeVietnamese } from "@/components/workspace/Workspace";
import { cn } from "@/lib/utils";
import { GripIcon } from "lucide-react";

function QuickActionMenu() {
  return (
    <DropdownMenu>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <div className="size-8 cursor-pointer rounded-[6px] transition duration-150 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)]">
                <GripIcon width={18} height={18} color="#FFF" />
              </div>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Quick Action Menu</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent
        className={cn(
          "w-56 bg-[#30353C] text-sm text-[#D5D6D7] font-[300]",
          BeVietnamese.className,
        )}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>A</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default QuickActionMenu;
