import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../store";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => setRoles(response.data))
      .catch(() => setError("Rolleri alırken bir hata oluştu."));
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { passwordValidation, ...dataToSend } = data;
      await dispatch(signUpThunk(dataToSend));
      alert("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklayın!");
      window.history.back();
    } catch (err) {
      setError("Kayıt işlemi sırasında bir hata oluştu!");
    } finally {
      setLoading(false);
    }
  };

  const selectedRoleId = watch("role_id");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg p-6 bg-white rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Kayıt Ol
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Ad</label>
          <input
            type="text"
            {...register("name", { required: "Ad gereklidir", minLength: 3 })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "E-posta gereklidir" })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Şifre
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Şifre gereklidir",
              minLength: 8,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Şifre Doğrulama
          </label>
          <input
            type="password"
            {...register("passwordValidation", {
              required: "Şifre doğrulaması gereklidir",
              validate: (value) =>
                value === watch("password") || "Şifreler uyuşmuyor",
            })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.passwordValidation ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.passwordValidation && (
            <p className="mt-1 text-xs text-red-500">
              {errors.passwordValidation.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Rol</label>
          <select
            {...register("role_id", { required: "Rol seçilmelidir" })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.role_id ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Bir rol seçin</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <p className="mt-1 text-xs text-red-500">
              {errors.role_id.message}
            </p>
          )}
        </div>

        {selectedRoleId === "2" && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Mağaza Adı
            </label>
            <input
              type="text"
              {...register("store.name", {
                required: "Mağaza adı gereklidir",
                minLength: 3,
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.store?.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.store?.name && (
              <p className="mt-1 text-xs text-red-500">
                {errors.store?.name.message}
              </p>
            )}

            <label className="block text-sm font-medium text-gray-600">
              Mağaza Telefonu
            </label>
            <input
              type="tel"
              {...register("store.phone", {
                required: "Mağaza telefonu gereklidir",
                pattern: /^\(\+90|0\)?5\d{9}$/,
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.store?.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.store?.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.store?.phone.message}
              </p>
            )}

            <label className="block text-sm font-medium text-gray-600">
              Vergi Kimlik Numarası
            </label>
            <input
              type="text"
              {...register("store.tax_no", {
                required: "Vergi kimlik numarası gereklidir",
                pattern: /^T\d{4}V\d{7}$/,
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.store?.tax_no ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.store?.tax_no && (
              <p className="mt-1 text-xs text-red-500">
                {errors.store?.tax_no.message}
              </p>
            )}

            <label className="block text-sm font-medium text-gray-600">
              Banka Hesabı
            </label>
            <input
              type="text"
              {...register("store.bank_account", {
                required: "Banka hesabı gereklidir",
                pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{11}$/,
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.store?.bank_account
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.store?.bank_account && (
              <p className="mt-1 text-xs text-red-500">
                {errors.store?.bank_account.message}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </form>
    </div>
  );
}
