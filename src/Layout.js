import Nav from "./components/nav/Nav";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <main>
                <header>
                    <Nav/>
                </header>
            </main>
            <Outlet />
        </>
    )
}
