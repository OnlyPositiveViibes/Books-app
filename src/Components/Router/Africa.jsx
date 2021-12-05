import { Outlet } from "react-router-dom";
import SuperLink from "./SuperLink";

function Africa() {
    return (
        <div className="africa">
            <Outlet></Outlet>
            <nav>
                <SuperLink to="tigers" children="Tigers"></SuperLink>
                <SuperLink to="lions" children="Lions"></SuperLink>
                <SuperLink to="behemoths" children="Behemoths"></SuperLink>
            </nav>
            
        </div>
    )
}

export default Africa;