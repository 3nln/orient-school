import { AlertTriangle, BookOpen, FileText, GraduationCap, Scale } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Ta'lim sohasida korrupsiyaga qarshi kurashish</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ta'lim sohasidagi korrupsiya, uning turlari, oqibatlari va unga qarshi kurashish usullari haqida batafsil
            ma'lumot
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-white">Ta'lim sohasidagi korrupsiya</CardTitle>
              <CardDescription className="text-gray-400">
                Ta'lim sohasidagi korrupsiyaning asosiy ko'rinishlari
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Noqonuniy to'lovlar</li>
                <li>• Baholashdagi adolatsizlik</li>
                <li>• Favoritizm</li>
                <li>• Resurslardan noto'g'ri foydalanish</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Batafsil
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <AlertTriangle className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-white">Korrupsiyaning oqibatlari</CardTitle>
              <CardDescription className="text-gray-400">Ta'lim sifatiga ta'siri va ijtimoiy oqibatlar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Ta'lim sifatining pasayishi</li>
                <li>• Adolatsiz raqobat</li>
                <li>• Jamiyatga salbiy ta'sir</li>
                <li>• Kelajak avlodga ta'siri</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Batafsil
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <Scale className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-white">Kurashish usullari</CardTitle>
              <CardDescription className="text-gray-400">Korrupsiyaga qarshi kurashish mexanizmlari</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Shaffof baholash tizimi</li>
                <li>• Monitoring va nazorat</li>
                <li>• Jamoatchilik nazorati</li>
                <li>• Hisobdorlik tizimi</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Batafsil
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Educational Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">O'quv materiallari</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="bg-gray-800/50 border-gray-700">
                <div className="flex p-6">
                  <div className="mr-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Ta'lim sohasida korrupsiyaga qarshi kurashish bo'yicha qo'llanma
                    </h3>
                    <p className="text-gray-400 mb-4">
                      O'qituvchilar va ota-onalar uchun amaliy tavsiyalar va ko'rsatmalar
                    </p>
                    <Link href="#" className="text-primary hover:text-primary/80 inline-flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      O'qish
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Ko'p beriladigan savollar</h2>
          <div className="grid gap-4 max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    Ta'lim muassasasida korrupsiya holatini qanday aniqlash mumkin?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Korrupsiya holatlarini aniqlashning asosiy belgilari: noqonuniy to'lovlar talab qilish, baholashdagi
                    adolatsizlik, shaffof bo'lmagan qarorlar va boshqalar.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Halol ta'lim - yorug' kelajak garovi</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ta'lim sohasidagi korrupsiyaga qarshi kurashish - har birimizning vazifamiz. Siz ham bu jarayonda faol
            ishtirok etishingiz mumkin.
          </p>
          <Button size="lg">Xabar berish</Button>
        </div>
      </div>
    </div>
  )
}

