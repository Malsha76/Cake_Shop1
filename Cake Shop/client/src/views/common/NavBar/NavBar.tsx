import {Component} from "react";
import logo from '../../../assets/Logo.png'
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <div className={"p-5 flex"}> {}

                <Link to="/">
                <div className="flex">
                    <h1 className={"mt text-2xl text-[#00000] pl-2 mt-2.5 "}>Cuppy Cake</h1>
                    <img className={"h-14 w-14 m-1 pb-1 "} src={logo} alt={''}></img>
                </div>
                </Link>

                
            </div>
        );
    }
    onClick = () => {
        alert("Btn Click")
    }
}

