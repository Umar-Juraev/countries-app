import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext()
export const Store = () => useContext(ContextProvider)

const Context = ({ children }) => {
    const [countries, setCountries] = useState({
        loading: true,
        data: [],
        error: null
    })

    const fetchCountries = () => {
        axios.get(`https://restcountries.com/v3.1/all`)
            .then(res => setCountries({ ...countries, data: res.data, loading: false }))
            .catch(err => setCountries({ ...countries, loading: false, error: err })
            )
    }
    useEffect(() => {
        fetchCountries()
    }, [])

    return <ContextProvider.Provider value={{ countries }}>
        {children}
    </ContextProvider.Provider>
}

export default Context