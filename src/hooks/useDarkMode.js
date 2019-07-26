import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {

const [darkValue, setDarkValue] = useLocalStorage('darkMode')

    useEffect(() => {
        //only need to use value as true is implied
        // in if statement
        if (darkValue) {
            
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    },[darkValue])
    return [darkValue, setDarkValue]
}

export default useDarkMode