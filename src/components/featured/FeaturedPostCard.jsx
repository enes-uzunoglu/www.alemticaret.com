import { AlarmClock, ChartArea, ChevronRight } from "lucide-react";
import React from "react";

export default function FeaturePostCard(props) {
  const { post } = props;
  const { image } = post;

  return (
    <section>
      <div
        className="bg-cover bg-center max-w-[400px] h-[300px] "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-red-500">
          <h3>NEW</h3>
        </div>
      </div>

      <div>
        <h3>Google Trend Olan Yenilikler</h3>
        <h2>Loudest a la Madison #1 (Liintegral)</h2>
      </div>

      <div>
        <p>
          Ergonomi ve çalıştığınız yerde size uygun çözümler sunmaya
          odaklanıyoruz. Sadece bir tuş uzaklıktasınız.
        </p>
      </div>

      <div>
        <AlarmClock />
        <p>© 22 Nisan 2021</p>
        <ChartArea />
        <p>10 Yorum</p>
      </div>

      <div>
        <p>Hakkında Daha Fazla Bilgi Edinin</p>
        <ChevronRight />
      </div>
    </section>
  );
}
