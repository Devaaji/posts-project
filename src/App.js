import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthUserContext } from "./context/AuthUserProvider";
import DashboardPage from "./pages/dashboard";
import LoginPages from "./pages/login";

const App = () => {
  const { id, username } = useContext(AuthUserContext);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route
          exact
          path="/login"
          element={id && username ? <Navigate to="/" /> : <LoginPages />}
        />
      </Routes>
    </Router>
  );
};

export default App;
