import React from "react";

const TableAlcancia = () => {
    const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('http://74.208.233.208:3001/api/v1/camaras/alcancias')
        const users = await data.json()
        // console.log(users.tiempoReal)
        setEquipo(users.tiempoReal)
    }
    
    return (
        <div>      
                {   
                    // <li key={equipo}>{equipo.hola}</li>
                    equipo.map((item,index) => (
                        <li key={index}>
                            {item.unidad}
                        </li>
                    ))
                }
        </div>
    )
}
export  {TableAlcancia};