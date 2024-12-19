// Gerekli kütüphaneleri içe aktar
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser, loginThunk } from "../../store";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onSubmit = async (data) => {
    const { email, password, remember } = data;
    try {
      // Login action'ını dispatch et (k klasik Redux'ta thunk kullanmıyoruz)
      const user = await dispatch(loginThunk({ email, password }));

      // "Beni Hatırla" kutusu işaretlendiyse, kullanıcı bilgilerini localStorage'a kaydet
      if (remember) {
        localStorage.setItem("token", user.token);
      }

      // Önceki sayfaya ya da anasayfaya yönlendir
      const previousPage = location.state?.from || "/";
      history.push(previousPage);
    } catch (error) {
      toast.error(
        error.message || "Giriş başarısız oldu. Lütfen tekrar deneyin."
      );
    }
  };

  const gravatarUrl = (email) => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: "Email zorunludur" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Şifre:</label>
        <input
          type="password"
          {...register("password", { required: "Şifre zorunludur" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>
          <input type="checkbox" {...register("remember")} /> Beni Hatırla
        </label>
      </div>

      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default LoginForm;
