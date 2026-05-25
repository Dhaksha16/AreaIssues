import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportIssue from "./pages/ReportIssue";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import IssueDetails from "./pages/IssueDetails";
function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard"element={<ProtectedRoute><Dashboard /></ProtectedRoute> }/>
        <Route path="*" element={<NotFound />} />
        <Route path="/issue/:id"element={<IssueDetails />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
 