import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

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
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  

    return(
        
        <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Row className="mb-3">
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
                placeholder="Nome do aluno"
                required 
                name='name'
                value={studentDataForm.name}
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
                type="email"
                placeholder="Email do aluno"
                required
                name='email'
                value={studentDataForm.autor}
                />
                <Form.Control.Feedback type="invalid">
                    Campo obrigatório!
                </Form.Control.Feedback>

                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="phone">
                <Form.Label>Telefone:</Form.Label>
                <Form.Control
                type="tel"
                placeholder="(00) 9 9999-9999"
                required
                name='phone'
                value={studentDataForm.fone}
                />
                <Form.Control.Feedback type="invalid">
                    Campo obrigatório!
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="city">
                <Form.Label>Cidade:</Form.Label>
                <Form.Control
                type="text"
                placeholder="Cidade do aluno"
                required
                name='city'
                value={studentDataForm.city}
                />
                <Form.Control.Feedback type="invalid">
                    Campo obrigatório!
                </Form.Control.Feedback>
                </Form.Group>
                </Row>

                <Modal.Footer>
                    <Button variant="danger" onClick={modalClose}>
                        Delete
                    </Button>
                
                    <Button type="submit" variant='success'>Atualizar</Button>
                </Modal.Footer>

                </Form>

                </Container>
       
    )
}