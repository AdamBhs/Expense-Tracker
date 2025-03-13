import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Login from "./pages/login/Login"
import { useContext } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/login/Register";
import Expense from "./pages/expense/Expense";
import Income from "./pages/Income/Income";
import Home from "./pages/home/Home";


function App() {

  const PrivateRoute = ({children}) => {
    const { token } = useContext(AuthContext);
    return token ? children : <Navigate to="/login" />
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />

          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Expense" element={<Expense />} />
            <Route path="Income" element={<Income />} />
          </Route>
          
        </Routes> 
      </Router>
      
    </AuthProvider>
  )
}

export default App;
