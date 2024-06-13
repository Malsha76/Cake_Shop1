import {Component} from "react";
import logo from '../../../assets/img_1.png'
export class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-gray-500">
                    <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6  font-semibold text-2xl text-gray-400 uppercase">Company</h2>
                            <ul className="text-gray-300">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Menu</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6  text-2xl font-semibold text-gray-400 uppercase">Legal</h2>
                            <ul className="text-gray-300">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6  text-2xl font-semibold text-gray-400 uppercase">Contact</h2>
                            <ul className="text-gray-300">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">+94 764 658 101</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">tharu@gmail.com</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">No: 4/2, School Lane, Kahawa.</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6  text-2xl font-semibold text-gray-400 uppercase">Subscribe Our Newsletter</h2>
                            <div className="flex rounded-lg shadow-sm">

                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg
                                 focus:ring-purple-400 focus:border-purple-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-400 dark:focus:border-purple-300"
                                       placeholder="Enter Your Email" required/>
                                <button type="button"
                                        className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-r-lg border border-transparent
                                         bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-center">
                <span className="text-sm text-gray-300 sm:text-center">© 2024 Cake Craze. All Rights Reserved.
                </span>
                    </div>

                </footer>
            </>
        );
    }
}

