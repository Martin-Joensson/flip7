import { CategoryRoutes } from "./routes/CategoryRoutes";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="min-h-screen w-screen relative">
      <Header />
      <div className="pb-10">
        <CategoryRoutes />
      </div>
    </div>
  );
};
