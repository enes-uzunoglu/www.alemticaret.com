import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // SHADCN Card component'leri

export default function Footer() {
  return (
    <footer className="max-w-[280px] md:max-w-[480px] mx-auto py-12 px-4 bg-gray-100 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Alem Ticaret</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Biz Kimiz</p>
            <p>Kariyer</p>
            <p>İletişim</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tedarik</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tedarikçi Ol</p>
            <p>Destek</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Yardım</CardTitle>
          </CardHeader>
          <CardContent>
            <p>FAQ</p>
            <p>Canlı Destek</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sosyal Medya</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4 md:flex-col md:items-center text-primaryColor">
              <Facebook
                className="text-primaryColor  transition duration-300 hover:scale-125 transform"
                size={16}
              />
              <Instagram
                className="text-primaryColor  transition duration-300 hover:scale-125 transform"
                size={16}
              />
              <Twitter
                className="text-primaryColor  transition duration-300 hover:scale-125 transform"
                size={16}
              />
              <Youtube
                className="text-primaryColor  transition duration-300 hover:scale-125 transform"
                size={16}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 text-center text-gray-500">
        <p>Güvenli Alışveriş Sistemi</p>
        <p>© Türkiye Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
}
