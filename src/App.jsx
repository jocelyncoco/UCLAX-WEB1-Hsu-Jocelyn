import { Routes, Route } from "react-router-dom";

const App = () => {
    return 
    <Routes>
            <Route element={ <Home /> } to="" />
            <Route element={ <Staff /> } to="staff" />
        </Routes>
}

export default App;