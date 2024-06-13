import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {About} from "../../pages/about/About";
import {Contact} from "../../pages/contact/Contact";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";
import ricePlate from '../../../images/RicePlate.webp'
import {Product} from "../Product/Product";

export class MainContent extends Component {
    render() {
        return (
            <>
            <div className={" mx-auto "}>
            <Routes>
                    <Route path='/'  Component={Home}></Route>
                    <Route path='/about' Component={About}></Route>
                    <Route path="/shopping-cart"
                           element={<ShoppingCart
                               itemsList={ModifyCart.itemsList}/>
                           }>
                    </Route>
                    <Route path='/contact' Component={Contact}></Route>

                </Routes>
            </div>
            </>
        );
    }
}