"use client";
import { useBearStore } from "@/app/store/store";
import { Be_Vietnam_Pro } from "next/font/google";
import DashboardHeader from "./components/dashboard-header/DashboardHeader";
import DashboardMain from "./components/dashboard-main/DashboardMain";
import MainTopBar from "./components/dashboard-main/MainTopBar";
import DashboardSidebar from "./components/dashboard-sidebar/DashboardSidebar";
import "./styles.scss";
import { cn } from "@/lib/utils";

export const BeVietnamese = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["vietnamese"],
});
function Workspace() {
  const { isOpenSidebar } = useBearStore();
  return (
    <div className={BeVietnamese.className}>
      <DashboardHeader />
      <main className={cn("flex")}>
        <DashboardSidebar />
        <div className="flex-1 flex flex-col bg-[#2A2E34] relative">
          <MainTopBar />
          <DashboardMain />
          {/* Linear gradient bg */}
          <div className="bg-work-linear" />
        </div>
      </main>
    </div>
  );
}

export default Workspace;
