import { BookOpenText, Building2, TrendingUp } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Card bileşenleri varsayalım

const BestServices = () => {
  return (
    <section>
      <Card className="max-w-[280px] md:max-w-[480px] mx-auto">
        <CardHeader>
          <h3>En İyi Hizmetler</h3>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center group">
              <BookOpenText
                className="text-primaryColor  transition duration-300 group-hover:scale-125 transform"
                size={32}
              />
              <h4>Kolay Zaferler</h4>
              <p>En iyi gülümsemenizi kazanın</p>
            </div>

            <div className="flex flex-col items-center group">
              <Building2
                className="text-primaryColor  transition duration-300 group-hover:scale-125 transform"
                size={32}
              />
              <h4>Beton</h4>
              <p>En güzel gülümsemenizi keşfetmenize yardımcı olur.</p>
            </div>

            <div className="flex flex-col items-center group">
              {/* İkon */}
              <TrendingUp
                className="text-primaryColor  transition duration-300 group-hover:scale-125 transform"
                size={32}
              />

              {/* Yazı ve Açıklama */}
              <div className="text-center">
                <h4 className="text-lg font-semibold">Büyüme Hileleri</h4>
                <p className="text-sm">Engelleri aşmak ve başarıya ulaşmak.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BestServices;
