import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import StoreOwnerDashboard from './components/StoreOwnerDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/admin" component={AdminDashboard} roles={['admin']} />
          <ProtectedRoute path="/user" component={UserDashboard} roles={['normal']} />
          <ProtectedRoute path="/store-owner" component={StoreOwnerDashboard} roles={['store_owner']} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
