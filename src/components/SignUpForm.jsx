import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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

  useEffect(() => {
    // API'den roller alınır
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // "passwordValidation" verisini göndermez, sadece "password" gönderilir
      const { passwordValidation, ...dataToSend } = data;

      // POST isteği ile kayıt işlemi yapılır
      await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/signup",
        dataToSend
      );
      alert(
        "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!"
      );
      window.history.back(); // Önceki sayfaya geri dönülür
    } catch (err) {
      setError("Bir hata oluştu!");
    } finally {
      setLoading(false);
    }
  };

  const selectedRoleId = watch("role_id");
  console.log(selectedRoleId);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Ad Alanı */}
      <div>
        <label>Ad:</label>
        <input
          type="text"
          {...register("name", { required: "Ad gereklidir", minLength: 3 })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      {/* E-posta Alanı */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: "E-posta gereklidir" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Şifre Alanı */}
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          {...register("password", {
            required: "Şifre gereklidir",
            minLength: 8,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* Şifre Doğrulama Alanı */}
      <div>
        <label>Şifre Doğrulama:</label>
        <input
          type="password"
          {...register("passwordValidation", {
            required: "Şifre doğrulaması gereklidir",
            validate: (value) =>
              value === watch("password") || "Şifreler uyuşmuyor",
          })}
        />
        {errors.passwordValidation && (
          <p>{errors.passwordValidation.message}</p>
        )}
      </div>

      {/* Rol Seçimi */}
      <div>
        <label>Rol:</label>
        <select {...register("role_id", { required: "Rol seçilmelidir" })}>
          <option value="">Bir rol seçin</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        {errors.role_id && <p>{errors.role_id.message}</p>}
      </div>

      {/* Mağaza Detayları (Eğer rol "store" ise) */}
      {selectedRoleId === "2" && (
        <div>
          {/* Mağaza Adı */}
          <label>Mağaza Adı:</label>
          <input
            type="text"
            {...register("store.name", {
              required: "Mağaza adı gereklidir",
              minLength: 3,
            })}
          />
          {errors.store?.name && <p>{errors.store?.name.message}</p>}

          {/* Mağaza Telefonu */}
          <label>Mağaza Telefonu:</label>
          <input
            type="tel"
            {...register("store.phone", {
              required: "Mağaza telefonu gereklidir",
              pattern: /^(\+90|0)?5\d{9}$/,
            })}
          />
          {errors.store?.phone && <p>{errors.store?.phone.message}</p>}

          {/* Mağaza Vergi Kimlik Numarası */}
          <label>Mağaza Vergi Kimlik Numarası:</label>
          <input
            type="text"
            {...register("store.tax_no", {
              required: "Vergi kimlik numarası gereklidir",
              pattern: /^T\d{4}V\d{7}$/,
            })}
          />
          {errors.store?.tax_no && <p>{errors.store?.tax_no.message}</p>}

          {/* Mağaza Banka Hesabı */}
          <label>Mağaza Banka Hesabı:</label>
          <input
            type="text"
            {...register("store.bank_account", {
              required: "Banka hesabı gereklidir",
              pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{11}$/,
            })}
          />
          {errors.store?.bank_account && (
            <p>{errors.store?.bank_account.message}</p>
          )}
        </div>
      )}

      {/* Gönder Butonu */}
      <button type="submit" disabled={loading}>
        {loading ? "Gönderiliyor..." : "Gönder"}
      </button>

      {/* Hata Mesajı */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
