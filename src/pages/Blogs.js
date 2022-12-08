import React from "react";
import "./pruebas.css"
import { Edit } from "../modules/Edit"
// import { Modal } from "../Modal";
// import { TodoForm } from "../TodoForm";

const Blogs = () => {
    const [equipo, setEquipo] = React.useState([])
    const [bia, setBia] = React.useState([])
    let openModal = false

    React.useEffect(() => {
        obtenerDatos()
        obtenerBia()
    })

    const obtenerDatos = async () => {
        const data = await fetch('http://74.208.233.208:3001/api/v1/m17')
        const users = await data.json()
        // console.log(users.tiempoReal)
        setEquipo(users.tiempoReal)
    }

    const obtenerBia = async () => {
        const data = await fetch('http://74.208.233.208:3001/api/v1/m17/get_bia')
        const users = await data.json()
        // console.log(users.tiempoReal)
        setBia(users.tiempoReal)
    }


    return <div>
        <h1>M17</h1>
        <div className="pruebas">

            {/************************ BIA ************************/}
            <div className="BIA">
                <h2>BIA</h2>
                {
                    <table>
                        <thead>
                            <td>Unidad</td>
                            <td>Status</td>
                            <td>Conteo Total</td>
                            <td>Dinero Total</td>
                            <td className="td6">Fecha de último Registro</td>
                            <td >Modificar</td>
                        </thead>
                        <tbody>
                            {
                                bia.map((item, index) => (
                                    <tr key={index}>
                                        <td className="tdm1">{item.conteo.unidad ? item.conteo.unidad : "❌"}</td>
                                        <td className="tdm1">{item.hearbit ? "✅" : "❌"}</td>
                                        <td className="tdm1">{item.conteo.conteoTotal ? item.conteo.conteoTotal : "❌"}</td>
                                        <td className="tdm1">{item.conteo.dineroTotal ? item.conteo.dineroTotal : "❌"}</td>
                                        <td className="tdm6">{item.conteo.fecha ? item.conteo.fecha : "❌"}</td>
                                        <td><Edit Bia={item.numeroSerie} /></td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                }
            </div>

            {/************************ CONTADORES ************************/}
            <div className="Contadores">
                <h2>Registros Totales: {equipo.length}</h2>
                {
                    <table>
                        <thead>
                            <tr>
                                <td className="tdp1">Unidad</td>
                                <td className="tdp2">Servidor</td>
                                <td className="tdp2">Alcancia</td>
                                <td className="tdp3">Contador Delantero</td>
                                <td className="tdp4">Contador Trasero</td>
                                <td className="tdp5">Fecha de último Registro</td>
                                <td >Modificar</td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                equipo.map((item, index) => (
                                    <tr key={index}>
                                        <td className="tdmp1">{item.unidad ? item.unidad : "❌"}</td>
                                        <td className="tdmp2">{(item.hearbit_servidor || item.hearbit_contador1 || item.hearbit_contador2) ? "✅" : "❌"}</td>
                                        <td className="tdmp3">{item.hearbit_alcancia ? "✅" : "❌"}</td>
                                        <td className="tdmp3">{item.hearbit_contador1 ? "✅" : "❌"}</td>
                                        <td className="tdmp4">{item.hearbit_contador2 ? "✅" : "❌"}</td>
                                        <td className="tdmp5">{item.time ? item.time.substring(3, 25) : "❌"}</td>
                                        <td><Edit Contador={item.busid} /></td>
                                    </tr>

                                ))
                            }


                        </tbody>
                    </table>
                }
            </div>
        </div>

        
    </div>
};

export default Blogs;