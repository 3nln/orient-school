import { Award, Building2, GraduationCap, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Orient School haqida</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Orient School - zamonaviy ta'lim va tarbiya berish bilan birga, halollik va adolat tamoyillariga asoslangan
            yetakchi ta'lim muassasasi.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Bizning vazifamiz</CardTitle>
              <CardDescription className="text-gray-400">
                Sifatli va halol ta'lim berish orqali kelajak avlodni tarbiyalash
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                Biz o'quvchilarimizga nafaqat bilim berish, balki ularda halollik, adolat va mas'uliyat kabi
                qadriyatlarni shakllantirish orqali komil insonlarni tarbiyalaymiz.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Bizning maqsadimiz</CardTitle>
              <CardDescription className="text-gray-400">Ta'lim sohasida yangi standartlarni o'rnatish</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                Bizning maqsadimiz - ta'lim sohasida shaffoflik va sifat bo'yicha yangi standartlarni o'rnatish, hamda
                o'quvchilarimizga jahon standartlariga mos ta'lim berish.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Bizning yutuqlarimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">98%</h3>
              <p className="text-gray-400">O'quvchilar qoniqish darajasi</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">1000+</h3>
              <p className="text-gray-400">O'quvchilar</p>
            </div>
            <div className="text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">3</h3>
              <p className="text-gray-400">Filiallar</p>
            </div>
            <div className="text-center">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">100+</h3>
              <p className="text-gray-400">Malakali o'qituvchilar</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Bizning rahbariyat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gray-800/50 border-gray-700">
                <div className="aspect-square relative">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Team member"
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Abdullayev Abdullo</CardTitle>
                  <CardDescription className="text-gray-400">Maktab direktori</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    15 yillik pedagogik tajribaga ega mutaxassis. Ta'lim sohasida bir qancha innovatsion loyihalarni
                    amalga oshirgan.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Biz bilan bog'lanish</h2>
          <div className="max-w-2xl mx-auto text-gray-400">
            <p className="mb-2">Manzil: Toshkent shahri, Chilonzor tumani, Example ko'chasi, 123-uy</p>
            <p className="mb-2">Telefon: +998 71 123 45 67</p>
            <p className="mb-2">Email: info@orientschool.uz</p>
            <p>Ish vaqti: Dushanba-Shanba, 8:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

