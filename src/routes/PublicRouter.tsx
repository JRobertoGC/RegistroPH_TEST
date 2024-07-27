import { Outlet } from "react-router-dom";
import { OfflinePage } from "../pages/index"; // Asegúrate de que esta página exista
import { useAppContext } from "../store/app-context";

const PublicRouter = () => {
  const { loadingContext } = useAppContext();

  return (
    <div>
      {loadingContext ? (
        <OfflinePage />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default PublicRouter;
