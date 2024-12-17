import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/signup",
        data
      );
      console.log("Login success:", response.data);
    } catch (err) {
      setError("api", { message: "Giriş hatası!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          {...register("password", { required: "Şifre is required" })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      {errors.api && <p style={{ color: "red" }}>{errors.api.message}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Yükleniyor..." : "Giriş Yap"}
      </button>
    </form>
  );
}
