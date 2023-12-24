import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function HomeCallOut() {
  return (
    <div className="mt-[100px] flex items-center justify-center bg-home-callout-wrapper">
      <div className="relative bg-home-call-out">
        <div
          className={cn(
            "rounded-[50%] bg-[rgba(255,255,255,0.9)] py-[70px] px-5 flex flex-col justify-center items-center relative z-[2]",
            "size-[620px] lg:size-[890px]",
          )}
        >
          <h2
            className={cn(
              "bg-primary-linear bg-clip-text text-[transparent] font-[900] text-center mx-auto",
              "max-w-[400px] px-5 mb-[18px] sm:max-w-[600px] lg:max-w-[700px] text-[40px] lg:text-[60px] leading-[51px] lg:leading-[74px] lg:bg-[#040409]",
            )}
          >
            Bring teams and work together
          </h2>
          <div className={cn("mx-auto mb-6", "max-w-[300px] lg:max-w-[500px]")}>
            <p className="text-base leading-[26px] text-center text-[#24223e] font-medium">
              Eliminate app chaos. Consolidate tools and cut costs.
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              className={cn(
                "bg-primary-linear rounded-xl font-bold shadow-[0_4px_4px_0_rgba(87,75,172,.15)] pt-[18px] pb-4 px-4 text-base",
                "w-[195px] lg:w-[420px] h-[50px] lg:h-[66px] lg:text-[23px]",
              )}
            >
              Get started
            </Button>
          </div>
          <div
            className={cn(
              "text-[#7f76b3] font-medium text-center mt-3",
              "text-[10px] leading-[17px] md:text-[12px] md:leading-[20px] lg:text-[14px] lg:leading-[22px]",
            )}
          >
            <p>Free forever. No credit card required.</p>
            <p>Join 2+ million teams today!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCallOut;
