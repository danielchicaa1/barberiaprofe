import { useState,useEffect } from "react"
export function Agenda() {

    const[nombre, setNombre]=useState('')
    const[correo, setCorreo]=useState('')
    const[telefono, setTelefono]=useState('')
    const[hora, setHora]=useState('')
    const[dia, setDia]=useState('')

    const [errores, setErroress] = useState({})
    const [data, setData] = useState({})

    useEffect(() => {
        console.log(errores)
        console.log(Object.keys(errores))
        if(Object.keys(errores).length>0){
            console.log("lanzo el error")
        }else{
            console.log("voy al servicio")
        }
      }, [errores]);

    function validarFormulario(evento){

        evento.preventDefault()

        let listaErrores = {};
        if(!nombre){
            listaErrores.nombre="El nombre es requerido"
        }
        if(!correo){
            listaErrores.correo="El correo es requerido"
        }
        if(!telefono){
            listaErrores.telefono="El telefono es requerido"
        }
        if(!dia){
            listaErrores.dia="El dia es requerido"
        }
        if (hora === 'DEFAULT') {
            listaErrores.hora = 'Seleccione una hora válida';
        }

        setErroress(listaErrores)



        
       

    }

    return (

        <>

            <form onSubmit={validarFormulario}>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-person-circle"></i>
                            </span>
                            <input 
                                type="text"
                                className={`form-control ${errores.nombre?'is-invalid':''} `} 
                                placeholder="Nombre Cliente" 
                                id="nombre"
                                value={nombre}
                                onChange={function(evento){setNombre(evento.target.value)}}
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="text"
                                className={`form-control ${errores.correo?'is-invalid':''} `}
                                placeholder="Correo cliente"
                                id="correo"
                                value={correo}
                                onChange={function(evento){setCorreo(evento.target.value)}} 
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="text" 
                                className={`form-control ${errores.telefono?'is-invalid':''} `}
                                placeholder="Telefono Cliente"
                                id="telefono"
                                value={telefono}
                                onChange={function(evento){setTelefono(evento.target.value)}}  
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input 
                                type="date" 
                                className={`form-control ${errores.dia?'is-invalid':''} `}
                                id="dia"
                                value={dia}
                                onChange={function(evento){setDia(evento.target.value)}}
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <select 
                                className={`form-select ${errores.hora?'is-invalid':''} `} 
                                defaultValue={'DEFAULT'}
                                id="hora"
                                onChange={function(evento){setHora(evento.target.value)}}>
                                
                                <option value="DEFAULT">Hora:</option>
                                <option value="6:30">6:30 am</option>
                                <option value="7:00">7:00 am</option>
                                <option value="7:30">7:30 am</option>

                            </select>
                        
                            
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-info">reservar</button>

            </form>


        </>
    )

}