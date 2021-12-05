import { Link, Outlet } from "react-router-dom";
import SuperLink from "./SuperLink";

function Africa() {
    return (
        <div className="africa">
            <Outlet></Outlet>
            <nav>
                <SuperLink to="tigers" children="Tigers">Tigers</SuperLink>
                <SuperLink to="lions" children="Lions">Lions</SuperLink>
                <SuperLink to="behemoths" children="Behemoths">Behemoths</SuperLink>
            </nav> 
        </div>
    )
}

export default Africa;