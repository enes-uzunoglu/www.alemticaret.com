import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className=" max-w-[280px] md:max-w-[480px] mx-auto py-6 px-4 bg-gray-100 text-gray-700">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Alem Ticaret */}
        <Card className="bg-transparent shadow-none flex flex-col justify-center items-center">
          <CardHeader className="pb-1 text-center">
            <CardTitle className="text-[10px] font-bold leading-tight">
              Alem Ticaret
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-center">
            <p className="text-[8px] font-light hover:underline cursor-pointer">
              Biz Kimiz
            </p>
            <p className="text-[8px] font-light hover:underline cursor-pointer">
              Kariyer
            </p>
            <p className="text-[8px] font-light hover:underline cursor-pointer">
              İletişim
            </p>
          </CardContent>
        </Card>

        {/* Tedarik */}
        <Card className="bg-transparent shadow-none flex flex-col justify-center items-center">
          <CardHeader className="pb-1 text-center">
            <CardTitle className="text-[10px] font-bold leading-tight">
              Tedarik
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-center">
            <p className="text-[8px] font-light hover:underline cursor-pointer">
              Tedarikçi Ol
            </p>
            <p className="text-[8px] font-light hover:underline cursor-pointer">
              Destek
            </p>
          </CardContent>
        </Card>

        {/* Yardım */}
        <Card className="bg-transparent shadow-none flex flex-col justify-center items-center">
          <CardHeader className="pb-1 text-center">
            <CardTitle className="text-[10px] font-bold leading-tight">
              Yardım
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-center">
            <p className="text-[8px] font-light hover:underline cursor-pointer">
              FAQ
            </p>
            <p className="text-[8px] font-light hover:underline cursor-pointer">
              Canlı Destek
            </p>
          </CardContent>
        </Card>

        {/* Sosyal Medya */}
        <Card className="bg-transparent shadow-none flex flex-col justify-center items-center">
          <CardHeader className="pb-1 text-center">
            <CardTitle className="text-[10px] font-bold leading-tight">
              Sosyal Medya
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 text-primaryColor justify-center">
            <Facebook
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              size={14}
            />
            <Instagram
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              size={14}
            />
            <Twitter
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              size={14}
            />
            <Youtube
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              size={14}
            />
          </CardContent>
        </Card>
      </div>

      {/* Alt Bilgiler */}
      <div className="mt-4 text-center text-[8px] text-gray-500">
        <p>Güvenli Alışveriş Sistemi</p>
        <p>© Türkiye Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
}
