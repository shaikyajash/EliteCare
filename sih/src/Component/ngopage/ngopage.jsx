import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { endPoints, axiosInstance} from "../../services/api";
import Loading from "../loading/loading";
import { useNavigate } from 'react-router-dom';

export default function NGOPage(){

    const [searchText, setSearchText] = useState("");
    const [ngos, setNGOs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    async function handleFormSubmit(event){
        event.preventDefault();
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);
        const response = await axiosInstance.get(endPoints.FETCHNGOBYDISEASE, searchText);
        setNGOs(response.data);
    }

    function handleNGOClick(ngo){
        navigate(`/ngo/${ngo.name}`, {state: {ngo}});
    }

    return(
        <div className="bg-gray-100 min-h-screen w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
                <form className="bg-white p-4 rounded-lg shadow-green-500 shadow flex flex-row items-center justify-center" onSubmit={handleFormSubmit}>
                    <input onChange={(e) => setSearchText(e.target.value)} value={searchText} type="text" placeholder="Search NGO by disease" className="w-full text-center border-b-2 pb-1 border-gray-300 focus:border-green-500 rounded-lg mx-1 outline-none"/>
                    <button type="submit" className="border-2 px-4 py-1 rounded-xl border-green-500 font-semibold hover:bg-green-500 hover:text-white mx-1">List</button>
                </form>
                <div className="bg-white p-4 rounded-lg shadow-green-500 shadow flex flex-col items-center justify-center mt-6">
                    {isLoading ? <Loading/> : 
                        <div className="flex flex-col items-center justify-center w-full">
                            {ngos.map((ngo, index)=>{
                                return(
                                    <div key={index} className="flex flex-col items-left w-full cursor-pointer border-b-2 border-gray-200 py-4" onClick={()=>{
                                        handleNGOClick(ngo);
                                    }}>
                                        <h2 className="text-xl font-bold">{ngo.name}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    };
                </div>
            </div>
        </div>
    )
}