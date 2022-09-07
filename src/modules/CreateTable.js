import React from "react";

const CreateTable = () => {
    const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    })

    const obtenerDatos = async () => {
        const data = await fetch('http://74.208.233.208:3001/api/v1/camaras')
        const users = await data.json()
        console.log(users.tiempoReal)
        setEquipo(users.tiempoReal)
    }

    return (
        <div>
            {
                <table>
                    <thead>
                        <tr>
                            <td>Unidad</td>
                            <td>Terid</td>
                            <td>Servidor</td>
                            <td>Alcancia</td>
                            <td>Contador1</td>
                            <td>Contador2</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                equipo.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.unidad ? item.unidad: "❌"}</td>
                                        <td>{item.terid}</td>
                                        <td>{item.key_servidor ? "✅" : "❌"}</td>
                                        <td>{item.key_alcancia ? "✅" : "❌"}</td>
                                        <td>{item.key_contador1 ? "✅" : "❌"}</td>
                                        <td>{item.key_contador2 ? "✅" : "❌"}</td>

                                    </tr>
                                ))
                            }
                            
                        
                    </tbody>
                </table>
            }
        </div>

    )
}
export { CreateTable };
