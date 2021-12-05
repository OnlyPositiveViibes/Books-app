import {useParams} from "react-router";

function Behemoths() {

    const {count} = useParams();



    if(typeof count === 'undefined') {
        return (
            <h2>No hipos</h2>
        )
    }

    return(
        <h2>{count} Behemoths</h2>
    )
}

export default Behemoths;