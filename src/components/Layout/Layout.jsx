import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer.jsx"
import Header from "../Header/Header.jsx"

const Layout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export { Layout }