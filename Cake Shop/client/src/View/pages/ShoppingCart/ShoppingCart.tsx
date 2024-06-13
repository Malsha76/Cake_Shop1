import {Component} from "react";
import {CartItem} from "../../../model/CartItem";
import cake from "../../../assets/cake.jpg";
import bag from "../../../assets/cake_background.jpg";
interface ShoppingCartProps {
    itemsList: CartItem[];
}
export class ShoppingCart
    extends Component<ShoppingCartProps> {
    render() {


        return (

            <div className="flex justify-center
                  items-center min-h-fit mt-16 mb-52  " >
                <table className="w-full mx-6">
                    <tr className="bg-gray-400">
                        <th className="text-[20px]
                        font-normal border-black
                        border-[0.5px]  px-1 bg-pink-200 " >Id</th>
                        <th className="text-[20px] font-normal border-black border-[0.5px] px-1 bg-pink-200">Name</th>
                        <th className="text-[20px] font-normal border-black border-[0.5px] px-1 bg-pink-200">UnitPrice</th>
                        <th className="text-[20px] font-normal border-black border-[0.5px] px-1 bg-pink-200">Quantity</th>
                        <th className="text-[20px] font-normal border-black border-[0.5px] px-1 bg-pink-200">Total Price</th>
                    </tr>

                    {
                        this.props.itemsList.length === 0 ?
                            <tr>
                                <td colSpan={5}
                                    className="border-black
                                    border-[0.5px] px-1">
                                    <p className="text-center
                                    text-[10px]">No Items to Display!
                                    </p>
                                </td>
                            </tr>
                            : this.props.itemsList.map((item) => (
                                <tr className="border-black border-[0.5px] px-1">
                                    <td className="text-[15px]
                                                   border-black
                                                   border-[0.5px] px-1">
                                        {item.product.id}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{item.product.name}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{item.product.price + ' ' + item.product.currency}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{item.itemCount}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{(item.product.price * item.itemCount) + ' ' + item.product.currency}</td>
                                </tr>
                            ))
                    }
                </table>
            </div>
        );
        return (
            <div style={{
                backgroundImage: `url("../../../images/food-background-1.jpg")`
            }}>
                Hello World
            </div>
        );

    }
}