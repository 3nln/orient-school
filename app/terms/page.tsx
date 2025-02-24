import { Check, Info } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Foydalanish shartlari</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Orient School xizmatlaridan foydalanish shartlari va qoidalari
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="bg-gray-800/50 border-gray-700 mb-8">
            <CardHeader>
              <Info className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-white">Kirish</CardTitle>
              <CardDescription className="text-gray-400">
                Ushbu hujjat Orient School xizmatlaridan foydalanish shartlarini belgilaydi
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Ushbu foydalanish shartlari Orient School va uning xizmatlaridan foydalanuvchilar o'rtasidagi
                munosabatlarni tartibga soladi. Xizmatlarimizdan foydalanish orqali siz ushbu shartlarga rozilik
                bildirasiz.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">1. Umumiy qoidalar</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Orient School o'z faoliyatini O'zbekiston Respublikasi qonunchiligiga muvofiq amalga oshiradi.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Maktab o'quvchilar va ota-onalar ma'lumotlarini maxfiyligini ta'minlash majburiyatini oladi.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">2. Ta'lim xizmatlari</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Maktab sifatli ta'lim xizmatlarini ko'rsatish majburiyatini oladi.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>O'quv jarayoni davlat ta'lim standartlariga muvofiq tashkil etiladi.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">3. To'lov shartlari</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Ta'lim uchun to'lovlar belgilangan tartib va muddatlarda amalga oshiriladi.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>To'lov shartlari va tartibi alohida shartnomada belgilanadi.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">4. Majburiyatlar</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>O'quvchilar maktab ichki tartib-qoidalariga rioya qilishlari shart.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Maktab mulkiga ehtiyotkorona munosabatda bo'lish talab etiladi.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">5. Yakuniy qoidalar</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Ushbu shartlar O'zbekiston Respublikasi qonunchiligiga muvofiq tartibga solinadi.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Nizolar muzokaralar yo'li bilan hal etiladi.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Last Update */}
          <div className="mt-8 text-center text-gray-400">
            <p>Oxirgi yangilanish: 24 Fevral, 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

