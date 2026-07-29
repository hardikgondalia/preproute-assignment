import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import { setAccessToken } from "../../utils/authStorage";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userId: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleLogin = async () => {
    if (!form.userId.trim() || !form.password.trim()) {
      setError("Please enter User ID and Password.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await login({
        userId: form.userId,
        password: form.password,
      });
      // Adjust according to your API response
      setAccessToken(response.data?.token)
      localStorage.setItem("user", JSON.stringify(response.data?.user));
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F7FBFF]">
      <div className="w-full h-full px-5 py-4.5 grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex justify-center items-center">
          <img src="/images/login-image.svg" alt="" className="lg:w-116.75 lg:h-86" />
        </div>
        <div className="px-5 md:px-14 lg:px-16 xl:px-25 flex flex-col justify-center gap-7.5 bg-white text-[#374151] border border-[#60A5FA] rounded-lg">
          <img src="/images/logo.svg" alt="" className="w-33.75 h-8.5" />
          <div className="flex flex-col gap-5">
            <span className="text-[20px] font-semibold">Login</span>
            <span className="text-[12px] font-normal">Use your company provided Login credentials</span>
          </div>
          <form className="flex flex-col gap-7.5">
            <div className="flex flex-col gap-3.75 font-medium">
              <label htmlFor="userid">User ID</label>
              <input
                type="text"
                name="userId"
                value={form.userId}
                onChange={handleChange}
                placeholder="Enter User ID"
                className="py-2.75 px-4 border border-[#9CA3AF] rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-3.75 font-medium">
              <label htmlFor="userid">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="py-2.75 px-4 border border-[#9CA3AF] rounded-lg outline-none"
              />
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
            <a href="" className="text-[#1B5DEF] text-[14px] cursor-pointer">
              Forgot password?{" "}
            </a>
          </form>
          <button
            disabled={loading}
            className="border-none rounded-xl bg-[#5988Ef] text-[#FAFAFA] h-12 flex justify-center items-center cursor-pointer hover:bg-[#253183] transition-colors duration-300"
            onClick={() => handleLogin()}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
