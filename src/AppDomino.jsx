import axios from "axios";
import { useEffect, useState } from "react";
import Bag from "./Components/Domino/Bag";
import Create from "./Components/Domino/Create";
import Edit from "./Components/Domino/Edit";
import Header from "./Components/Domino/Header";

function App() {

    const [plates, setPlates] = useState([]);
    const [updated, setUpdated] = useState(Date.now());
    const [showEdit, setShowEdit] = useState({});
    const [platesMaster, setPlatesMaster] = useState([]);

    ////////SORTS and FILTERS///////

    const clientSort = plates => {
        setPlates(plates);
    }

    const clientFilter = plates => {
        setPlates(plates);
    }

    const serverSort = sort => {
        axios.get('http://localhost:3003/dominos/sort/' + sort)
        .then(res => {
            savePlates(res.data.dominos.map(p => ({id: p.id, left:p.left_side, right: p.right_side})));
        })
    }

    const serverFilter = filter => {
        axios.get('http://localhost:3003/dominos/filter/' + filter)
        .then(res => {
            setPlates(res.data.dominos.map(p => ({id: p.id, left:p.left_side, right: p.right_side})));
        })
    }



    ///////////MOdal////////////////

    const hideModal = () => {
        setShowEdit({});
    }

    const showModal = plate => {
        setShowEdit(plate);
    }



    ///////////CRUD////////////////

    const createPlate = plate => {
        axios.post('http://localhost:3003/dominos/add', plate)
        .then(res => {
            setUpdated(Date.now());
            //
        })
    }

    const editPlate = plate => {
        hideModal();
        axios.put('http://localhost:3003/dominos/update/'+plate.id, plate)
        .then(res => {
            setUpdated(Date.now());
            //
        })
    }

    const removePlate = plate => {
        hideModal();
        axios.delete('http://localhost:3003/dominos/delete/'+plate.id)
        .then(res => {
            setUpdated(Date.now());
            //
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3003/dominos')
        .then(res => {
            savePlates(res.data.dominos.map(p => ({id: p.id, left:p.left_side, right: p.right_side})));
        })
    }, [updated]);

    const savePlates = plates => {
        setPlates(plates);
        setPlatesMaster(plates);
    }


    return (
        <div className="App col top domino">
            <div className="domino__wrap">
            <Header clientFilter={clientFilter} serverFilter={serverFilter} clientSort={clientSort} serverSort={serverSort} plates={platesMaster}></Header>
            <Create createPlate={createPlate}></Create>
            <Bag plates={plates} showModal={showModal}></Bag>
            <Edit removePlate={removePlate} showEdit={showEdit} hideModal={hideModal} editPlate={editPlate}></Edit>
            </div>
        </div>
    )
}

export default App;