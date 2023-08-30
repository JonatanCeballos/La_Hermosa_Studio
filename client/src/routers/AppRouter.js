import { Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AccountPage from '../pages/AccountPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import UsersPage from '../pages/admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../components/layouts/layout'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import roles from '../helpers/roles'
import routes from './routes'
 
export default function AppRouter() {
    return (
        <Layout>
            <Routes path='/'>
                <Route exact path={routes.home} Component={HomePage}/>
                <Route exact path={routes.login} element={<PublicRoute Component={<LoginPage/>}/>}/>
                <Route exact path={routes.register} element={<PublicRoute Component={<RegisterPage/>}/>}/>
                <Route exact path={routes.account} element={<PrivateRoute Component={<AccountPage/>}/>}/>
                <Route exact path={routes.projects} element={<PrivateRoute Component={<ProjectsPage/>}/>}/>
                <Route exact path={routes.project()} element={<PrivateRoute Component={<ProjectPage/>}/>}/>
                <Route exact path={routes.admin.users}element={<PrivateRoute hasRole={roles.admin} Component={<UsersPage/>}/>}/>
                    
                <Route exact path="*" Component={NotFoundPage}/>
            </Routes> 
        </Layout>
    )
}