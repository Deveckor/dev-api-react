
import './App.scss';
import Layout from './pages/Layout';
import React, {useState} from 'react'




function App() {
  
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);


  return (
    <div className="bg-light">
      
     <Layout
     token={token}
     setToken={setToken}
     isLogin={isLogin}
     setIsLogin={setIsLogin}
     />
      
    </div>
  );
}

export default App;
