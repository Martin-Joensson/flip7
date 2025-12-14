import { useState } from "react";
import { Footer } from "./components/Footer";
import { CategoryRoutes } from "./routes/CategoryRoutes";

export const App = () => {
  const [numberOfPlayer, setNumberOfPlayer] = useState(3);



  return (
    <div className="min-h-screen relative">
      <div className="pb-10">
        <CategoryRoutes  />
        {/* 
    Main content section
    */}
      </div>
      <Footer />
    </div>
  );
};
