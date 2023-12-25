"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileNavbarWrapper from "./mobile-navbar/MobileNavbarWrapper";
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-end">
      <div className="flex-1 hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-grey-0 font-bold text-[14px] pb-1 px-[10px]">
                Products
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-grey-0 font-bold text-[14px] pb-1 px-[10px]">
                Solutions
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-grey-0 font-bold text-[14px] pb-1 px-[10px]">
                Learn
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-grey-0 font-bold text-[14px] pb-1 px-[10px]",
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-grey-0 font-bold text-[14px] pb-1 px-[10px]",
                  )}
                >
                  Enterprise
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className={cn(
            "text-grey-0 font-bold text-[14px] pt-2 pb-1",
            "hidden lg:block mr-0 xl:mr-6",
          )}
        >
          Contact Sales
        </Link>
        <Button
          onClick={() => router.push("/sign-up")}
          className="text-[14px] transition-all duration-140 rounded-[10px] font-bold bg-[#7B68EE] text-white shadow-[0_4px_10px_rgba(123,104,238,0.4)]"
        >
          Sign Up
        </Button>
        <Button
          onClick={() => router.push("/sign-in")}
          className={cn(
            "text-[14px] transition-all duration-140 rounded-[10px] font-bold bg-grey-3 text-grey-0 shadow-[0_4px_10px_rgba(233,235,240,0.8)]",
            "hidden md:block",
          )}
        >
          Log in
        </Button>
      </div>
      <MobileNavbarWrapper />
    </div>
  );
}
