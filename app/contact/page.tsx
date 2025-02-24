import { Mail, MapPin, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Biz bilan bog'laning</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam berishdan mamnun bo'lamiz
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-white">Telefon</CardTitle>
              <CardDescription className="text-gray-400">Qo'ng'iroq qiling</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>+998 71 123 45 67</p>
              <p>+998 90 123 45 67</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <Mail className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-white">Email</CardTitle>
              <CardDescription className="text-gray-400">Xabar yozing</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>info@orientschool.uz</p>
              <p>support@orientschool.uz</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-white">Manzil</CardTitle>
              <CardDescription className="text-gray-400">Tashrif buyuring</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Toshkent shahri,</p>
              <p>Example ko'chasi, 123-uy</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Xabar qoldiring</h2>
            <p className="text-gray-400 mb-8">
              Savolingiz yoki taklifingiz bo'lsa, quyidagi forma orqali bizga murojaat qiling. Biz tez orada siz bilan
              bog'lanamiz.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Ismingiz" />
                <Input className="bg-gray-800 border-gray-700 text-white" type="email" placeholder="Email" />
                <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Telefon" />
                <Textarea
                  className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                  placeholder="Xabaringiz..."
                />
                <Button className="w-full" size="lg">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Yuborish
                </Button>
              </div>
            </form>
          </div>
          <div className="relative h-[400px] md:h-auto">
            <div className="absolute inset-0 bg-gray-800/50 border border-gray-700 rounded-lg">
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129797.17969450534!2d69.19679495139226!3d41.28269695191964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudCwgT8q7emJla2lzdG9u!5e1!3m2!1suz!2s!4v1740388458649!5m2!1suz!2s" width="600" height="450" className="border-0 w-full h-full" loading="lazy"></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Ko'p so'raladigan savollar</h2>
          <div className="grid gap-4 max-w-3xl mx-auto">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Maktabga qanday ro'yxatdan o'tish mumkin?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Maktabga ro'yxatdan o'tish uchun bizning ofisimizga tashrif buyuring yoki onlayn ariza qoldiring.
                    Bizning mutaxassislar siz bilan bog'lanib, keyingi qadamlar haqida ma'lumot berishadi.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

