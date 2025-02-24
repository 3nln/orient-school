import { GraduationCap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-white">Orient School</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
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
          </div>
        </div>
      </nav>
    </header>
  )
}

