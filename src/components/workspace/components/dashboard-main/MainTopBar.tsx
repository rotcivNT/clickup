"use client";
import { useAuth } from "@clerk/nextjs";
import { Anvil, BookTextIcon, Gauge, HomeIcon, InboxIcon, Radio } from "lucide-react";
import { usePathname } from "next/navigation";
import ButtonCollapse from "./ButtonCollapse";
const commonIconStyle = {
  strokeWidth: 1.5,
  color: "rgb(173, 179, 189)",
  width: 18,
  height: 18,
};
function MainTopBar() {
  const pathName = usePathname();
  const { orgId } = useAuth();
  const pageList = [
    {
      title: "Home",
      pathName: `/workspace/${orgId}/home`,
      icon: <HomeIcon {...commonIconStyle} />,
    },
    {
      title: "Inbox",
      pathName: `/workspace/${orgId}/inbox`,
      icon: <InboxIcon {...commonIconStyle} />,
    },
    {
      title: "Docs",
      pathName: `/workspace/${orgId}/docs`,
      icon: <BookTextIcon {...commonIconStyle} />,
    },
    {
      title: "Dashboard",
      pathName: `/workspace/${orgId}/dashboard`,
      icon: <Gauge {...commonIconStyle} />,
    },
    {
      title: "Whiteboard",
      pathName: `/workspace/${orgId}/whiteboard`,
      icon: <Gauge {...commonIconStyle} />,
    },
    {
      title: "Pulse",
      pathName: `/workspace/${orgId}/pulse`,
      icon: <Radio {...commonIconStyle} />,
    },
    {
      title: "Goal",
      pathName: `/workspace/${orgId}/goal`,
      icon: <Anvil {...commonIconStyle} />,
    },
  ];
  const currentPage = pageList.find((page) => page.pathName === pathName);
  if (!currentPage) {
    return null;
  }
  return (
    <div className="flex p-2 pl-4 gap-4 items-center bg-[#2A2E34] border-b border-[rgb(60,65,74)] z-10 sticky top-0 h-[var(--main-top-bar)]">
      <ButtonCollapse />
      <div className="flex gap-2 items-center">
        {currentPage.icon}
        <p className="text-sm text-drop-down font-[300]">{currentPage.title}</p>
      </div>
    </div>
  );
}

export default MainTopBar;
