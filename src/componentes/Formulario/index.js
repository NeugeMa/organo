/* eslint-disable no-restricted-globals */
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end', 
        'Data Science', 
        'Devops',
        'UX e Design',
        'Mobile', 
        'Inovação e Gestão'
    ]


    const aoSalvar = () => { 
        event.preventDeafult()
        console.log('Form foi submetido')
    }


    return (
        <section className="formulario"> 
            <form onSubmit={aoSalvar}> 

            <h2>Preencha os dados para criar o card do colaborador </h2> 
            <CampoTexto obrigatorio={true} label="Nome" placeholde="Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
            <Botao texto="Criar Card"/> 

            </form>
        </section>
    )
}

export default Formulario; 