/**  Author :Malsha Ekanayake
 * */
import React from 'react';
import Header from "./components/layout/header";
import Home from "./views/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/layout/footer";

interface Props {
}

interface State {
    count: number
}

class App extends React.Component<Props, State> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/AboutPage"} element={<AboutPage/>}/>
                        <Route path={"/signin"} element={<Login/>}/>
                        <Route path={"/signup"} element={<Signup/>}/>
                        <Route path={"/menu"} element={<Menu/>}/>
                        <Route path={"/review"} element={<Review/>}/>
                        <Route path={"/order"} element={<Order/>}/>

                    </Routes>

                </BrowserRouter>
            </div>
        );
    }

}

export default App
