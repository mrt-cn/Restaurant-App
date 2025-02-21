import { use, useEffect, useState } from "react";
import yelp from "../api/yelp";


export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async(searchTerm)=>{
        try {
            const response = await yelp.get('/search', {
                params: {
                    location: "İstanbul",
                    term: searchTerm,
                    limit: 50, 
                },
            });   
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage("Baglanti Hatasi");
        }
        
    };

    useEffect(()=>{
        searchApi('Toast');
    }, []);
    return [searchApi, results, errorMessage];
};