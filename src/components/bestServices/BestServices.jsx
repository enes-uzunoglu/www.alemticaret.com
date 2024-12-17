import { BookOpenText, Building2, TrendingUp } from "lucide-react";
import React from "react";

const BestServices = () => {
  return (
    <section>
      <div>
        <h2>EN İYİ HİZMETLER.</h2>
        <p>Çözmeye çalıştığımız sorunlar arasında</p>
      </div>

      <div>
        <BookOpenText />
        <h3>Kolay Zaferler</h3>
        <p>En iyi gülümsemenizi kazanın</p>
      </div>

      <div>
        <Building2 />
        <h3>Beton</h3>
        <p>
          Defaleate, en güzel gülümsemenizi keşfetmenize yardımcı olmaya
          odaklanmıştır
        </p>
      </div>

      <div>
        <TrendingUp />
        <h3>Büyüme Hileleri</h3>
        <p>Her engeli ve diğer herhangi bir problemi aşmak.</p>
      </div>
    </section>
  );
};

export default BestServices;
