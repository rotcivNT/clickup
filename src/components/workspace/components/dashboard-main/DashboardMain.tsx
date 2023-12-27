import { ScrollArea } from "@/components/ui/scroll-area";

interface IProps {
  children?: React.ReactNode;
}

function DashboardMain({ children }: IProps) {
  return (
    <div className="h-[calc(100vh-var(--workspace-header)-var(--main-top-bar))]">
      <ScrollArea className="h-full">{children}</ScrollArea>
    </div>
  );
}

export default DashboardMain;
