import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 text-secondaryTextColor">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="flex flex-col gap-1 items-start">
          <h3 className="h3 text-primaryTextColor">Alem Ticaret</h3>
          <p className="p2">Biz Kimiz</p>
          <p className="p2">Kariyer</p>
          <p className="p2">Sürdürülebilirlik</p>
          <p className="p2">iletişim</p>
        </div>

        <div className="flex flex-col gap-1 items-start ">
          <h3 className="h3 text-primaryTextColor">Tedarik</h3>
          <p className="p2">Tedarikçi Ol</p>
          <p className="p2">Kurallar</p>
          <p className="p2">Sınırsız Destek</p>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <h3 className="h3 text-primaryTextColor">Yardım</h3>
          <p className="p2">Sıkça Sorulan Sorular</p>
          <p className="p2">Canlı Destek</p>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <h3 className="h3 text-primaryTextColor">Sosyal Medya</h3>
          <div className="flex gap-4 text-primaryColor">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="p2 text-primaryTextColor">Güvenli Alışveriş Sistemi</p>
        <p className="p3">Türkiye Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
}
