import { CategoryRoutes } from "./routes/CategoryRoutes";
import { Header } from "./components/Header";



export const App = () => {


   return (
     <div className="min-h-screen w-screen relative bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-300">
       <Header />
       <div className="pb-10">
         <CategoryRoutes />
       </div>
     </div>
   );
};
