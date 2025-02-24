import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">Orient School</span>
            </div>
            <p className="text-gray-400">Halol ta'lim - yorug' kelajak</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white" href="/">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/about">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/news">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/services">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/learn">
                  Korrupsiyaga qarshi kurash
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/contact">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Bog'lanish</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Tel: +998 71 123 45 67</li>
              <li className="text-gray-400">Email: info@orientschool.uz</li>
              <li className="text-gray-400">Manzil: Toshkent sh., Example ko'chasi, 123</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex space-x-4">
              <Link className="text-gray-400 hover:text-white" href="#">
                Facebook
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Telegram
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Orient School. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

