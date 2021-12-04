import Plate from "./Plate";

function Bag({plates, showModal}) {

    console.log(plates);

    return (
        <div className="domino__bag">
            {
                plates.map(p => <Plate key={p.id} plate={p} showModal={showModal}></Plate>)
            }
        </div>
    )
}

export default Bag;