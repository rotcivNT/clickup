import Link from "next/link";
import { LogoIcon } from "../icons";
import NavigationBar from "./navbar/Navbar";

function Header() {
  return (
    <header className="flex xl:w-[1300px] px-4 mx-auto h-20 lg:h-[100px] items-center gap-4">
      <div>
        <Link href="/">
          <LogoIcon />
        </Link>
      </div>
      {/* Navbar */}
      <div className="flex-1">
        <NavigationBar />
      </div>
    </header>
  );
}

export default Header;
