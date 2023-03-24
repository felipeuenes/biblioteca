import { Container } from "./style"
import { useEffect, useState } from "react";
import axios from "axios";

import { FormPessoas } from "../../components/FormPessoas";
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import { BsFillTrash3Fill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';



export function Emprestimo() {

    const [showModal, setShowModal] = useState(false);
    const modalClose = () => setShowModal(false);


    const modalOpen = () => {
        setShowModal(true);
    }

   
    return(
        <Container>
            <h1>RESERVA</h1>

            <section className="topBt">
                <button onClick={() => modalOpen()}>NOVO</button>
            </section>
           <section className="tabela">

        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>NOME:</th>
                            <th>LIVRO:</th>
                            <th>CPF:</th>
                     
                         
                            </tr>
                        </thead>
                        <tbody>
                           
                                        <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        
                                        <td>
                                            {/* <BiEdit className='editIcon' onClick={() => modalOpen(students.idlivros)}/> */}
                                            <BsFillTrash3Fill />
                                        </td>
                                        
                                    </tr>
                                    
                          
                       
                           
                        </tbody>
                        </Table>

                        <Modal show={showModal} onHide={modalClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>CADASTRO DE NOVA RESERVA</Modal.Title>
                                </Modal.Header>
                            <Modal.Body>
                                        {/* <FormUpdate modalClose={modalClose} studentData={studentData}/> */}
                                        <FormPessoas/>
                     </Modal.Body>
                     
                        
                        </Modal>

           </section>
                    
        </Container>
    )
}