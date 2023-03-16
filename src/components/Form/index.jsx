import './style'
import { Container } from './style'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import axios  from 'axios';




export function Form() {



    const { register, handleSubmit, formState: { errors } } = useForm()
    function onSubmit(data){
        console.log(data);
    }

    console.log(errors);

    

    const API = 'http://localhost:3000/cadastroLivros'

    function onSubmit(data) {
    
        console.log(data);

        axios.post(API, data)
        .then((res) => {
            alert(res.data)
            reset()
        })
        .catch((error) => alert(error.response.data));

        
      
    }

    return(
        <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <label htmlFor="name">Nome do livro:</label>
                        <input type="text" id='name' {...register('name', {required: true})}/>
                        {errors.name && <span className='erro'>Campo obirgatório</span>}
                    </section>
                    <section>
                        <label htmlFor="autor">Autor:</label>
                        <input type="text" id='autor' {...register('autor', {required: true})}/>
                        {errors.name && <span className='erro'>Campo obirgatório</span>}
                    </section>
                    


                    <button>CADASTRAR</button>

                    {/* <p>{biblioteca.name}</p> */}
                </form>




        </Container>
    )
}