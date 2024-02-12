import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeControl from "../utilities/ThemeControl";

export default function Navbar({ setShowSideNav, showSideNav }) {
  return (
    <div
      className="flex items-center justify-between bg-slate-400 dark:bg-slate-800 
      text-slate-50 h-20 px-8 py-4 fixed top-0 w-full z-1 pr-[20rem]"
    >
      <button onClick={() => setShowSideNav(!showSideNav)}>
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <ThemeControl />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-xl hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-slate-700 dark:focus:ring-blue-800"
            >
              <Bell />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-red-500 rounded-full -top-2 -end-2 dark:border-gray-900">
                1
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-slate-700 bg-white pt-2">
            <DropdownMenuItem>
              <div className="flex items-center space-x-4 w-fit">
                <Image
                  src="/dp.jpg"
                  alt="User Profile Picture"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Test Notification</p>
                  <div className="flex gap-2 items-baseline ">
                    <p className="px-2 py-1 bg-red-700 text-white rounded-full">
                      Out of Stock
                    </p>
                    <p>24-07-2023 - 02:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-4 w-fit">
                <Image
                  src="/dp.jpg"
                  alt="User Profile Picture"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Test Notification</p>
                  <div className="flex gap-2 items-baseline">
                    <p className="px-2 py-1 bg-green-700 text-white rounded-full">
                      In Stock
                    </p>
                    <p>24-07-2023 - 02:40PM</p>
                  </div>
                </div>
                <button className="flex">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/dp.jpg"
              alt="User Profile Picture"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-slate-700 bg-white pt-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center gap-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center gap-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center gap-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
