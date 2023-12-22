import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { MoveRight, Star } from "lucide-react";
import { ReviewLogoIcon } from "../icons";

function HomeHero() {
  return (
    <div className="mx-5">
      <div className="flex justify-center">
        <h1
          className={cn(
            "bg-primary-linear bg-clip-text text-[transparent] font-[900] text-center",
            "max-w-[350px] mb-[18px] sm:max-w-[600px] lg:max-w-[700px] text-[40px] lg:text-[70px] leading-[51px] lg:leading-[86px] lg:bg-[#040409]",
          )}
        >
          One app to replace them all
        </h1>
      </div>
      <div
        className={cn(
          "text-center mx-auto",
          "max-w-[390px] lg:max-w-[500px] text-[20px] lg:text-[23px] lg:leading-[34px] leading-6 ",
        )}
      >
        <strong>Get everyone working in a single platform </strong>
        <span>designed to manage any type of work.</span>
      </div>
      <div className="flex justify-center mt-[26px]">
        <Button
          className={cn(
            "bg-primary-linear rounded-xl font-bold shadow-[0_4px_4px_0_rgba(87,75,172,.15)] pt-[18px] pb-4 px-4 text-base",
            "w-[262px] lg:w-[420px] h-[50px] lg:h-[66px] lg:text-[23px]",
          )}
        >
          Get started. It's free
          <MoveRight className="ml-2" />
        </Button>
      </div>
      {/* Review */}
      <div
        className={cn(
          "flex gap-[10px] items-center",
          "mt-11 xl:mt-3 flex-col xl:flex-row xl:justify-center",
        )}
      >
        <div className="flex items-center justify-center gap-1">
          <Star fill="#FFB800" stroke="#FFB800" width={16} height={16} />
          <Star fill="#FFB800" stroke="#FFB800" width={16} height={16} />
          <Star fill="#FFB800" stroke="#FFB800" width={16} height={16} />
          <Star fill="#FFB800" stroke="#FFB800" width={16} height={16} />
          <Star fill="#FFB800" stroke="#FFB800" width={16} height={16} />
        </div>
        <span className="text-[#7f76b3] font-medium text-sm flex justify-center">
          based on 10,000+ reviews from
        </span>
        <div className="flex justify-center">
          <ReviewLogoIcon />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
