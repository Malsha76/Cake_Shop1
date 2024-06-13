import {Component} from "react";
import {About} from "../about/About";

export class LatestFoodMenu extends Component {
    render() {
        return (
            <>
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</p>
                            <div className="mt-4">
                                <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem sapiente beatae explicabo soluta quos hic ipsa officiis fugiat porro blanditiis consectetur a ab ipsam, molestias qui repudiandae praesentium obcaecati.</span>
                            </div>
                        </div>
                </div>
            </>
        );
    }
}