import { useEffect } from "react";
import { login } from "../../services/auth.service";

const Dashboard = () => {
  useEffect(() => {
    const testLogin = async () => {
      try {
        const response = await login();
        console.log("✅ Login Success:", response);
      } catch (error) {
        console.error("❌ Login Failed:", error);
      }
    };

    testLogin();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </div>
  );
};

export default Dashboard;