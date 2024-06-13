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
                        
                        </footer>
            </>
        );
    }
    }                     