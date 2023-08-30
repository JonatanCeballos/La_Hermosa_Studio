import { Navigate} from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "./routes";

export default function PublicRoute({Component}) {

    const {isLogged} = useAuth();

    if(isLogged()) return <Navigate to={routes.projects} /> 
    
    return (
        Component
    )
}