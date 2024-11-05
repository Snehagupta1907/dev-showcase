"use client";

import { useState } from "react";
import { Nav } from "@repo/ui/components/ui/nav";
import {
  LayoutDashboard,
  UsersRound,
  GemIcon,
  ChevronRight
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SignedIn from "./SignedIn"; 
import SignedOut from "./SignedOut"; 

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathName = usePathname();
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;
  

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative md:min-w-fit border-r px-3 pb-10 pt-24 bg-gray-100 dark:bg-gray-800">
      {!mobileWidth && (
        <div className="absolute right-[-15px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      
      <SignedIn>
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
                title: "Home",
                href: "/",
                icon: LayoutDashboard,
                variant: "default"
              },
            {
              title: "Profile",
              href: "/profile",
              icon: UsersRound,
              variant: "ghost"
            },
            {
              title: "Art Generation",
              href: "/art-generator",
              icon: GemIcon,
              variant: "ghost"
            },
            
          ]}
          LinkComponent={Link}
          getPathname={() => pathName}
        />
      </SignedIn>

      <SignedOut>
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
                title: "Home",
                href: "/",
                icon: LayoutDashboard,
                variant: "default"
              },
            {
              title: "Login",
              href: "/login",
              icon: UsersRound,
              variant: "ghost"
            },
          ]}
          LinkComponent={Link}
          getPathname={() => pathName}
        />
      </SignedOut>
    </div>
  );
}
