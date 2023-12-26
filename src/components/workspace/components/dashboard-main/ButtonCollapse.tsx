"use client";
import { useBearStore } from "@/app/store/store";
import { PanelsTopLeft } from "lucide-react";

function ButtonCollapse() {
  const { setIsOpenSidebar } = useBearStore();
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className="cursor-pointer hover:bg-[rgba(255,255,255,0.1)] p-[6px] rounded-[6px]"
      onClick={setIsOpenSidebar}
    >
      <PanelsTopLeft color="rgb(173, 179, 189)" strokeWidth={1.5} width={20} height={20} />
    </div>
  );
}

export default ButtonCollapse;
