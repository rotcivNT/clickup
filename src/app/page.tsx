import Header from "@/components/header/Header";
import HomeHero from "@/components/sections/HomeHero";
import HomeTab from "@/components/sections/HomeTab";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="mt-[70px] xl:w-[1300px] max-w-full mx-auto">
        <HomeHero />
        <HomeTab />
      </main>
    </div>
  );
}
