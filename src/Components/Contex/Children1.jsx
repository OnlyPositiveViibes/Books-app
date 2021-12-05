import Children2 from "./Children2"

function Children1({say}) {

    return (
        <div className="children nr1">
            <Children2 say={say}></Children2>
        </div>
    )
}

export default Children1