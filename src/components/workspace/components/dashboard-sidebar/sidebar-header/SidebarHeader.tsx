"use client";

import { useBearStore } from "@/app/store/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function SidebarHeader() {
  const { user } = useUser();
  const { isOpenSidebar } = useBearStore();
  if (!user) {
    return null;
  }
  return (
    <div className="px-3 py-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="p-[6px] flex items-center gap-2 min-h-[36px]">
            <Image
              src={user.imageUrl}
              alt={user.fullName || ""}
              width={22}
              height={22}
              className="rounded-[6px]"
            />
            <p
              className={cn(
                "text-[#F0F1F3] text-left font-medium",
                `${isOpenSidebar ? "block min-w-[200px]" : "hidden"}`,
              )}
            >
              {user.fullName}
            </p>
            <ChevronDown color="#F0F1F3" width={14} height={14} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-drop-down w-[var(--sidebar-large)]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SidebarHeader;
