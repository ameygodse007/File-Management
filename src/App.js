import { BrowserRouter, Route ,Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// styles
import './App.css'

// pages & components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Navbar from './components/navbar'
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers'

function App() {

  const { authIsReady, user } = useAuthContext()
  
  return (
    <div className="App">
       <BrowserRouter>
       {user && <Sidebar />}
        <div className="container">
          <Navbar />
            <Routes>
            <Route exact path="/" element={!user ? <Navigate to="/login" replace /> : <Dashboard/>}>
                
              </Route>
            <Route path="/create" element={!user ? <Navigate to="/login" replace /> : <Create/>}>
            </Route>
            <Route path="/projects/:id" element={<Project />}>
              
            </Route>
            <Route path="/login" element={user ? <Navigate to="/" replace />: <Login/>}>
              
            </Route>
            <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup/>}>
              
            </Route>
          </Routes>
        </div>
          {user && <OnlineUsers />}
      </BrowserRouter>
    </div>
  );
}

export default App
