import { LogoIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
function MobileMenu({ isOpen, setIsOpen }: IProps) {
  return (
    <div
      className={cn(
        "fixed w-full max-w-[375px] h-screen top-0 right-0 z-50 bg-white transition-all duration-500",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <ScrollArea className="w-full h-full px-6 pt-9 pb-6 ">
        <div className="flex items-center justify-between mb-6">
          <LogoIcon />
          <X onClick={() => setIsOpen(false)} />
        </div>
        <div>
          <ul>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-extrabold text-grey-0">
                    Products
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-extrabold text-grey-0">
                    Solutions
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-extrabold text-grey-0">
                    Learn
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Link className="py-4 block border-b text-lg font-extrabold text-grey-0" href="/">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="py-4 block border-b text-lg font-extrabold text-grey-0" href="/">
                Enterprise
              </Link>
            </li>
            <li>
              <Link className="py-4 block border-b text-lg font-extrabold text-grey-0" href="/">
                Contact Sales
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-4 pb-[2px]">
            <Button className="block w-full text-[14px] transition-all duration-140 rounded-[10px] font-extrabold">
              Sign Up
            </Button>
            <Button
              className="block w-full text-[14px] transition-all duration-140 rounded-[10px] font-extrabold bg-grey-3
         text-grey-0 shadow-[0_4px_10px_rgba(233,235,240,0.8)]"
            >
              Log in
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default MobileMenu;
