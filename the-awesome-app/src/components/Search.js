import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import withBorder from '../hoc/withBorder';

// state = {
//     searchKey: ""
// }

// const array = useState(""); // returned array [value, function]
// const searchKey = array[0];
// const setSearchKey = array[1];

export function Search(){

    //console.log("invoking search...");
    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);
    const counter = useRef(0);
    const searchKeyRef = useRef(null);
    
    //useEffect(callback, [dependencies]);
    useEffect(() => {

        console.log("useEffect: equivalent to the componentDidMount: invoked only once");
        searchKeyRef.current.focus();

        return ()=> {

            console.log("useEffect: equivalent to the componentWillUnmount: invoked only once")
        }
    }, []);

    useEffect(() => {

        console.log("useEffect: equivalent to the componentDidUpdate: invoked only whenever the dependency(results) changes")

    }, [results]);

    function change(evt){

        setSearchKey(evt.target.value);

    }
    async function search(){
        
        counter.current++;
        console.log("counter", counter.current);

        if(searchKey){
            
            const url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchKey;
            try {
                const response = await axios.get(url);
                const data = response.data[1];
                setResults(data);

            } catch (error) {
                
            }

        }
        
        
    }
    return (
        <div>
            <h3>Wiki Search</h3>
            <br/>
            <div className='alert alert-warning'>
                Search Count: {counter}
            </div>

            <div>
                <input className='form-control' ref={searchKeyRef}
                        type="search" placeholder='Search' value={searchKey} onChange={change}/>
            </div>
            <br/>
            {searchKey ? <p className='alert alert-success'>Searching for {searchKey}</p>: null}
            <br/>
            <button className='btn btn-primary' onClick={search}>Search</button>

            <div>
                {results.map((item, index) => {

                    return <p key={index}>{item}</p>

                })}
            </div>
        </div>
    )
}

export default withBorder(Search);

// export default {
//     Search: Search,
//     SearchWithBorder: withBorder(Search)
// }