import DashboardHeader from "@/components/workspace/components/dashboard-header/DashboardHeader";
import DashboardMain from "@/components/workspace/components/dashboard-main/DashboardMain";
import MainTopBar from "@/components/workspace/components/dashboard-main/MainTopBar";
import DashboardSidebar from "@/components/workspace/components/dashboard-sidebar/DashboardSidebar";
import { cn } from "@/lib/utils";
import { Be_Vietnam_Pro } from "next/font/google";

export const runtime = "edge";
const BeVietnamese = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["vietnamese"],
});
export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={BeVietnamese.className}>
      <DashboardHeader />
      <main className={cn("flex")}>
        <DashboardSidebar />
        <div className="flex-1 flex flex-col bg-[#2A2E34] relative">
          <MainTopBar />
          <DashboardMain>{children}</DashboardMain>
          <div className="bg-work-linear" />
        </div>
      </main>
    </div>
  );
}
