import Header from "@/components/header/Header";
import HomeCollapse from "@/components/sections/HomeCollapse";
import HomeHero from "@/components/sections/HomeHero";
import HomeJoinTeam from "@/components/sections/HomeJoinTeam";
import HomeTab from "@/components/sections/HomeTab";
import React from "react";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="mt-[70px] xl:w-[1300px] max-w-full mx-auto">
        <HomeHero />
        <HomeTab />
        <HomeCollapse />
        <HomeJoinTeam />
      </main>
    </div>
  );
}
