import React, {useState, useEffect} from 'react';
import axios from "axios";

const SearchBar=({setImages})=>{
    const [searchTerm, setSearchTerm] = useState("");
    const [previousSearchTerm, setPreviousSearchTerm] = useState("");

    useEffect(()=>{
        fetchImage() 
    },[]
    )

    const fetchImage = () =>{

        if(searchTerm === previousSearchTerm) return
        
        axios.get("https://api.unsplash.com/search/photos", {
            params:{
                "client_id" : "ObiSKGRXGONBAF0Bl4E9w7w_QKcPixEB-lq_6KNx54o",
                query : searchTerm || "nature"
            }
        })
        .then((response)=> {
        setImages(response.data.results)
        setPreviousSearchTerm(searchTerm);
        })
        .catch((error)=>{console.log(error)})
    }

    return(
        <div>
            <input type='text' placeholder='Search for an image'
            value ={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <button onClick={fetchImage}>Search</button>
        </div>
    )
}

export default SearchBar;