import {useState} from 'react';

const useLocalStorage = (key, 
initialValue) => {
    //set up state
    const [storedValue, setStoredValue] = 
    useState(() => {
    //get local storage by key
        const item = window.localStorage.getItem(key)
        // return stored json
        //?= ternary operator
        //cont: if item is tru (?run JSON.parse) 
        //if not run(initialValue)
        return item ? JSON.parse(item) : 
        initialValue
        //line 15 runs first then calls the key value 
        //based on true fals sttment
    });

    const setValue = value => {
        //Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, 
        JSON.stringify(value));
        
    };
    
    return [storedValue, setValue];
};

export default useLocalStorage