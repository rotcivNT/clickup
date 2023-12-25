import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function UpgradeButton() {
  return (
    <Button
      className={cn(
        "h-7 py-0 px-3 gap-1 text-[rgba(255,255,255,0.8)]",
        "btn-upgrade relative text-sm",
      )}
      variant="destructive"
    >
      Upgrade
    </Button>
  );
}

export default UpgradeButton;
