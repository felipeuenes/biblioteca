import { Container } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




export function FormPessoas() {
    
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

    return(
        <Container>


<section className="formularioPessoas">

<Form noValidate validated={validated} >
        <section id="linha">

    <Row className="mb-3"  >
    <Form.Group as={Col} md="2" controlId="id">
    <Form.Label>Nome comleto:</Form.Label>
    <Form.Control
    type="text"
    placeholder="Nome da pessoa"
    required
    
    name='name'
    
    
    />
    <Form.Control.Feedback type="invalid">
        Campo obrigatório!
    </Form.Control.Feedback>

    </Form.Group>
    </Row>



    <Row className="mb-3"  >
    <Form.Group as={Col} md="2" controlId="id">
        <Form.Label>CPF</Form.Label>
    <Form.Control
    type="text"
    placeholder="Nome da pessoa"
    required
    
    name='name'
    
    
    />
    <Form.Control.Feedback type="invalid">
        Campo obrigatório!
    </Form.Control.Feedback>

    </Form.Group>
    </Row>
    
   

    </section>
</Form>

     

<label htmlFor="">Livro:</label>
<select className="form-select" aria-label="Default select example">

    {listStudents.map((books) => {
        return(
            
            <option value="" key={books.idlivros}>{books.name}</option>
            
            )
        })}
        </select>
        </section>
        </Container>
    )
}