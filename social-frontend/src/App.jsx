import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile/:email" element={<Profile />} />

      <Route path="/Search" element={<Search />} />
        <Route path="/chat/:email" element={<Chat />} />
    </Routes>
   

  );
}

export default App;
