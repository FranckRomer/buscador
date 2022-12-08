import React from "react";
import './table.css';

let cheked = false
const CreateTable = () => {

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    })

    const obtenerDatos = async () => {
        if (!cheked) {
            const data = await fetch('http://74.208.233.208:3001/api/v1/camaras')
            const users = await data.json()
            console.log(users.tiempoReal)

            // console.log(users.tiempoReal.time.substring(3, 20));

            setEquipo(users.tiempoReal)
        } else {
            // console.log("no hay datos")
            const data = await fetch('http://74.208.233.208:3001/api/v1/camaras/hoy')
            const users = await data.json()
            // console.log(users.tiempoReal)
            setEquipo(users.tiempoReal)
        }



    }

    const handleChange = () => {
        console.log('The checkbox was toggled')
        cheked = !cheked
        console.log(cheked)
        // setChecked(!Swtch); togglePreference(animal);

    };

    return (
        <div>
            {/* <div> <span>Datos de HOY</span> <input type="checkbox" onChange={handleChange} /> </div>     */}
            <h2>Registros Totales: {equipo.length}</h2>
            {

                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <td className="td1">Unidad</td>
                                <td className="td2">Terid</td>
                                <td className="td3">Alcancia</td>
                                <td className="td4">Contador Delantero</td>
                                <td className="td5">Contador Trasero</td>
                                <td className="td6">Status Servidor</td>
                                <td className="td7">Status Alcancia</td>
                                <td className="td8">Status Delantero</td>
                                <td className="td9">Status Trasero</td>                            
                                <td className="td10">Fecha de último Registro</td>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {
                                equipo.map((item, index) => (
                                    <tr key={index}>
                                        <td className="tdm1">{item.unidad ? item.unidad : "❌"}</td>
                                        <td className="tdm2">{item.terid}</td>
                                        <td className="tdm3">{item.key_alcancia ?  "✅" : "❌"}</td>
                                        <td className="tdm4">{item.key_contador1 ? "✅" : "❌"}</td>
                                        <td className="tdm5">{item.key_contador2 ? "✅" : "❌"}</td>
                    
                                        <td className="tdm6">{item.hearbit_servidor ?  "🆗" : "⛔"}</td>
                                        <td className="tdm7">{item.hearbit_alcancia ?  "🆗" : "⛔"}</td>
                                        <td className="tdm8">{item.hearbit_contador1 ? "🆗" : "⛔"}</td>                                        
                                        <td className="tdm9">{item.hearbit_contador2 ? "🆗" : "⛔"}</td>
                                        
                    
                                        <td className="tdm10">{item.time ? item.time.substring(3, 25) : "❌"}</td>
                    
                                    </tr>
                                ))
                            }
                    
                    
                        </tbody>
                    </table>
                </div>
            }
        </div>

    )
}
export { CreateTable };
