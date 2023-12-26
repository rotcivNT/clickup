"use client";
import { useAuth } from "@clerk/nextjs";
import {
  Anvil,
  BookTextIcon,
  Gauge,
  HomeIcon,
  InboxIcon,
  PanelsTopLeft,
  Radio,
} from "lucide-react";
import { usePathname } from "next/navigation";
function MainTopBar() {
  const pathName = usePathname();

  const { orgId } = useAuth();
  const pageList = [
    {
      title: "Home",
      pathName: `/workspace/${orgId}/home`,
      icon: <HomeIcon color="rgb(173,179,189)" />,
    },
    {
      title: "Inbox",
      pathName: `/workspace/${orgId}/inbox`,
      icon: <InboxIcon color="rgb(173,179,189)" />,
    },
    {
      title: "Docs",
      pathName: `/workspace/${orgId}/docs`,
      icon: <BookTextIcon color="rgb(173,179,189)" />,
    },
    {
      title: "Dashboard",
      pathName: `/workspace/${orgId}/dashboard`,
      icon: <Gauge color="rgb(173,179,189)" />,
    },
    {
      title: "Whiteboard",
      pathName: `/workspace/${orgId}/whiteboard`,
      icon: <Gauge color="rgb(173,179,189)" />,
    },
    {
      title: "Pulse",
      pathName: `/workspace/${orgId}/pulse`,
      icon: <Radio color="rgb(173,179,189)" />,
    },
    {
      title: "Goal",
      pathName: `/workspace/${orgId}/goal`,
      icon: <Anvil color="rgb(173,179,189)" />,
    },
  ];
  const currentPage = pageList.find((page) => page.pathName === pathName);
  if (!currentPage) {
    return null;
  }
  return (
    <div className="flex">
      <PanelsTopLeft color="rgb(173,179,189)" />
      <div>
        {currentPage.icon}
        <p>{currentPage.title}</p>
      </div>
    </div>
  );
}

export default MainTopBar;
