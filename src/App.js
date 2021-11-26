import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ChatPage from './components/ChatPage/ChatPage'
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<ChatPage />} />
          <Route exact path="/login" element={<LoginPage />}/>
          <Route exact path="/register" element={<RegisterPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
