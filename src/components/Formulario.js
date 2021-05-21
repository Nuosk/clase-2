import React, {useState } from 'react'

export default function Formulario() {
    const[numero, setNumero] = useState(0)

    const [operacion, setOperacion]=useState({
        suma:0,
        resta:0,
        producto:0,
        division:0

    })

    const handleInputChange = (e) =>{
        setOperacion({
            ...operacion, [e.target.name] : e.target.value
        })
    }

    const resolver = (e) =>{
        e.preventDefault()
        if(e.target.id==="suma"){
            setNumero(numero+Number(operacion.suma))
        }else if (e.target.id==="resta"){
            setNumero(numero-Number(operacion.resta))
        }else if (e.target.id==="producto"){
            setNumero(numero*Number(operacion.producto))
        }else if (e.target.id==="division"){
            setNumero(numero/Number(operacion.division))
        }
    }

    return (
        <>
        <div className="formu">
            <div className="ancho">
                <h1>Total= {numero}</h1>
                
        
                

            </div>

            <div className="opcion">
            
                 <form onSubmit={resolver} id="suma">
                    <h3>Suma</h3>
                    <input type="text" name="suma" onChange={handleInputChange} value={operacion.suma}></input>

                 </form>
                 <form onSubmit={resolver} id="resta">
                    <h3>Resta</h3>
                    <input type="text" name="resta" onChange={handleInputChange} value={operacion.resta}></input>

                 </form>
                 <form onSubmit={resolver} id="producto">
                    <h3>Multiplicar</h3>
                    <input type="text" name="producto" onChange={handleInputChange} value={operacion.producto}></input>

                 </form>
                 <form onSubmit={resolver} id="division">
                    <h3>Dividir</h3>
                    <input type="text" name="division" onChange={handleInputChange} value={operacion.division}></input>

                 </form>
            
            </div>

            
        </div>
        </>
    )
}