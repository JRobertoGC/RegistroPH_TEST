import { Outlet } from "react-router-dom";
import { LoadingPage } from "../pages/index"; // Asegúrate de que esta página exista
import { useAppContext } from "../store/app-context";

const PublicRouter = () => {
  const { loadingContext } = useAppContext();

  return (
    <div>
      {loadingContext ? (
        <LoadingPage />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default PublicRouter;
