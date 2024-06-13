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

}
    
      
  