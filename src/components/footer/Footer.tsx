import { cn } from "@/lib/utils";
import SignUpForm from "./SignUpForm";
import "./styles.scss";
import { LogoWhite } from "../icons/LogoWhite";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
const data = [1, 2, 3, 4, 5];
function Footer() {
  return (
    <footer className="pt-[100px] bg-[#FEFEFE] relative">
      <div className="footer-bg" />
      <SignUpForm />
      <div className="relative z-10 px-[10px] flex flex-wrap">
        {data.map((item) => (
          <div key={item} className={cn("px-3 shrink-0", " basis-1/2 md:basis-1/3 xl:basis-1/5")}>
            <p className="text-xs text-white font-bold mt-10">CLICK UP</p>
            <ul className="*:[&_li]:text-sm *:[&_li]:text-white *:[&_li]:font-normal *:mt-5">
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
              <li className="flex">
                <p>Download</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
      {/* Footer Social */}
      <hr className="z-10 relative mx-[10px] mt-[80px]" />
      <div
        className={cn(
          "relative z-10 px-[10px] flex gap-3 justify-between items-center py-8",
          "flex-col md:flex-row",
        )}
      >
        <div className="flex items-center flex-col md:items-start gap-3">
          <LogoWhite />
          <div className="*:text-white *:text-xs *:border-l *:border-white *:px-2 mt-1">
            <Link className="border-none" href="/">
              © 2023 Tboost
            </Link>
            <Link href="/">Security</Link>
            <Link href="/">Your Privacy</Link>
            <Link href="/">Terms</Link>
          </div>
        </div>
        {/* Socials Link */}
        <div className="flex text-white gap-4">
          <LinkedinIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
