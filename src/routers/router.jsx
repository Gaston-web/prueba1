import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ToDoList } from "../pages/ToDoList";

export const MyRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="ToDoList" element={<ToDoList />} />
        </Routes>
    </BrowserRouter>
)