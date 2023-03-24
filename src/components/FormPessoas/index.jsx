import { Container } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";




export function FormPessoas() {
    

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    
    console.log(errors);

    const [validated, setValidated] = useState(false);
    const [listStudents, setListStudents] = useState([])



    const API = 'http://localhost:3000/livros/';

    function fetchStudents(){
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error.response.data));
    }

    useEffect(() => {
        fetchStudents();
    }, [])


    console.log(listStudents);

    const APIreserva = 'http://localhost:3000/reservasCadas';

    function onSubmit(data) {
    
        console.log(data);

        axios.post(APIreserva, data)
        .then((res) => {
            alert(res.data)
            fetchStudents()
            reset()
            modalCloseRegister()
        })
        .catch((error) => alert(error.response.data))

        
      
    }

    return(
        <Container>


<section className="formularioPessoas">
    
        <form action="" onSubmit={handleSubmit(onSubmit)}>
                <section>

                    <label htmlFor="name">Nome completo:</label>
                    <input type="text" name="name" id="name" placeholder="Nome da pessoa" {...register('name', {required: true})}/>
                </section>
                <section>
                    <label htmlFor="">CPF:</label>
                    <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" {...register('cpf', {required: true})}/>
                </section>

        <label htmlFor="">Livro:</label>
        <select className="form-select" aria-label="Default select example" name="livros" {...register('livros', {required: true})}>

            {listStudents.map((books) => {
                return(
                    
                    <option value={books.name} key={books.idlivros}>{books.name} </option>
                    
                    )
                })}
                </select>
                <section className="btreserva">
                    <button>RESERVAR</button>
                </section>
                    </form>
                </section>
        </Container>
    )
}