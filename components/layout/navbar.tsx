"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  useEffect(()=>{
    setIsOpen(false)
  }, [pathname])


  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-white">
              Orient School
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4 border-t border-gray-700">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link className="text-gray-300 hover:text-white" href="/">
        Bosh sahifa
      </Link>
      <Link className="text-gray-300 hover:text-white" href="/about">
        Biz haqimizda
      </Link>
      <Link className="text-gray-300 hover:text-white" href="/news">
        Yangiliklar
      </Link>
      <Link className="text-gray-300 hover:text-white" href="/services">
        Xizmatlar
      </Link>
      <Link className="text-gray-300 hover:text-white" href="/learn">
        Korrupsiyaga qarshi kurash
      </Link>
      <Link className="text-gray-300 hover:text-white" href="/contact">
        Bog'lanish
      </Link>
      <Button asChild>
        <Link href="/contact">Murojaat qilish</Link>
      </Button>
    </>
  );
}
