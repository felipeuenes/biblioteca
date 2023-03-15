import './style'
import { Container } from './style'
import { useForm } from 'react-hook-form'





export function Form() {



    const { register, handleSubmit, formState: { errors } } = useForm()
    function onSubmit(data){
        console.log(data);
    }

    console.log(errors);


    // const fecth = fetch('http://localhost:3000' ,{
    //     method: "POST", 
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // })
    

    const fethAPI = () => {
        const url = `http://localhost:3000/livros`;

        fetch(url).then(response => response.json()
        .then(biblioteca => {
            console.log(biblioteca);
        })
        )
    }

    fethAPI()


    return(
        <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <label htmlFor="nome">Nome do livro:</label>
                        <input type="text" id='name' {...register('name', {required: true})}/>
                        {errors.name && <span className='erro'>Campo obirgatório</span>}
                    </section>
                    <section>
                        <label htmlFor="autor">Autor:</label>
                        <input type="text" id='autor' {...register('autor', {required: true})}/>
                        {errors.name && <span className='erro'>Campo obirgatório</span>}
                    </section>
                    


                    <button>CADASTRAR</button>

                    
                </form>




        </Container>
    )
}