import { Outlet } from "react-router-dom"
import MenuButtons from "../MenuButtons/MenuButtons";

function MainRoutingContainer() {
    
    return (
        <div>
            <Outlet />
            <MenuButtons />
        </div>
    )
}

export default MainRoutingContainer;