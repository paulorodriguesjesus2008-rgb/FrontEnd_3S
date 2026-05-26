import { Link } from "react-router-dom"
import "./header.css"

export default function Header(){
    return(
        <header className="header">

            <h1 className="logo">
                Mercado React
            </h1>

            <nav className="navbar">
                <Link to="/">Home</Link> {" | "}

                <Link to="/quemsomos">
                    Quem Somos
                </Link> {" | "}

                <Link to="/cadfrutas">
                    Frutas
                </Link> {" | "}

                <Link to="/produtos">
                    Produtos
                </Link> 
            </nav>

        </header>
    )
}
