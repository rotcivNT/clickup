import { Separator } from "@/components/ui/separator";
import CreateItemButton from "./components/CreateItemButton";
import QuickActionMenu from "./components/QuickActionMenu";
import UpgradeButton from "./components/UpgradeButton";
import UserControl from "./components/UserControl";

function UserControlWrapper() {
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-2">
        <UpgradeButton />
        <CreateItemButton />
      </div>
      <Separator orientation="vertical" className="h-4 translate-y-[50%] opacity-20" />
      <div className="flex items-center gap-2">
        <QuickActionMenu />
        <UserControl />
      </div>
    </div>
  );
}

export default UserControlWrapper;
