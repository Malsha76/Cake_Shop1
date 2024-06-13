// @ts-ignore

import {Component} from "react";
import {Product} from '../../common/Product/Product';
import axios from "axios";
import cake from "../../../assets/cake.jpg";
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
          
    }

    fetchData= async ()=>{
        try {
            this.api.get('/products/all').then((res:{data:any}) =>{
                const jsonData=res.data;
                this.setState({data:jsonData});
            }).catch((error:any)=>{
                console.log("Axios Error");
            })

        }catch (error){
            console.log("Data Not Found")
        }
    }

  // @ts-ignore
    render() {

        // @ts-ignore
        const {data}=this.state;
        return (
            <>
                <div className='cake flex justify-center items-center gap-44 bg-pink-100 from-fuchsia-200'>
                    <div className={'pl-32'}>
                        <h4 className='text-2xl font-bold'>WELCOME TO</h4>
                        {}
                        <h1 className='text-8xl font-bold'> Cake Craze</h1>
                        {}
                        <h6 className={''}>where every slice is a piece of heaven! </h6>
                        <button className='bg-red-100 rounded-full p-2 text-2xl mt-20' onClick={this.latestMenuList}>Latest Collection</button>
                    </div>
                    <div className={''}>
                        <img className='scale-95 ' src={cake} alt='cake'/>
                    </div>

                </div>

                <div className={'flex'}>
                    <div className={'flex flex-wrap justify-center items-center mx-auto mt-5 mb-5 shadow-md '}>

                        {
                           data.map((product:any)=>( 
                               <Product key={product.id} data={product}/>
                           ) )
                        }
                    </div>
                </div>
            </>
        );


    }

    private latestMenuList = () => {
        this.setState({isActive:  !this.state}, ()=>{
        })
    }

}
