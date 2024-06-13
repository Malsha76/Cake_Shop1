import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps {data: any}
interface ModifyCartState {itemCount: number}
export class ModifyCart
    extends Component<ModifyCartProps,
                      ModifyCartState> {

    public static itemsList:CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        const  {itemCount} = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList
                .find(item =>
                    item.product.id ===
                    this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                )
            }
        }
        console.log(ModifyCart.itemsList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount} = this.state;
        let item =  ModifyCart
            .itemsList
            .find(item =>
                item.product.id ===
                this.props.data.product.id);
      
        let index = ModifyCart.itemsList.indexOf(item);
        ModifyCart.itemsList.splice(index, 1);
        ModifyCart.itemsList.push(
            {product: this.props.data.product,
                itemCount: itemCount}
        );

        console.log(ModifyCart.itemsList)
    }

    render() {

        let {itemCount} = this.state;

        const onDecreaseItemCount = ()=> {
            if (itemCount > 1) {
                this.setState({itemCount: --itemCount})
            } else {
                alert("Item count can't be less than 1");
            }
        }
        const onIncreaseItemCount = () => {
            this.setState({itemCount: ++itemCount})
        }

        return (
            <div className="w-full mt-1 p-[2.4px]
                                            bg-pink-400 text-[20px]
                                            text-center">
                <button className="float-left text-[20px]
                                        bg-pink-300 rounded-lg h-8 w-8"
                                  onClick={onDecreaseItemCount}>-</button>
                <small className="text-[20px]">{itemCount}</small>
                <button className="float-right text-[20px]
                                        bg-pink-300 rounded-lg h-8 w-8"
                                  onClick={onIncreaseItemCount}>+</button>
            </div>
        );
    }
}