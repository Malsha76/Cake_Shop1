import {Component} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
}

export class Product extends Component<ProductProps, ProductState> {

    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    render() {

        const {data}=this.props;
        console.log(data.image)
        const image = require('../../../assets/product/' + data.image)
        
        return (
            <>
              { <div className={'relative px-4 py-2 justify-center items-center  bg-white mr-2 mb-2 border-gray-800'}>
                    <div>
                        <img src={image} alt=""/>
                    </div>

                    <div className={'flex'}>

                        <div>
                            <h3 className={'text-red-700 text-[#000000] text-[18px] pl-2 pr-4 hover:bg-green-200 '}>{data.name}</h3>
                        </div>  

</>
);
              }