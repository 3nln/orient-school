import { ArrowLeft, Calendar, Eye, Share2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/news" className="text-gray-400 hover:text-white inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Yangiliklarga qaytish
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Yangilik rasmi"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Orient School da ochiqlik va shaffoflik tizimi joriy etildi
            </h1>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                24 Fevral, 2024
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                256 marta o'qildi
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400">
                <Share2 className="h-4 w-4 mr-2" />
                Ulashish
              </Button>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-6">
              Orient School rahbariyati tomonidan ta'lim jarayonining shaffofligi va sifatini oshirish maqsadida yangi
              tizim joriy etildi. Bu tizim orqali ota-onalar va o'quvchilar barcha jarayonlarni kuzatib borish
              imkoniyatiga ega bo'ladilar.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Yangi tizimning afzalliklari</h2>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Baholash tizimining shaffofligi</li>
              <li>O'quv jarayonini onlayn kuzatish imkoniyati</li>
              <li>Maktab xarajatlarining ochiq hisoboti</li>
              <li>Ota-onalar bilan tezkor aloqa</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Natijalar va rejalar</h2>
            <p className="text-gray-300 mb-6">Yangi tizim orqali maktabimizda:</p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>O'qituvchilar va o'quvchilar o'rtasidagi munosabatlar yanada shaffof bo'ladi</li>
              <li>Ota-onalar farzandlarining o'qish jarayonini to'liq nazorat qila oladilar</li>
              <li>Maktab faoliyati haqida muntazam hisobotlar e'lon qilib boriladi</li>
            </ul>
          </div>
        </article>

        {/* Related News */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">O'xshash yangiliklar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gray-800/50 border-gray-700 overflow-hidden">
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
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    <Link href={`/news/${item}`} className="hover:text-primary transition-colors">
                      Maktabimizda ochiq eshiklar kuni o'tkazildi
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      22.02.2024
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-2" />
                      184
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

