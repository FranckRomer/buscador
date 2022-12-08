import React from "react";
import { json } from "react-router-dom";
// import { TodoContext } from "../../ToDoContext";
import "./form.css"

function TodoForm(props) {
    const [newTodoValue, setNewTodoValues] = React.useState('')

    React.useEffect(() => {
        obtenerDatosFimware()
        // changeDataFirmware()
    }, [])

    const obtenerDatosFimware = async () => {
        console.log(props.numeroSerial)
        console.log(props.busid)
        const data = await fetch('http://74.208.233.208:3001/api/v1/m17/get_datos_firmware',{
            method: "POST",
            body:JSON.stringify({
                numeroSerial: props.numeroSerial,
                busid: props.Busid
            })
        })
        const users = await data.json()
        console.log(users.tiempoReal)
        let jsonString = JSON.stringify(users.tiempoReal[0],null, 4)
        setNewTodoValues(jsonString)
    }

    const changeDataFirmware = async () => {
        const data = await fetch('http://74.208.233.208:3001/api/v1/m17/changeDataFirmware',{
            method: "POST",
            body: newTodoValue
        })
        const users = await data.json()
        setNewTodoValues('')
        props.setOpenModal(false)
    }

    ////////////////////////////////////////////////////////////////////// 
    const onChange = (event) =>{
        //
        console.log(event.target.value)
        setNewTodoValues(event.target.value)
    }
    const onCancel = () =>{
        //
        props.setOpenModal(false)
    }
    const onSubmit = (event) =>{
        //
        event.preventDefault()
        console.log(newTodoValue)
        // addTodo(newTodoValue)
        changeDataFirmware()
        // props.setOpenModal(false)
        // setNewTodoValues('')
    }

    ////////////////////////////////////////////
    return(
        <form onSubmit={onSubmit}>
            <label>Cambiar Datos de BIA</label>
            <textarea 
                placeholder="Espere en la carga de datos, si los datos no llegan reinicie con F5"
                value={newTodoValue}
                onChange = {onChange}
                ></textarea>
            <div>
                <button className="boton_Cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="boton_Add" type="submit" >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}