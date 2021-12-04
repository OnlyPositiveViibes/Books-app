import Filter from "./Filter";
import Sort from "./Sort";
function Header({clientSort, clientFilter, serverSort, plates}) {

    return (
        <div className="domino__header">
            <h1>Domino</h1>
            <Sort clientSort={clientSort} serverSort={serverSort} plates={plates}></Sort>
            <Filter clientFilter={clientFilter} plates={plates} clientFilter={clientFilter}></Filter>
        </div>
    )
}

export default Header;