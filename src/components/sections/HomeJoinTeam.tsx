import { cn } from "@/lib/utils";
import * as LogoList from "../icons/JoinTeamLogo";
import { Button } from "../ui/button";
function HomeJoinTeam() {
  return (
    <div className={cn("relative flex flex-col gap-6 bg-home-join-team", "mt-[40px] lg:mt-0")}>
      <div
        className={cn(
          "flex gap-8 pb-2 pl-5 items-center overflow-x-auto",
          "lg:order-2 xl:justify-center",
        )}
      >
        {Object.values(LogoList).map((logo) => (
          <div key={logo.name}>{logo()}</div>
        ))}
      </div>

      <div
        className={cn(
          "text-center flex flex-col gap-[10px] items-center justify-center",
          "lg:order-1 lg:flex-row",
        )}
      >
        <p className="text-[#24223e] text-center font-extrabold">
          Over 2+ million teams rely on ClickUp to collaborate and get work done.
        </p>
        <Button variant="secondary" className="text-[#24223e] font-extrabold">
          Join them
        </Button>
      </div>
    </div>
  );
}

export default HomeJoinTeam;
