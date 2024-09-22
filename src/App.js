import './App.css';
import {useTg} from "./hooks/useTg";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom"
import Productlist from "./components/Productlist/Productlist";
import Form from "./components/Form/Form";
import {useEffect} from "react";

function App() {
    const {tg} = useTg()
    useEffect(()=>{
        tg.ready()
    },[])
    return (
    <div className="app">
        <Header></Header>
        <Routes>
            <Route index element={<Productlist/>}/>
            <Route path={"form"} element={<Form/>}/>
        </Routes>
    </div>
  );
}
export default App;
