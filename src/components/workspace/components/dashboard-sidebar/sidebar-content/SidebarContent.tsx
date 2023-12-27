import { Anvil, BookTextIcon, Gauge, HomeIcon, InboxIcon, PencilRuler, Radio } from "lucide-react";
import SidebarContentItem from "./SidebarContentItem";

function SidebarContent() {
  const iconCommonStyles = {
    width: 18,
    height: 18,
    color: "rgb(173,179,189)",
  };
  const data = [
    {
      title: "Home",
      icon: <HomeIcon {...iconCommonStyles} />,
    },
    {
      title: "Inbox",
      icon: <InboxIcon {...iconCommonStyles} />,
    },
    {
      title: "Docs",
      icon: <BookTextIcon {...iconCommonStyles} />,
    },
    {
      title: "Dashboard",
      icon: <Gauge {...iconCommonStyles} />,
    },
    {
      title: "Whiteboard",
      icon: <PencilRuler {...iconCommonStyles} />,
    },
    {
      title: "Pulse",
      icon: <Radio {...iconCommonStyles} />,
    },
    {
      title: "Goal",
      icon: <Anvil {...iconCommonStyles} />,
    },
  ];
  return (
    <div>
      <ul className="py-2 px-2 flex flex-col gap-1">
        {data.map((item, index) => (
          <li key={item.title}>
            <SidebarContentItem icon={item.icon} title={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarContent;
