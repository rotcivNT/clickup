"use client";
import { useUser } from "@clerk/nextjs";
import DashboardHeader from "./components/dashboard-header/DashboardHeader";
import { Be_Vietnam_Pro } from "next/font/google";

export const BeVietnamese = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["vietnamese"],
});
function Workspace() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className={BeVietnamese.className}>
      <DashboardHeader />
    </div>
  );
}

export default Workspace;
