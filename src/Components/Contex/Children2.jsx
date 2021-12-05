import Children3 from "./Children3"

function Children2({say}) {

    return (
        <div className="children nr2">
            <Children3 say={say}></Children3>
        </div>
    )
}

export default Children2