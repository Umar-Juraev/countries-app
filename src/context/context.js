import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const ContextProvider = createContext()
export const Store = () => useContext(ContextProvider)

const Context = ({ children }) => {
    const [country, setCountry] = useState({})
    const ref = useRef('')
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
    const searchValue = () => {
        const searchText = ref.current?.input?.defaultValue
        if (searchText.trim()) {
            (async function getSearchData() {
                const res = await axios.get(`https://restcountries.com/v3.1/name/${searchText}`)
                setCountries({ ...countries, loading: false, data: res.data })
            })()
        }
        else {
            fetchCountries()
        }
    }
    const sortedData = () => {
        const sorted = countries.data.sort((a, b) => a.name?.common < b.name?.common ? -1 : 1)
        setCountries({ ...countries, loading: false, data: sorted })
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return <ContextProvider.Provider value={{
        countries,
        country,
        ref,
        setCountry,
        searchValue,
        sortedData
    }}>
        {children}
    </ContextProvider.Provider>
}

export default Context