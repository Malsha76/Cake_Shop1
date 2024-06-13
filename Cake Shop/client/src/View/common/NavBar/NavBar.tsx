import { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/Logo.png';

export class NavBar extends Component {
    render() {
        return (
            <div className="p-5 flex items-center justify-between bg-gradient-to-r from-white-100 to-pink-100 shadow-md rounded-lg">
                <Link to="/">
                    <div className="flex items-center">
                        <img className="h-20 w-40 mr-3" src={logo} alt="Logo" />
                        <h1 className="text-2xl text-white font-bold">Cake Craze </h1>
                    </div>
                </Link>

                <ul className="flex space-x-8 font-semibold text-black">
                    <li className="hover:text-gray-300">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link to="/product">Products</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link to="/shopping-cart">My Cart</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <button
                    className="border-2 border-purple font-semibold text-black bg-purple-300 hover:bg-purple-400 px-4 py-2 rounded-full transition duration-300">
                    <Link to="/login">Sign in</Link>
                </button>
            </div>
        );
    }
}