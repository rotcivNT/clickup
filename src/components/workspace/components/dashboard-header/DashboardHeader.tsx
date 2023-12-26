import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./header-search/HeaderSearch";
import UserControlWrapper from "./header-user-control/UserControlWrapper";
import { cn } from "@/lib/utils";

function DashboardHeader() {
  return (
    <header className="flex h-work-space-header items-center bg-[#323452] px-5 gap-3">
      <Link className="lg:flex-1" href="/">
        <Image alt="LOGO" src="/static/images/logo-no-word.svg" width={13} height={16} />
      </Link>
      <div className={cn("flex-1 lg:w-[500px] lg:flex-[unset]")}>
        <HeaderSearch />
      </div>
      <div className="flex-1 flex justify-end">
        <UserControlWrapper />
      </div>
    </header>
  );
}

export default DashboardHeader;
