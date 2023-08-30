import { createContext, useState} from 'react'
import roles from '../helpers/roles';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const navigate = useNavigate();
    
    const [user, setUser] = useState(null);

    const login = (userCredentials, fromLocation) => { 
        setUser({id:1, name:'jonatan ceballos', email: 'jonatan20ceballos01@gmail.com', role:roles.regular});
        if (fromLocation) { navigate(fromLocation); };
    };
    const logout = () => setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
    }
    
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
