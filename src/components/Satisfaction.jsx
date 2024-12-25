import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { GripHorizontal, UnfoldHorizontal } from "lucide-react"; // Lucide'den GripHorizontal ikonu

const satisfactionData = [
  "https://picsum.photos/920/480", // Geniş, kısa bir resim
  "https://picsum.photos/921/480", // Orta uzunlukta bir resim
];

export default function Stisfaction() {
  return (
    <div className="max-w-[280px] md:max-w-[480px] mx-auto">
      <h2 className="text-xl font-semibold text-primary mb-4">
        Müşteri Memnuniyeti
      </h2>
      <p className="text-sm mb-6">
        Siz değerli Müşterilerimizin memnuniyeti, en büyük motivasyon
        kaynağımızdır. Her zaman daha iyisini sunmak ve ihtiyaçlarınıza en iyi
        şekilde yanıt vermek için buradayız.
      </p>

      <div className="relative w-full h-[300px]">
        <ResizablePanelGroup direction="horizontal" className="rounded-md">
          {/* İlk Resim */}
          <ResizablePanel className="w-1/2 min-w-[50px] md:min-w-[100px]">
            <div className="w-full h-full">
              <img
                src={satisfactionData[0]}
                alt="satisfaction"
                className="w-full h-full object-cover"
              />
            </div>
          </ResizablePanel>

          {/* Kaydırıcı ve Ayırıcı Çizgi */}
          <ResizableHandle>
            <div
              className="flex justify-center items-center w-2 h-full bg-gray-300 cursor-ew-resize"
              style={{
                zIndex: 10, // Çizginin üzerine gelmemesi için
              }}
            >
              {/* Kaydırıcı Ikonu */}
              <UnfoldHorizontal className="w-5 h-5 text-gray-600" />
              <GripHorizontal className="w-5 h-5 text-gray-600" />
            </div>
          </ResizableHandle>

          {/* İkinci Resim */}
          <ResizablePanel className="w-1/2 min-w-[50px] md:min-w-[100px]">
            <div className="w-full h-full">
              <img
                src={satisfactionData[1]}
                alt="satisfaction"
                className="w-full h-full object-cover"
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
