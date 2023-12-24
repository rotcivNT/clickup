"use client";
import { cn } from "@/lib/utils";
import { shimmer, toBase64 } from "@/utils/shimmer";
import Image from "next/image";
import {
  AIIcon,
  ChatIcon,
  DashboardIcon,
  DocsIcon,
  FormIcon,
  ProjectIcon,
  SprintIcon,
  TimeTrackingIcon,
  WhiteBoardIcon,
} from "../icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import "./styles.scss";

const tabs = [
  {
    title: "Projects",
    icon: <ProjectIcon />,
    img: "/static/images/projects.png",
    active: true,
  },
  {
    title: "Dashboards",
    icon: <DashboardIcon />,
    img: "/static/images/dashboards.png",
    active: true,
  },
  {
    title: "AI",
    icon: <AIIcon />,
    img: "/static/images/ai.png",
    active: false,
  },
  {
    title: "Forms",
    icon: <FormIcon />,
    img: "/static/images/forms.png",
    active: false,
  },
  {
    title: "Sprints",
    icon: <SprintIcon />,
    img: "/static/images/sprints.png",
    active: false,
  },
  {
    title: "Docs",
    icon: <DocsIcon />,
    img: "/static/images/docs.png",
    active: false,
  },
  {
    title: "Time tracking",
    icon: <TimeTrackingIcon />,
    img: "/static/images/timetracking.png",
    active: false,
  },
  { title: "Chat", icon: <ChatIcon />, img: "/static/images/chat.png", active: false },
  {
    title: "Whiteboard",
    icon: <WhiteBoardIcon />,
    img: "/static/images/whiteboard.png",
    active: true,
  },
];
function HomeTab() {
  return (
    <div className={cn("relative mx-5 pt-[70px] overflow-hidden")}>
      <Tabs defaultValue="Projects" className="w-full mx-auto flex justify-center flex-col">
        <TabsList
          className={cn(
            "relative transition duration-500 bg-[transparent] items-stretch h-auto pb-5 mx-auto overflow-scroll",
          )}
        >
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          {tabs.map((tab: any, index: number) => (
            <TabsTrigger
              key={tab.title}
              className={cn(
                "flex flex-col gap-5 w-[115px] shrink-0 leading-normal relative",
                "data-[state=active]:text-[#24223e] data-[state=active]:font-extrabold",
                "data-[state=active]:shadow-none [&_div]:data-[state=active]:bg-tab-nav-active [&_div]:data-[state=active]:scale-125 [&_div_path]:data-[state=active]:stroke-white",
                "md:text-sm data-[state=active]:text-sm md:data-[state=active]:text-base [&_div_svg]:data-[state=active]:scale-[0.7] md:[&_div_svg]:data-[state=active]:scale-[0.9]",
              )}
              value={tab.title}
            >
              <div
                className={cn(
                  "rounded-xl flex justify-center items-center [&_svg]:scale-[0.9]",
                  "size-[40px] md:size-[55px]",
                )}
              >
                {tab.icon}
              </div>
              <span className="mt-[10px] h-5">{tab.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {tabs.map((tab: any) => (
          <TabsContent key={tab.title} value={tab.title}>
            <Image
              alt={tab.title}
              src={tab.img}
              width={1870}
              height={1248}
              quality={100}
              sizes="100%"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1870, 1248))}`}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default HomeTab;
