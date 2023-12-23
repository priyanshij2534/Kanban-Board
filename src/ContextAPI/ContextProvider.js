import React, {useState, useEffect} from 'react';
import Context from './Context';

const ContextProvider = ({children})=>{

    // =====================Context api for THEME=====================
    const [theme, setTheme] = useState('light');

    const toggleTheme = ()=>{
        if(theme==='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
    
    // ==========Context api for FETCHING DATA FROM API==========
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async()=>{
        let url = "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers";
        let data = await fetch(url);
        let parsedData = await data.json();
        setTickets(parsedData.tickets);
        setUsers(parsedData.users);
      };
      fetchData();
    }, [])
    


    return(
        <Context.Provider value={{theme, setTheme, toggleTheme, tickets, setTickets, users, setUsers}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;