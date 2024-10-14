"use client"

import React, { useContext, useEffect } from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";
import { Customizer } from "./layout/shared/customizer/Customizer";
import { redirect, usePathname } from "next/navigation";
import RightSidebar from "./layout/vertical/sidebar/RightSidebar";
import { MobileRightSidebar } from "./layout/vertical/sidebar/MobileRightSidebar";
import { CustomizerContext } from "../context/customizerContext";
import { useSession } from "next-auth/react";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const url = usePathname();
  const { activeLayout, isLayout , isCollapse } = useContext(CustomizerContext);
  const { data: session } = useSession();

 if(session){
  return (

    <div className="flex w-full min-h-screen">
      <div className={`page-wrapper flex w-full ${activeLayout==="vertical"  ?isCollapse==="full-sidebar"?"xl:ms-[240px] ms-0":"xl:ms-[65px] ms-0":"ms-0"}`}>
        {/* Header/sidebar */}
        {activeLayout == "vertical" ? <Sidebar /> : null}
        <div className="body-wrapper w-full bg-lightgray dark:bg-dark">
          {/* Top Header  */}
          <Header />
          {/* Body Content  */}
          <div className={`${isLayout==="boxed"?"container":"w-full px-5"} mx-auto ${activeLayout==="vertical"?"py-30px":"py-20"} `}>
            <div className={`${url==="/dashboards/minimal"?"xl:me-[256px]  me-0":null}`} >
            {children}
            </div>
            </div>
          <Customizer />
          <MobileRightSidebar />
          {url==="/dashboards/minimal" ? <RightSidebar/> : null }
        </div>
      </div>
    </div>

  );
 }
 return <>{redirect("/auth/auth1/login")}</>;
}
