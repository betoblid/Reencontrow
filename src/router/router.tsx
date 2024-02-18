import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home";
import Error from "../page/Error";


const Root = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Root;