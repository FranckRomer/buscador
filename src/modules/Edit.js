import React from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";


function Edit(props) {
    const [openModal, setOpenModal] = React.useState(false)
    
    const cambiarDatos = () => {

        console.log('The checkbox was toggled')
        console.log(props.Item)
        console.log(props.Bia)
        console.log(props.Contador)
        let foo = prompt('CONTRASEÑA: ', "contraseña solo lo saben los adminisrtadores");
        if (foo == "admin123") {
            setOpenModal(true)
        } else {
            setOpenModal(false)
        }
       
    };

    return(
        <>
            <button onClick={cambiarDatos}>☰</button>
            {!!openModal && (
            <Modal>
                <TodoForm 
                    setOpenModal = {setOpenModal}
                    numeroSerial = {props.Bia}
                    Busid =  {props.Contador}
                ></TodoForm>
            </Modal>
        )}
        </>
    )    
}

export {Edit}
