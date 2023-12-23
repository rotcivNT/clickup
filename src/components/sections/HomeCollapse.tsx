import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import "./styles.scss";
import { Badge } from "../ui/badge";
import Image from "next/image";

const data = [
  {
    title: "Improve collaboration",
    contentBold: "Get your teams working together more closely, even if they’re far apart.",
    contentNormal:
      " Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.",
    badge: ["Comments", "Docs", "Whiteboards", "Clips"],
  },
  {
    title: "Enhance visibility",
    contentBold: "Ditch the needless meetings and repetitive updates.",
    contentNormal:
      "With a single source of truth for all ongoing projects across your entire org, you get a crystal-clear view of what's happening (or not), and who's responsible.",
    badge: ["Views", "Dashboards", "Reports", "Goals"],
  },
  {
    title: "Automate work",
    contentBold: "Streamline business processes without breaking a sweat.",
    contentNormal:
      " Whether it's onboarding employees, handling IT requests, or managing expense reimbursements, you can automate it all with powerful no-code Automations.",
    badge: ["Automations", "Forms", "Task Templates", "Custom Fields"],
  },
];

function HomeCollapse() {
  return (
    <div className="py-[70px]">
      <h2
        className={cn(
          "bg-primary-linear bg-clip-text text-[transparent] font-[900] text-center mx-auto",
          "max-w-[400px] px-5 mb-[18px] sm:max-w-[600px] lg:max-w-[700px] text-[40px] lg:text-[70px] leading-[51px] lg:leading-[86px] lg:bg-[#040409]",
        )}
      >
        Save time and get more done
      </h2>
      <div className={cn("mx-auto mb-[30px]", "max-w-[390px] lg:max-w-[500px]")}>
        <p className="text-base leading-[26px] text-center text-[#24223e] font-medium">
          Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
        </p>
      </div>
      {/* Mobile Collapse */}
      <div className={cn("flex overflow-scroll snap-x snap-mandatory pl-5 gap-5", "lg:hidden")}>
        {data.map((item) => (
          <Card className="w-[280px] shrink-0 snap-start scroll-mx-5 bg-home-collapse rounded-xl">
            <CardHeader className="pb-3">
              <CardTitle className="leading-[30px] font-extrabold text-white">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">
                <b>{item.contentBold}</b> {item.contentNormal}
              </p>
            </CardContent>
            <CardFooter className="flex-wrap gap-2">
              {item.badge.map((badge) => (
                <Badge variant="secondary">{badge}</Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Desktop + Table Collapse */}
      <div className={cn("hidden lg:flex gap-[100px] mt-[60px] max-w-full")}>
        <Card className="w-[280px] rounded-xl flex-1 border-none">
          <CardHeader className="pb-3">
            <CardTitle className="bg-primary-linear bg-clip-text text-[transparent] font-[900] text-[40px] leading-[50px]">
              {data[0].title}
            </CardTitle>
          </CardHeader>
          <CardContent className={cn("pb-4")}>
            <p className="text-[#24223e]">
              <b>{data[0].contentBold}</b> {data[0].contentNormal}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-[30px]">
            <div className="flex flex-wrap gap-2">
              {data[0].badge.map((badge) => (
                <Badge key={badge} variant="secondary" className="px-3 py-2 text-base font-medium">
                  {badge}
                </Badge>
              ))}
            </div>
            <h3 className="text-[rgba(127,118,179,0.6)] font-extrabold text-[40px] leading-[50px] cursor-pointer">
              Enhance visibility
            </h3>
            <h3 className="text-[rgba(127,118,179,0.6)] font-extrabold text-[40px] leading-[50px] cursor-pointer">
              Automate work
            </h3>
          </CardFooter>
        </Card>
        <div className="flex-1 relative">
          <div className="bg-home-collapse--desktop w-[840px] h-[562px] absolute -top-2 left-9 rounded-[14px] will-change-transform" />
          <div className="absolute w-[862px] left-[60px] top-[10px]">
            <Image
              src="/static/images/home-collapse-1.png"
              alt="home-collapse"
              width={1607}
              height={1071}
              quality={100}
              sizes="100%"
            />
          </div>
          <div className="absolute top-[66px] -left-[94px]">
            <Image
              src="/static/images/home-collapse-2.png"
              alt="home-collapse"
              width={352}
              height={379}
              quality={100}
              sizes="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCollapse;
