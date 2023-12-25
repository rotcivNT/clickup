import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { PlusCircleIcon } from "lucide-react";

function CreateItemButton() {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(
              "h-8 py-0 px-[10px] gap-1 text-white bg-[transparent] hover:bg-[rgba(255,255,255,0.1)]",
              "relative text-sm",
            )}
            variant="destructive"
          >
            <PlusCircleIcon width={16} height={16} />
            New
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Create items</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CreateItemButton;
