import { Outlet } from "react-router-dom"
import MenuButtons from "../MenuButtons/MenuButtons";

function MainRoutingContainer({show}) {
    return (
        <div>
            <Outlet />
            <MenuButtons show={show} />
        </div>
    )
}

export default MainRoutingContainer;