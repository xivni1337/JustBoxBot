import React, {useEffect} from "react";
import "./Form.css"
import {useTg} from "../../hooks/useTg";

const Form = () => {
    const [city, setCity] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [subject, setSubject] = React.useState("physical");
    const {tg} = useTg()

    useEffect(() => {
        tg.MainButton.setParams({
            text:'отпавить дынные'
        })
    }, []);

    useEffect(() => {
        if (!city || !country){
            tg.MainButton.hide()
        }
        else{
            tg.MainButton.show()
        }
    }, [country,city]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeSubjects = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className={"form"}>
            <h1>Ввидите ваши данные</h1>
            <input type="text" className={"input"} value={country} onChange={onChangeCountry} placeholder={"Страна"}/>
            <input type="text" className={"input"} value={city} onChange={onChangeCity} placeholder={"оГорот"}/>
            <select className={"select"} value={subject} onChange={onChangeSubjects}>
                <option value={"physical"}>ФизЛИцооо</option>
                <option value={"legal"}>ЮрЛИцооо</option>
            </select>
        </div>
    )
}
export default Form;