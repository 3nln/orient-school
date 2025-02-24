import { ArrowRight, BarChart3, FileText, Globe2, GraduationCap, LucideBookOpen, Phone, Shield } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl !leading-tight font-bold text-white mb-6">
              Korrupsiyaga qarshi sifatli ta'lim <br />
              <span className="text-primary">kelajak poydevori</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Orient School - ta'lim sohasida korrupsiyaga qarshi kurashish va shaffoflikni ta'minlash yo'lida. Kelajak
              avlod tarbiyasi uchun halol va adolatli muhit yaratamiz.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                <Link href={"/contact"}>
                Murojaat qilish</Link>
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
            <h2 className="text-3xl font-bold text-white mb-4">Bizning tamoyillar</h2>
            <p className="text-gray-400">Halol va shaffof ta'lim tizimi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <LucideBookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-white">Shaffoflik</CardTitle>
                <CardDescription className="text-gray-400">
                  Barcha jarayonlar ochiq va shaffof tarzda amalga oshiriladi
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-white">Himoya</CardTitle>
                <CardDescription className="text-gray-400">
                  Murojaatchilar shaxsiy ma'lumotlari to'liq himoyalanadi
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Globe2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-white">Nazorat</CardTitle>
                <CardDescription className="text-gray-400">Jamoatchilik nazorati va monitoring tizimi</CardDescription>
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
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Shaffoflik darajasi</div>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Murojaatlar ko'rib chiqilishi</div>
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
              <h2 className="text-3xl font-bold text-white mb-4">Murojaat qilish</h2>
              <p className="text-gray-400">
                Korrupsiya holatlari haqida xabar berish uchun quyidagi formani to'ldiring. Sizning ma'lumotlaringiz
                maxfiy saqlanadi.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Ismingiz" />
                <Input className="bg-gray-800 border-gray-700 text-white" type="email" placeholder="Email" />
              </div>
              <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Telefon raqamingiz" />
              <Textarea
                className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                placeholder="Murojaat mazmuni..."
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
            <p className="text-gray-400">Orient School hayotidan so'nggi yangiliklar va e'lonlar</p>
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
                <CardTitle className="text-white">Korrupsiyaga qarshi kurashish bo'yicha seminar</CardTitle>
                <CardDescription className="text-gray-400">
                  Maktabimizda o'qituvchilar va ma'muriyat xodimlari uchun maxsus seminar tashkil etildi. Seminarda
                  korrupsiyaga qarshi kurashish usullari muhokama qilindi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/news/1">
                    Batafsil
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
                <CardTitle className="text-white">Shaffoflik tizimi joriy etildi</CardTitle>
                <CardDescription className="text-gray-400">
                  Maktabimizda baholash va imtihon jarayonlarining shaffofligini ta'minlash uchun yangi elektron tizim
                  joriy etildi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/news/2">
                    Batafsil
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
                <CardTitle className="text-white">Ota-onalar kengashi yig'ilishi</CardTitle>
                <CardDescription className="text-gray-400">
                  Ota-onalar kengashining navbatdagi yig'ilishida maktabdagi ta'lim sifati va shaffoflikni ta'minlash
                  masalalari muhokama qilindi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/news/3">
                    Batafsil
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/news">
                Barcha yangiliklar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

