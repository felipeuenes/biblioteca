import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'
import { Container } from './style';




export function FormUpdate({modalClose, studentData}){

    const [validated, setValidated] = useState(false);
    const [studentDataForm, setStudentDataForm] = useState({
      id: studentData.idlivros,
      name: studentData.name,
      autor: studentData.autor,
      
    });
  
    console.log(studentDataForm);

    const API = 'http://localhost:3000/livros/';
  

    function updateBook(id){
      axios.put(API + `${id}`, studentDataForm)
      .then((res) => {
        alert(res.data);
        fetchStudents();
        modalClose()
      })
      .catch((error) => alert(error.response.data));
  
     }


    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  console.log(studentDataForm.id);
      setValidated(true);
      updateBook(studentDataForm.id)
      // finalizar
    };
  
    // console.log(studentDataForm.id);

   


      function handleInputsChange(event){
        const {name, value} = event.target;
        console.log({name, value});
        setStudentDataForm({...studentDataForm,
        [name]: value
      })
    }

    return(
        
        <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Row className="mb-3"  >
                <Form.Group as={Col} md="2" controlId="id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                type="text"
                placeholder="ID do aluno"
                required
                disabled
                name='id'
                value={studentDataForm.id}
               
                />
                <Form.Control.Feedback type="invalid">
                    Campo obrigatório!
                </Form.Control.Feedback>

                </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group  md="9" controlId="name">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                type="text"
                placeholder="Nome do livro"
                required 
                name='name'
                value={studentDataForm.name}
                onChange={handleInputsChange}
                />
                <Form.Control.Feedback type="invalid">
                    Campo obrigatório!
                </Form.Control.Feedback>

                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group md="5" controlId="text">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                type="text"
                placeholder="Autor"
                required
                name='email'
                value={studentDataForm.autor}
                onChange={handleInputsChange}
                />
                <Form.Control.Feedback type="invalid">
                    Campo obrigatório!
                </Form.Control.Feedback>

                </Form.Group>
                </Row>
               

                <Modal.Footer>
                    
                
                    <Button type="submit" variant='success'>Atualizar</Button>
                </Modal.Footer>

                </Form>

                </Container>
       
    )
}