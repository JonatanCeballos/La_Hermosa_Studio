import './App.css';
import AuthProvider from './auth/authProvider';
import AppRouter from './routers/AppRouter';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <AppRouter/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
