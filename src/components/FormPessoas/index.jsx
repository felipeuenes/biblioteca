import { Container } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { Loading } from "../Loading";




export function FormPessoas({modalClose}) {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    
    
    const APIreserva = 'http://localhost:3000/reservasCadas';

    console.log(errors);

   
    const [listBooks, setListBooks] = useState([])

   

    const API = 'http://localhost:3000/livros/';

    function fetchReservas(){
        axios.get(API)
        .then((res) => setListBooks(res.data))
        .catch((error) => alert(error.response.data));
    }

    useEffect(() => {
        fetchReservas();
       
    }, [])


    console.log(listBooks);

    

    function onSubmit(data) {
    
        console.log(data);

        axios.post(APIreserva, data)
        .then((res) => {
            alert(res.data)
            reset()
            modalClose()
            fetchReservas()
           
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
        <select className="form-select" aria-label="Default select example" name="livro" {...register('livro', {required: true})}>

            {listBooks.map((books) => {
                return(
                    
                    <option
                    value={books.name}
                    key={books.idlivros}
                    >
                        {books.name} 
                    </option>
                    
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