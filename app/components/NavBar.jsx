"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import TopNavBar from "./TopNavBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { navigation } from "../lib/data";
import { Button } from "@/components/ui/button";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { CiLogout } from "react-icons/ci";

export default function NavBar() {
  const { user, logout, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const [openPopover, setOpenPopover] = useState(null);

  return (
    <div className="bg-white">
      <MobileMenu open={open} setOpen={setOpen} user={user} logout={logout} />

      {/* ✅ Desktop navbar */}
      <div className="relative">
        <TopNavBar />
        <nav aria-label="Top" className="container mx-auto px-5 sm:px-15">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Mobile button */}
              <Button
                type="button"
                size="default"
                variant="outline"
                onClick={() => setOpen(true)}
                className="rounded-md mb-2 bg-white p-2 text-gray-400 lg:hidden"
              >
                <RxHamburgerMenu className="h-6 w-6" />
              </Button>
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/dashboard">
                  <img alt="Logo" src="/Logo.svg" className="h-8 w-auto" />
                </a>
              </div>
              {/* Desktop nav */}
              <DesktopMenu
                navigation={navigation}
                openPopover={openPopover}
                setOpenPopover={setOpenPopover}
              />
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end mt-1 gap-3">
                {loading ? (
                  // Show loading state
                  <div className="w-32 h-8 bg-gray-200 animate-pulse rounded"></div>
                ) : !user ? (
                  // ✅ Not logged in
                  <>
                    <Button
                      asChild
                      variant="outline"
                      className="w-25 text-gray-600 py-1 px-3"
                    >
                      <Link href="/register">Register</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-25 bg-amber-500/90 hover:bg-amber-500 text-white py-1 px-3 rounded-sm"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                  </>
                ) : (
                  // ✅ Logged in
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      Welcome, {user.name || user.email}
                    </span>
                    <button
                      onClick={logout}
                      className="flex items-center gap-1 bg-amber-500/90 hover:bg-amber-500 text-white py-1 px-3 rounded-sm"
                    >
                      <CiLogout className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

// Mobile Menu Component
function MobileMenu({ open, setOpen, user, logout }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
      <DialogBackdrop className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 z-40 flex">
        <DialogPanel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <div className="flex justify-end px-4 pt-4">
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => setOpen(false)}
              className="p-3 rounded-md bg-amber-50"
            >
              <IoClose size={20} color="var(--color-amber-500)" />
            </Button>
          </div>

          {/* Mobile nav */}
          <div className="space-y-6 px-4">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <a
                  href={page.href}
                  className="block p-2 font-medium text-gray-900"
                >
                  {page.name}
                </a>

                {/* Show categories if available */}
                {page.categories && (
                  <div className="ml-4 mt-2 space-y-2">
                    {page.categories.map((category) => (
                      <div key={category.id || category.name}>
                        <p className="text-gray-700 font-semibold">
                          {category.name}
                        </p>

                        {/* ✅ Check if category has items */}
                        {category.items ? (
                          <ul className="ml-2 space-y-2 my-5">
                            {category.items.map((item) => (
                              <li key={item.name} className="mb-2">
                                <a
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-amber-500"
                                >
                                  - {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="flex items-center gap-3 my-3">
                            {category.img && (
                              <img
                                src={category.img}
                                alt={category.name}
                                className="w-full object-fill rounded-md"
                              />
                            )}
                            <a
                              href={category.href}
                              className="text-sm text-gray-600 hover:text-amber-500"
                            >
                              - {category.name}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth */}
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {!user ? (
              <>
                <a
                  href="/login"
                  className="block p-2 font-medium text-gray-900"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="block p-2 font-medium text-gray-900"
                >
                  Sign Up
                </a>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-2">
                  <span className="text-sm text-gray-600">
                    Welcome, {user.name || user.email}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 font-medium text-gray-900 w-full text-left"
                >
                  <CiLogout className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

// Desktop Menu Component
function DesktopMenu({ navigation, openPopover, setOpenPopover }) {
  return (
    <PopoverGroup className="hidden lg:ml-8 lg:block">
      <div className="flex h-full space-x-8">
        {navigation.pages.map((page) =>
          page.categories ? (
            <Popover
              key={page.name}
              className="flex"
              onMouseEnter={() => setOpenPopover(page.name)}
              onMouseLeave={() => setOpenPopover(null)}
            >
              <a
                href={page.href}
                className="relative flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                {page.name}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out ${
                    openPopover === page.name ? "bg-amber-500" : ""
                  }`}
                />
              </a>

              {openPopover === page.name && (
                <PopoverPanel
                  static
                  className="container mx-auto absolute inset-x-0 top-full z-50 bg-white shadow-md border-b border-b-amber-500 rounded-b-xl"
                >
                  <div className="py-8 grid grid-cols-4 gap-8 px-5 sm:px-15">
                    {page.categories.map((category) => (
                      <div key={category.id || category.name}>
                        <p className="font-semibold text-gray-900 mb-3">
                          {category.name}
                        </p>

                        {/* ✅ Check if category has items */}
                        {category.items ? (
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.name} className="mb-2">
                                <a
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-amber-500"
                                >
                                  - {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="flex flex-col">
                            {category.img && (
                              <img
                                src={category.img}
                                alt={category.name}
                                className="w-full object-fill rounded-md"
                              />
                            )}
                            <Button
                              asChild
                              className="w-40 p-2 text-xs rounded text-gray-800 border border-[#ff9500] bg-neutral-50 hover:bg-gray-100 transition duration-300 ease-in mt-5"
                            >
                              <Link href="/dashboard/pricing">
                                Get it Now{" "}
                                <MdArrowForward color="#FF9500" size={18} />
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              )}
            </Popover>
          ) : (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              {page.name}
            </a>
          )
        )}
      </div>
    </PopoverGroup>
  );
}
