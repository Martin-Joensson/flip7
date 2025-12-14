import { useState } from "react";
import { Footer } from "./components/Footer";
import { CategoryRoutes } from "./routes/CategoryRoutes";
import { Header } from "./components/Header";

export const App = () => {
  const [numberOfPlayer, setNumberOfPlayer] = useState(3);

  return (
    <div className="min-h-screen w-screen relative p-4">
      <Header />
      <div className="pb-10">
        <CategoryRoutes />
        {/* 
    Main content section
    */}
      </div>
    </div>
  );
};
