"use client";
import { cn } from "@/lib/utils";
import { CheckCircle2, MoveRight } from "lucide-react";
import { WhiteBoardIcon } from "../icons";
import { ChatIcon, EngineerIcon, PMOIcon, ProductIcon } from "../icons/TeamTab";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const data = [
  {
    icon: <PMOIcon />,
    title: "PMO",
    description: "Deliver projects on time, every time",
    contents: [
      "Reduce delivery time with custom templates",
      "Track effort to impact with OKR planning",
      "Manage complex projects at scale",
    ],
  },
  {
    icon: <ChatIcon />,
    title: "Marketing",
    description: "The complete marketing solution",
    contents: [
      "Build visual plans that keep teams on track",
      "Fast track delivery with templates and calendars",
      "Leverage AI to accelerate content creation",
    ],
  },
  {
    icon: <ProductIcon />,
    title: "Product",
    description: "Plan, build, & ship, all in one place",
    contents: [
      "Get flexible agile workflows for fast moving teams",
      "Reduce development time with visual roadmaps",
      "Communicate product updates and priorities",
    ],
  },
  {
    icon: <EngineerIcon />,
    title: "Engineer",
    description: "More building, less busy work",
    contents: [
      "Get flexible agile workflows for fast moving teams",
      "Track dependencies and resources across squads",
      "Automate and integrate across your tech stack",
    ],
  },
  {
    icon: <WhiteBoardIcon />,
    title: "Agencies",
    description: "The complete agency solution",
    contents: [
      "Visualize projects, progress, and teamwork",
      "Speed up collaboration and feedback cycles",
      "Optimize resources and productivity",
    ],
  },
];

function HomeTeamTab() {
  return (
    <div className="pt-[150px] px-5">
      <h2
        className={cn(
          "bg-primary-linear bg-clip-text text-[transparent] font-[900] text-center mx-auto px-5",
          "max-w-[830px] px-5 mb-[18px] lg:max-w-[700px] text-[40px] lg:text-[60px] leading-[51px] lg:leading-[74px] lg:bg-[#040409]",
        )}
      >
        Perfect fit for every team
      </h2>
      <div className={cn("mb-6 mx-auto", "max-w-[820px] px-5")}>
        <p className="text-base leading-[26px] text-center text-[#24223e] font-medium">
          <strong className="block font-extrabold">
            Get started fast with out-of-the-box solutions.
          </strong>
          Easily customize ClickUp as team needs grow!
        </p>
      </div>
      {/* Mobile UI */}
      <div className="snap-x snap-mandatory flex gap-5 overflow-auto pl-5 lg:hidden">
        {data.map((item) => (
          <Card key={item.title} className="w-[280px] shrink-0 snap-start scroll-mx-5 rounded-xl">
            <CardHeader className="pb-3">
              <CardTitle className="leading-[30px] text-[23px] font-extrabold flex gap-3 mb-5">
                {item.icon}
                {item.title}
              </CardTitle>
              <CardDescription className="text-sm min-h-[40px] font-bold text-[#24223e] !m-0">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-5">
              <ul className="flex flex-col gap-2">
                {item.contents.map((content) => (
                  <li
                    key={content}
                    className="flex text-sm font-medium items-center gap-2 text-[#24223e]"
                  >
                    <CheckCircle2 className="shrink-0" />
                    {content}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="justify-center mt-9">
              <Button className="home-team-tab-btn gap-2 relative w-full h-[52px]">
                Use this Solution
                <MoveRight />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="hidden lg:block">
        <Tabs defaultValue={data[0].title} className="w-full">
          <TabsList className="flex gap-5 justify-center mb-7">
            {data.map((item) => (
              <TabsTrigger
                key={item.title}
                className={cn(
                  "flex flex-col justify-center text-[#514b81] gap-2 font-medium items-center w-[150px] h-[120px] border border-[#ececfc] rounded-[14px]",
                  "data-[state=active]:font-bold data-[state=active]:translate-y-[1px] data-[state=active]:border-[#cfcfeb] relative transition-all duration-150",
                )}
                value={item.title}
              >
                {item.icon}
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.map((item) => (
            <TabsContent key={item.title} value={item.title}>
              <Card className="w-full max-w-[830px] mx-auto shrink-0 snap-start scroll-mx-5 rounded-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="leading-[30px] text-[23px] font-extrabold flex gap-3 mb-5">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm min-h-[40px] font-bold text-[#24223e] !m-0">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-5">
                  <ul className="flex flex-col gap-2">
                    {item.contents.map((content) => (
                      <li
                        key={content}
                        className="flex text-sm font-medium items-center gap-2 text-[#24223e]"
                      >
                        <CheckCircle2 className="shrink-0" />
                        {content}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-center mt-9">
                  <Button className="home-team-tab-btn gap-2 relative w-full h-[52px]">
                    Use this Solution
                    <MoveRight />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default HomeTeamTab;
