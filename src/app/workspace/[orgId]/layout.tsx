import DashboardHeader from "@/components/workspace/components/dashboard-header/DashboardHeader";
import DashboardMain from "@/components/workspace/components/dashboard-main/DashboardMain";
import MainTopBar from "@/components/workspace/components/dashboard-main/MainTopBar";
import DashboardSidebar from "@/components/workspace/components/dashboard-sidebar/DashboardSidebar";
import { cn } from "@/lib/utils";
import { Be_Vietnam_Pro } from "next/font/google";
import Link from "next/link";

export const BeVietnamese = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["vietnamese"],
});
export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = [
    {
      title: "Home",
    },
    {
      title: "Inbox",
    },
    {
      title: "Docs",
    },
    {
      title: "Dashboard",
    },
    {
      title: "Whiteboard",
    },
    {
      title: "Pulse",
    },
    {
      title: "Goal",
    },
  ];
  return (
    <div className={BeVietnamese.className}>
      {/* <DashboardHeader />
      <main className={cn("flex")}>
        <DashboardSidebar />
        <div className="flex-1 flex flex-col bg-[#2A2E34] relative">
          <MainTopBar />
          <DashboardMain>{children}</DashboardMain>
          <div className="bg-work-linear" />
        </div>
      </main> */}
      <DashboardHeader />
      <div>
        {data.map((item) => (
          <Link href={`/workspace/org_2a0Clf7H1fpJ61KA8k3l7tKYWcO/${item.title.toLowerCase()}`}>
            {item.title}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
