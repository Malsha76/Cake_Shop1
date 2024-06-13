import {Component} from "react";
import axios from "axios";
import ricePlate from "../../../assets/cake.jpg";
import {privateDecrypt} from "crypto";


export class Home extends Component {
    private api: any;


    constructor(props: {}| Readonly <{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`})
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        this.fetchData();
        fetchData= async ()=>{
            try {
                this.api.get('/products/all').then((res:{data:any}) =>{
                    const jsonData=res.data;
                    this.setState({data:jsonData});
                }).catch((error:any)=>{
                    console.log("Axios Error");
                }) 
}
