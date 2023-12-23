import * as LogoList from "../icons/JoinTeamLogo";
import { Button } from "../ui/button";
function HomeJoinTeam() {
  return (
    <div>
      <div className="flex gap-8 pl-5 items-center overflow-x-auto">
        {Object.values(LogoList).map((logo) => (
          <div key={logo.name}>{logo()}</div>
        ))}
      </div>

      <div className="mt-[34px]">
        <p className="text-[#24223e] text-center font-extrabold">
          Over 2+ million teams rely on ClickUp to collaborate and get work done.
        </p>
        <Button variant="secondary">Join them</Button>
      </div>
    </div>
  );
}

export default HomeJoinTeam;
