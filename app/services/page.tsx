import { BookOpen, GraduationCap, LayoutGrid, LucideBookOpen, Scale, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Bizning xizmatlar</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Orient School tomonidan taqdim etiladigan ta'lim xizmatlari va qo'shimcha imkoniyatlar
        </p>
      </div>

      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-white">Asosiy ta'lim</CardTitle>
            <CardDescription className="text-gray-400">1-11 sinflar uchun zamonaviy ta'lim dasturi</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Davlat ta'lim standarti</li>
              <li>• Chet tillari</li>
              <li>• Zamonaviy fanlar</li>
              <li>• Individual yondashuv</li>
            </ul>
            <Button className="w-full" variant="outline">
              Batafsil
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <LucideBookOpen className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-white">Qo'shimcha ta'lim</CardTitle>
            <CardDescription className="text-gray-400">Qo'shimcha bilim va ko'nikmalar</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Robototexnika</li>
              <li>• Dasturlash</li>
              <li>• San'at va musiqa</li>
              <li>• Sport to'garaklari</li>
            </ul>
            <Button className="w-full" variant="outline">
              Batafsil
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <Scale className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-white">Tayyorlov kurslari</CardTitle>
            <CardDescription className="text-gray-400">Imtihonlarga tayyorgarlik</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• SAT, IELTS</li>
              <li>• Olimpiadalarga tayyorgarlik</li>
              <li>• DTM testlari</li>
              <li>• Chet tili sertifikatlari</li>
            </ul>
            <Button className="w-full" variant="outline">
              Batafsil
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Qo'shimcha imkoniyatlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Kichik sinflar</h3>
            <p className="text-gray-400">15-20 o'quvchidan iborat sinflar</p>
          </div>
          <div className="text-center">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Malakali ustozlar</h3>
            <p className="text-gray-400">Tajribali pedagoglar jamoasi</p>
          </div>
          <div className="text-center">
            <LayoutGrid className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Zamonaviy jihozlar</h3>
            <p className="text-gray-400">Eng so'nggi texnologiyalar</p>
          </div>
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Online ta'lim</h3>
            <p className="text-gray-400">Masofaviy ta'lim imkoniyati</p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Ta'lim narxlari</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Boshlang'ich sinf</CardTitle>
              <CardDescription className="text-gray-400">1-4 sinflar</CardDescription>
              <div className="text-3xl font-bold text-white mt-4">15,000,000 so'm</div>
              <div className="text-sm text-gray-400">bir yil uchun</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Asosiy fanlar</li>
                <li>✓ Chet tillari</li>
                <li>✓ Sport to'garaklari</li>
                <li>✓ Musiqa va san'at</li>
              </ul>
              <Button className="w-full mt-6">Ro'yxatdan o'tish</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 border-primary">
            <CardHeader>
              <CardTitle className="text-white">O'rta sinf</CardTitle>
              <CardDescription className="text-gray-400">5-9 sinflar</CardDescription>
              <div className="text-3xl font-bold text-white mt-4">18,000,000 so'm</div>
              <div className="text-sm text-gray-400">bir yil uchun</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Barcha asosiy fanlar</li>
                <li>✓ Chuqurlashtirilgan ingliz tili</li>
                <li>✓ Robototexnika</li>
                <li>✓ Dasturlash asoslari</li>
              </ul>
              <Button className="w-full mt-6">Ro'yxatdan o'tish</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Yuqori sinf</CardTitle>
              <CardDescription className="text-gray-400">10-11 sinflar</CardDescription>
              <div className="text-3xl font-bold text-white mt-4">20,000,000 so'm</div>
              <div className="text-sm text-gray-400">bir yil uchun</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Chuqurlashtirilgan ta'lim</li>
                <li>✓ DTM/IELTS tayyorgarlik</li>
                <li>✓ Kasbga yo'naltirish</li>
                <li>✓ Universitet maslahat</li>
              </ul>
              <Button className="w-full mt-6">Ro'yxatdan o'tish</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Bizning o'quvchimiz bo'ling</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Sifatli va zamonaviy ta'lim - yorqin kelajak poydevori</p>
        <Button size="lg">Hoziroq ro'yxatdan o'ting</Button>
      </div>
    </div>
  )
}

