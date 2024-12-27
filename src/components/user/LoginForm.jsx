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
      const user = await dispatch(loginThunk({ email, password }));

      if (remember) {
        localStorage.setItem("token", user.token);
      }

      const previousPage = location.state?.from || "/";
      history.push(previousPage);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Giriş başarısız oldu. Lütfen tekrar deneyin.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Giriş Yap
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email zorunludur" })}
            className={`w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Email adresinizi girin"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Şifre
          </label>
          <input
            type="password"
            {...register("password", { required: "Şifre zorunludur" })}
            className={`w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Şifrenizi girin"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register("remember")}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 text-sm text-gray-600">Beni Hatırla</label>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
