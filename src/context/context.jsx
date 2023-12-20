import { createContext, useEffect, useState, useContext} from "react";
import axios from "axios";





const AppContext = createContext();

 export const UseGlobalContext = () => useContext(AppContext);


const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [foods, setFoods] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const finalUrl =`${url}${searchValue}`

const fetchData = async () => {
  setIsLoading(true)
  const {data: {meals}} = await axios(finalUrl)
  if (meals) {
    setFoods(meals)
  } else{
    setFoods([]);
  }

  setIsLoading(false);



};

useEffect(() => {
    const timeout = setTimeout(()=> {
        fetchData();
    },3000);

    return () => clearTimeout(timeout);
    
}, [searchValue]);


return <AppContext.Provider value={{isLoading, searchValue, setSearchValue, foods}}>

    {children}

</AppContext.Provider>

}

export default AppProvider;