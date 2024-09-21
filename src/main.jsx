import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


export const Context = createContext({isAuthenticated:false});

const AppWrapper = () =>{
  const [isAuthenticated,setisAuthenticated] = useState(false);
  const [user,setUser] = useState({});
  return(
    <Context.Provider value={{isAuthenticated,setisAuthenticated,}}>
      <App></App>
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
