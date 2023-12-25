import { AIIcon } from "@/components/icons";
import { StarGradientIcon } from "@/components/icons/Workspace";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Be_Vietnam_Pro } from "next/font/google";
import "../styles.scss";

export default function HeaderSearch() {
  return (
    <div className="flex items-center gap-1 h-7">
      <Command
        className={cn(
          "rounded-[6px] [&>div]:border-none [&>div]:h-full shadow-md h-7 bg-[rgba(255,255,255,0.1)]",
          "[&>div_svg]:stroke-white",
        )}
      >
        <CommandInput
          className={cn(
            "h-full inline-block p-0 font-[300] border-none bg-[inherit] placeholder:text-sm text-sm text-[rgba(255,255,255,0.8)] placeholder:font-[300] placeholder:text-[rgba(255,255,255,0.8)]",
            "",
          )}
          placeholder="Type a command or search..."
        />
      </Command>
      <div className="h-full flex items-center">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "h-full py-0 px-2 bg-[rgb(67,65,141)] hover:bg-[rgb(67,65,141)] gap-1 text-[rgba(255,255,255,0.8)]",
                  "btn-ai relative",
                )}
                variant="destructive"
              >
                <StarGradientIcon />
                AI
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Use TBoost AI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
