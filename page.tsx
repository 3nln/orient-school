import { ArrowRight, BarChart3, FileText, Globe2, Lock, MessageSquareWarning, Phone, Shield } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">Anti-Korrupsiya</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-gray-300 hover:text-white" href="#">
                Bosh sahifa
              </Link>
              <Link className="text-gray-300 hover:text-white" href="#">
                Xizmatlar
              </Link>
              <Link className="text-gray-300 hover:text-white" href="#">
                Yangiliklar
              </Link>
              <Link className="text-gray-300 hover:text-white" href="#">
                Biz haqimizda
              </Link>
              <Button>Xabar berish</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Korrupsiyaga qarshi <br />
              <span className="text-primary">birgalikda kurashaylik</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Korrupsiyaga qarshi kurashish - jamiyatimiz ravnaqi va kelajagi uchun muhim qadam. Biz bilan birga
              adolatli kelajak sari.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Xabar berish
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Batafsil
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Bizning xizmatlar</h2>
            <p className="text-gray-400">Korrupsiyaga qarshi kurashish bo'yicha kompleks yechimlar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <MessageSquareWarning className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-white">Xabar berish</CardTitle>
                <CardDescription className="text-gray-400">
                  Korrupsiya holatlari haqida xavfsiz va anonim tarzda xabar bering
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-white">Maxfiylik</CardTitle>
                <CardDescription className="text-gray-400">
                  Barcha ma'lumotlar maxfiy saqlanadi va himoyalanadi
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Globe2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-white">Shaffoflik</CardTitle>
                <CardDescription className="text-gray-400">
                  Jarayonlarning ochiq va shaffof monitoring tizimi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">1,234+</div>
              <div className="text-gray-400">Ko'rib chiqilgan murojaatlar</div>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Muvaffaqiyatli hal etilgan ishlar</div>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Ishonch telefoni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Korrupsiya haqida xabar berish</h2>
              <p className="text-gray-400">
                Korrupsiya holatlarini aniqlagan bo'lsangiz, bizga xabar bering. Sizning ma'lumotlaringiz maxfiy
                saqlanadi.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Ismingiz" />
                <Input className="bg-gray-800 border-gray-700 text-white" type="email" placeholder="Email" />
              </div>
              <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Mavzu" />
              <Textarea
                className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                placeholder="Xabar mazmuni..."
              />
              <Button className="w-full" size="lg">
                Yuborish
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">So'nggi yangiliklar</h2>
            <p className="text-gray-400">
              Korrupsiyaga qarshi kurashish sohasidagi eng so'nggi yangiliklar va hisobotlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Yangilik rasmi"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-primary px-2 py-1 rounded text-sm text-white">
                  24 Fevral, 2024
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Korrupsiyaga qarshi yangi qonun qabul qilindi</CardTitle>
                <CardDescription className="text-gray-400">
                  Parlament tomonidan korrupsiyaga qarshi kurashish bo'yicha yangi qonun loyihasi tasdiqlandi. Bu qonun
                  korrupsiyaga qarshi kurashish tizimini yanada kuchaytiradi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Batafsil
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Yangilik rasmi"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-primary px-2 py-1 rounded text-sm text-white">
                  22 Fevral, 2024
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Xalqaro hamkorlik memorandumi imzolandi</CardTitle>
                <CardDescription className="text-gray-400">
                  Korrupsiyaga qarshi kurashish agentligi xalqaro tashkilotlar bilan hamkorlik memorandumini imzoladi.
                  Bu kelishuv tajriba almashish imkonini beradi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Batafsil
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Yangilik rasmi"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-primary px-2 py-1 rounded text-sm text-white">
                  20 Fevral, 2024
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Korrupsiyaga qarshi kurashish bo'yicha seminar</CardTitle>
                <CardDescription className="text-gray-400">
                  Poytaxtda korrupsiyaga qarshi kurashish bo'yicha xalqaro seminar o'tkazildi. Seminarda 20 dan ortiq
                  davlatlardan ekspertlar ishtirok etdi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Batafsil
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg">
              Barcha yangiliklar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-white">Anti-Korrupsiya</span>
              </div>
              <p className="text-gray-400">Korrupsiyaga qarshi kurashish portali</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Tezkor havolalar</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Bosh sahifa
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Xizmatlar
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white" href="#">
                    Yangiliklar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Bog'lanish</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Tel: +998 71 123 45 67</li>
                <li className="text-gray-400">Email: info@antikorrupsiya.uz</li>
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
            <p>&copy; 2024 Anti-Korrupsiya. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

