import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login/Login";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Signup from "./pages/auth/Signup/Signup";
import ListPostPage from "./pages/post/ListPost/ListPostPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Section */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Post Section */}
        <Route path="/post" element={<AppLayout />}>
          <Route index element={<ListPostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
