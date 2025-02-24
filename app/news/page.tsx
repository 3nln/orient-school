import { ArrowLeft, ArrowRight, Calendar, Eye } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Orient School yangiliklari</h1>
          <p className="text-gray-400">Maktabimizdagi korrupsiyaga qarshi kurashish bo'yicha yangiliklar va e'lonlar</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Qidirish..." />
          <Select>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Kategoriya" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Barcha kategoriyalar</SelectItem>
              <SelectItem value="announcements">E'lonlar</SelectItem>
              <SelectItem value="events">Tadbirlar</SelectItem>
              <SelectItem value="reports">Hisobotlar</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Saralash" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Eng yangi</SelectItem>
              <SelectItem value="oldest">Eng eski</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="bg-gray-800/50 border-gray-700 overflow-hidden">
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
                <CardTitle className="text-white">
                  <Link href={`/news/${item}`} className="hover:text-primary transition-colors">
                    Orient School da ochiqlik va shaffoflik tizimi joriy etildi
                  </Link>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Maktabimizda ta'lim jarayonining shaffofligi va sifatini oshirish maqsadida yangi tizim joriy etildi...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    24.02.2024
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Eye className="h-4 w-4 mr-2" />
                    256
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline">1</Button>
          <Button>2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">4</Button>
          <Button variant="outline" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

