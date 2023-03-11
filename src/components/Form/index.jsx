import './style'
import { Container } from './style'
import { useForm } from 'react-hook-form'




export function Form() {



    const { register, handleSubmit, formState: { errors } } = useForm()
    function onSubmit(data){
        console.log(data);
    }

    console.log(errors);

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