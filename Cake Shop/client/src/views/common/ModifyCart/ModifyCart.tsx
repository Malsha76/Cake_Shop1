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
}
    
      
  