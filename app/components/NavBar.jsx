"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { MdArrowForward } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import TopNavBar from "./TopNavBar";
import { navigation } from "../lib/data";

// ============================================================
// MAIN NAVBAR
// ============================================================
export default function NavBar() {
  const { user, logout, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <div className="bg-white">
      {/* Mobile Drawer */}
      <MobileMenu open={open} setOpen={setOpen} user={user} logout={logout} />

      {/* Desktop Navbar */}
      <div className="relative border-b border-gray-200">
        <TopNavBar />
        <nav className="lg:container mx-auto px-10">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-5">
              {/* Logo */}
              <Link href="/dashboard">
                <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
              </Link>

              <DesktopMenu
                hoveredMenu={hoveredMenu}
                setHoveredMenu={setHoveredMenu}
              />
            </div>

            {/* Mobile Toggle */}
            <Button
              variant="outline"
              onClick={() => setOpen(true)}
              className="md:hidden bg-white text-gray-400 p-2"
            >
              <RxHamburgerMenu className="h-6 w-6" />
            </Button>

            {/* Auth Actions */}
            <div className="hidden md:flex items-center gap-3">
              {loading ? (
                <div className="w-32 h-8 bg-gray-200 animate-pulse rounded"></div>
              ) : user ? (
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 text-ellipsis whitespace-nowrap overflow-hidden max-w-[100px] lg:max-w-[150px] ">
                    Welcome, {user.name || user.email}
                  </span>
                  <Button
                    onClick={logout}
                    className="bg-amber-500/90 hover:bg-amber-500 text-white flex items-center gap-1 py-1 px-5"
                  >
                    <CiLogout className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="text-gray-600 px-5"
                  >
                    <Link href="/register">Register</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-amber-500/90 hover:bg-amber-500 text-white px-5"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

// ============================================================
// DESKTOP MENU
// ============================================================
function DesktopMenu({ hoveredMenu, setHoveredMenu }) {
  return (
    <PopoverGroup className="hidden md:flex items-center space-x-8">
      {navigation.pages.map((page) =>
        page.categories ? (
          <Popover
            key={page.name}
            onMouseEnter={() => setHoveredMenu(page.name)}
            onMouseLeave={() => setHoveredMenu(null)}
            className="relative"
          >
            <Link
              href={page.href}
              className={`text-sm font-medium text-gray-600 hover:text-gray-800 ${
                hoveredMenu === page.name ? "text-amber-500" : ""
              }`}
            >
              {page.name}
            </Link>

            {hoveredMenu === page.name && (
              <PopoverPanel
                static
                className="absolute left-[-100px] top-12 z-50 w-3xl lg:w-4xl  bg-white shadow-md border-b border-amber-500 rounded-xl"
              >
                <div className=" mx-auto grid grid-cols-4 gap-8 py-8 px-5 sm:px-8">
                  {page.categories.map((category) => (
                    <CategoryBlock
                      key={category.id || category.name}
                      {...category}
                    />
                  ))}
                </div>
              </PopoverPanel>
            )}
          </Popover>
        ) : (
          <Link
            key={page.name}
            href={page.href}
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            {page.name}
          </Link>
        )
      )}
    </PopoverGroup>
  );
}

// ============================================================
// CATEGORY BLOCK (Shared for desktop & mobile)
// ============================================================
function CategoryBlock({ name, items, img, href }) {
  return (
    <div>
      <p className="font-semibold text-gray-900 mb-3">{name}</p>

      {items ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-gray-600 hover:text-amber-500"
              >
                - {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col">
          {img && (
            <img
              src={img}
              alt={name}
              className="w-full object-cover rounded-md"
            />
          )}
          <Button
            asChild
            className="w-40 p-2 mt-5 text-xs text-gray-800 border border-amber-500 bg-neutral-50 hover:bg-gray-100"
          >
            <Link href={href || "#"}>
              Get it Now <MdArrowForward color="#FF9500" size={18} />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// MOBILE MENU
// ============================================================
function MobileMenu({ open, setOpen, user, logout }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
      <DialogBackdrop className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 flex">
        <DialogPanel className="w-full max-w-sm bg-white pb-12 shadow-xl overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center px-6 mt-4">
            <Link href="/dashboard">
              <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
            <Button
              onClick={() => setOpen(false)}
              size="icon"
              variant="outline"
              className="bg-amber-50"
            >
              <IoClose size={20} color="var(--color-amber-500)" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="px-6 mt-6 space-y-10">
            {navigation.pages.map((page) => (
              <div key={page.name}>
                <Link
                  href={page.href}
                  className="block text-gray-900 font-medium"
                >
                  - {page.name}
                </Link>
              </div>
            ))}

            {/* Auth Buttons */}
            <div className="flex gap-3 mt-6">
              {!user ? (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="text-gray-600 px-10"
                  >
                    <Link href="/register">Register</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-amber-500/90 hover:bg-amber-500 text-white px-10"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                </>
              ) : (
                <Button
                  onClick={logout}
                  className="bg-amber-500/90 hover:bg-amber-500 text-white px-10"
                >
                  <CiLogout className="h-4 w-4 inline mr-1" />
                  Logout
                </Button>
              )}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
