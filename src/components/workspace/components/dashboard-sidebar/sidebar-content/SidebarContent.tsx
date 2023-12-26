import { Anvil, BookTextIcon, Gauge, HomeIcon, InboxIcon, PencilRuler, Radio } from "lucide-react";
import SidebarContentItem from "./SidebarContentItem";

const data = [
  {
    title: "Home",
    icon: <HomeIcon width={18} height={18} color="rgb(173,179,189)" />,
  },
  {
    title: "Inbox",
    icon: <InboxIcon width={18} height={18} color="rgb(173,179,189)" />,
  },
  {
    title: "Docs",
    icon: <BookTextIcon width={18} height={18} color="rgb(173,179,189)" />,
  },
  {
    title: "Dashboard",
    icon: <Gauge width={18} height={18} color="rgb(173,179,189)" />,
  },
  {
    title: "Whiteboard",
    icon: <PencilRuler width={18} height={18} color="rgb(173,179,189)" />,
  },
  {
    title: "Pulse",
    icon: <Radio width={18} height={18} color="rgb(173,179,189)" />,
  },
  {
    title: "Goal",
    icon: <Anvil width={18} height={18} color="rgb(173,179,189)" />,
  },
];
function SidebarContent() {
  return (
    <div>
      <ul className="py-2">
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
