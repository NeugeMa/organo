import './CampoTexto.css'

// props se vem de "propriedades" 
const CampoTexto = (props) => {

    const placeholderModifica = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            
            <input required={props.obrigatorio} placeholder={placeholderModifica}/>
        </div>
    )
}

export default CampoTexto;  