"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Briefcase,
  Flag,
  Layers3,
  LayoutGrid,
  PackageOpen,
  Receipt,
  Settings,
  ShoppingBasket,
  Store,
  Tags,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const LINK = "LINK";
  const DROPDOWN = "DROPDOWN";

  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const sideNavLinks = [
    {
      title: "Dashboard",
      icon: LayoutGrid,
      href: "",
      type: LINK,
    },
    {
      title: "Catalogue",
      icon: ShoppingBasket,
      href: "/catalogue",
      type: DROPDOWN,
    },
    {
      title: "Customers",
      icon: Users,
      href: "/customers",
      type: LINK,
    },
    {
      title: "Orders",
      icon: Receipt,
      href: "/orders",
      type: LINK,
    },
    {
      title: "Staff",
      icon: Briefcase,
      href: "/staff",
      type: LINK,
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      type: LINK,
    },
    {
      title: "Online Store",
      icon: Store,
      href: "../",
      type: LINK,
    },
  ];
  const catalogueLinks = [
    { title: "Products", icon: PackageOpen, href: "/dashboard/products" },
    { title: "Categories", icon: Layers3, href: "/dashboard/categories" },
    { title: "Coupons", icon: Tags, href: "/dashboard/coupons" },
    { title: "Banners", icon: Flag, href: "/dashboard/banners" },
  ];
  return (
    <div
      className="bg-slate-700 text-slate-50 space-y-6 w-60 h-screen fixed 
    left-0 top-0 shadow-md flex "
    >
      <div className=" flex flex-col flex-grow">
        <Link className="flex h-20 py-4" href="#">
          Logo
        </Link>
        <ScrollArea className="rounded-md h-full">
          {sideNavLinks.map((link, i) => {
            const ROOTLINK = "/dashboard";
            switch (link.type) {
              case LINK:
                return ROOTLINK + link.href === pathname ? (
                  <button
                    key={i}
                    disabled={true}
                    className={`flex gap-3 px-6 py-4 border-l-4 bg-slate-650 border-purple-400 text-purple-400 cursor-default`}
                  >
                    {link.icon && <link.icon />}
                    <span>{link.title}</span>
                  </button>
                ) : (
                  <Link
                    key={i}
                    href={link.href != "../" ? ROOTLINK + link.href : link.href}
                    className={`flex items-center gap-3 px-6 py-4
                  transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-slate-500 duration-300`}
                  >
                    {link.icon && <link.icon />}
                    <span>{link.title}</span>
                  </Link>
                );
              case DROPDOWN:
                return (
                  <Collapsible>
                    <CollapsibleTrigger
                      onClick={() => {
                        setOpenMenu(!openMenu);
                      }}
                      className={`${
                        openMenu && "bg-slate-500"
                      } hover:-translate-y-1 w-full hover:bg-slate-500 duration-300`}
                    >
                      <button
                        key={i}
                        className={`flex items-center gap-3 px-6 py-4
                        transition ease-in-out delay-50 `}
                      >
                        {link.icon && <link.icon />}
                        <span>{link.title}</span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mx-5 mb-2 rounded-b-xl bg-slate-800">
                      {catalogueLinks.map((catalogue, i) => {
                        return (
                          <Link
                            key={i}
                            href={catalogue.href}
                            className={
                              pathname === catalogue.href
                                ? "flex gap-3 px-6 py-4 border-l-4 bg-slate-650 border-purple-400 text-purple-400 cursor-default"
                                : `flex items-center gap-3 px-6 py-4
                        transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-slate-500 duration-300`
                            }
                          >
                            {catalogue.icon && <catalogue.icon />}
                            <span>{catalogue.title}</span>
                          </Link>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                );
              default:
                return <></>;
            }
          })}
        </ScrollArea>
      </div>
    </div>
  );
}
