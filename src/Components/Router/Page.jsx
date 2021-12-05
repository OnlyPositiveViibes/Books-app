import { Route, Routes } from "react-router";
import Africa from "./Africa";
import America from "./America";
import Behemoths from "./Behemoths";

function Page() {

    return (
        <Routes>
            <Route path="/" element={<h2>Welcome home</h2>}></Route>
            <Route path="/australia" element={<h2>Welcome to Australia</h2>}></Route>
            <Route path="/africa" element={<Africa></Africa>}>
                <Route path="tigers" element={<h2>101 Tigeres</h2>}></Route>
                <Route path="lions" element={<h2>254 Lions</h2>}></Route>
                <Route path="behemoths" element={<Behemoths></Behemoths>}></Route>

                <Route path="behemoths/:count" element={<Behemoths></Behemoths>}></Route>
            </Route>
            <Route path="/america" element={<America></America>}>
                <Route path="amazon" element={<h2>Welcome to Amazon</h2>}></Route>
                <Route path="eagle" element={<h2>See the Eagle</h2>}></Route>
                <Route path="grizzly" element={<h2>See the Grizzly</h2>}></Route>
            </Route>
            <Route path="*" element={<h2>404 not found</h2>}></Route>
        </Routes>
    )

}

export default Page;