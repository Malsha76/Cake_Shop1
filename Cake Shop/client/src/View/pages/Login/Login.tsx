import {Component} from "react";
export class Login extends Component {
    render() {
        return (
            <>
               
                <div className={"flex h-screen bg-[#444544]"}>
                    <div className={"h-auto mt-4 mb-4 pl-9 mx-auto border-white border-[0.5] bg-white"}>
                        <h2 className={"pt-2 pb-2 text-3xl mr-6 text-center decoration-2 mt-2 mb-5"}>Sing In</h2>
                        <form className={"h-auto p-2 justify-center mr-10"}>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold">E mail: </label>
                                <input className="float-right border-[1px] border-pink-400" type={"email"}/>
                            </div>

                            <div className="pb-2">
                                <label className="text-[10px] pr-2 font-bold">Password: </label>
                                <input className="float-right border-[1px] border-pink-400" type={"password"}/>
                            </div>

                            <div className={"mt-2 mt-5"}>
                                <button className="mt-2 w-full bg-pink-300 text-[15px] p-[6px] hover:text-white">Sing In</button>
                            </div>

                        </form>

                    </div>

                </div>
            </>
        );
    }
}