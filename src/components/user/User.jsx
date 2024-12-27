import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHistory, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function User() {
  const history = useHistory(); // React Router v5 için yönlendirme
  const location = useLocation(); // Mevcut URL'yi almak için

  // Varsayılan sekmeyi belirlemek için URL'den değeri alıyoruz
  const defaultTab = location.pathname === "/login" ? "login" : "signup";

  const handleTabChange = (tabValue) => {
    // Sekme değiştiğinde URL'yi güncelle
    history.push(`/${tabValue}`);
  };

  return (
    <Tabs
      value={defaultTab} // Sekme kontrolü için value kullanıldı
      onValueChange={handleTabChange} // Sekme değişikliklerini algıla
      className="w-[400px]"
    >
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>

      {/* LoginForm içeriği */}
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>

      {/* Sign Up içeriği */}
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  );
}
