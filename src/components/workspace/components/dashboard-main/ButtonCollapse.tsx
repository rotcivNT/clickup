"use client";
import { useBearStore } from "@/app/store/store";
import { PanelsTopLeft } from "lucide-react";

function ButtonCollapse() {
  const { setIsOpenSidebar } = useBearStore();
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={setIsOpenSidebar}>
      <PanelsTopLeft color="rgb(173, 179, 189)" strokeWidth={1.5} width={20} height={20} />
    </div>
  );
}

export default ButtonCollapse;
