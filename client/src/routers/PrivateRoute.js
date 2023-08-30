import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "./routes";

export default function PrivateRoute({hasRole : role, Component}) {

    const location = useLocation();
    
    const {hasRole, isLogged} = useAuth();

    if(role && !hasRole(role)) return <Navigate to={routes.home} />
    if(!isLogged()) return <Navigate to={{pathname: routes.login}} state={{ from:location}}/>
    return (
        Component
    )
}