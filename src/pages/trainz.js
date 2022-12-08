import React, { useState } from "react";
import "./trainz_css.css"
import { Edit } from "../modules/Edit"


const Trainz = () => {
    const [bia, setBia] = React.useState([])
    const [alcancia, setAlcancia] = React.useState([])
    const [contadores, setContadores] = React.useState([])
    const [gps, setGps] = React.useState([])
    const [tabla, setTabla] = useState("Bia")

    let openModal = false

    React.useEffect(() => {
        obtenerBia()
    })

    const obtenerBia = async () => {
        try {
            // http://trainz-api.accesa.me/tables/find-data?clase=contador&numero_serial=CP:94:B5:55:16:75:68:A
            const data_bia = await fetch('http://trainz-api.accesa.me/tables/find-data?clase=bia')            
            console.log(data_bia);
            
        } catch (error) {
            console.log(error);
        }
        // const data = await fetch('http://74.208.233.208:3001/api/v1/m17/get_bia')
        // const users = await data.json()
        // console.log(users.tiempoReal)
        // setBia(users.tiempoReal)
    }


    // -----------------------------------------------------------------------------------------------------------
    return <>
        <section className="TrainZ">
            <div className="Titulo">
                <h1>Train-Z </h1>
                <div className="esfera"> </div>
            </div>
            <br />
            {/* ----------------------------------------------------------------------------------------- */}
            {tabla == "Bia" ?
                <div className="main">
                    <div className="titulos">
                        <h1 onClick={() => setTabla("Bia")}>Bia</h1>
                        <h2 onClick={() => setTabla("Contadores")}>Contadores</h2>
                        <h2 onClick={() => setTabla("Gps")}>Gps</h2>
                        <h2 onClick={() => setTabla("Alcancia")}>Alcancia</h2>
                    </div>
                    <div className="tabla_contain">
                        <thead>
                            <td>Unidad</td>
                            <td>Status</td>
                            <td>Conteo Total</td>
                            <td>Dinero Total</td>
                            <td>Fecha de último Registro</td>
                            <td>Modificar</td>
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
                    </div>
                </div>
                : ""}
            {/* ----------------------------------------------------------------------------------------- */}
            {tabla == "Contadores" ?
                <div className="main">
                    <div className="titulos">
                        <h2 onClick={() => setTabla("Bia")}>Bia</h2>
                        <h1 onClick={() => setTabla("Contadores")}>Contadores</h1>
                        <h2 onClick={() => setTabla("Gps")}>Gps</h2>
                        <h2 onClick={() => setTabla("Alcancia")}>Alcancia</h2>
                    </div>
                    <div className="tabla_contain">
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
                    </div>
                </div>
                : ""}
            {/* ----------------------------------------------------------------------------------------- */}
            {tabla == "Gps" ?
                <div className="main">
                    <div className="titulos">
                        <h2 onClick={() => setTabla("Bia")}>Bia</h2>
                        <h2 onClick={() => setTabla("Contadores")}>Contadores</h2>
                        <h1 onClick={() => setTabla("Gps")}>Gps</h1>
                        <h2 onClick={() => setTabla("Alcancia")}>Alcancia</h2>
                    </div>
                    <div className="tabla_contain">
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
                    </div>
                </div>
                : ""}

            {/* ----------------------------------------------------------------------------------------- */}
            {tabla == "Alcancia" ?
                <div className="main">
                    <div className="titulos">
                        <h2 onClick={() => setTabla("Bia")}>Bia</h2>
                        <h2 onClick={() => setTabla("Contadores")}>Contadores</h2>
                        <h2 onClick={() => setTabla("Gps")}>Gps</h2>
                        <h1 onClick={() => setTabla("Alcancia")}>Alcancia</h1>
                    </div>
                    <div className="tabla_contain">
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
                    </div>
                </div>
                : ""}
            <br />
            <br />
            <br />
            <footer className="footer">
                <h4>Create by</h4>
                <a href="http://accesa.me/"><h3>Accesa</h3></a>
                <p>&&</p>
                <a href="http://romer-dev.com:3000/"><h3>FranckRomer</h3></a>

            </footer>
        </section>
    </>;
};

export default Trainz;