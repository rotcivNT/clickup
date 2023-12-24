"use client";
import { AlignRightIcon } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function MobileNavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] z-30 transition-all duration-500",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      />
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div onClick={() => setIsOpen(true)} className="py-2 pl-6">
        <AlignRightIcon />
      </div>
      {/* Sub menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
