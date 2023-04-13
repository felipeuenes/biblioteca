import { Container } from "./style"
import { useEffect, useState } from "react";
import axios from "axios";

import { FormPessoas } from "../../components/FormPessoas";
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { Loading } from "../../components/Loading";
import { AiOutlineSearch } from 'react-icons/ai'


export function Emprestimo() {


    const [listBooks, setListBooks] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const [searchBook, setSearchBook] = useState('')

    const filterBooks = listBooks.filter((book) => {
        return(
            book.name.toLowerCase().includes(searchBook.toLowerCase()) ||
            book.livro.toLowerCase().includes(searchBook.toLowerCase()) ||
            book.cpf.toLowerCase().includes(searchBook.toLowerCase()) 

        )
    })

    console.log(listBooks);

    const [showModal, setShowModal] = useState(false);
    const modalClose = () => setShowModal(false);


    const modalOpen = () => {
        setShowModal(true);
    }

    const APIdelete = 'http://localhost:3000/reservas/'

    function deleteReserva(cpf){

        const isDelete = confirm('Deseja deletar?');
        if (isDelete) {
         axios.delete(APIdelete + `${cpf}`)
         .then((res) => {
           alert(res.data);
           fetchStudents();
           
           
         }).catch((error) => alert(error.response.data));
      
        }
     }


    const API = 'http://localhost:3000/reservas/';

    function fetchStudents(){
        axios.get(API)
        .then((res) => setListBooks(res.data))
        .catch((error) => alert(error.response.data));
    }

    useEffect(() => {
        setTimeout(() => {
            fetchStudents();
            setRemoveLoading(true)
        }, 1500);
    }, [])
   
    return(
        <Container>

           {!removeLoading && <Loading/>}

            <h1>RESERVA</h1>
        <div className="topReservas">

            <section className="topBt">
                <button onClick={() => modalOpen()}>NOVO</button>
            </section>
            <section>
            <div className='inputSection'>
                        {/* <label htmlFor="inputSearchReservas" className='labelBusca'>Pesquisa:</label> */}
                        {/* <BsSearch className='searchIcon'/> */}
                        <input
                        type="text"
                        id='inputSearchReservas'
                        placeholder='Pesquise por nome, cpf ou livro...'
                        value={searchBook}
                        onChange={(event) => setSearchBook(event.target.value)}
                        />
                    </div>
            </section>
        </div>
           <section className="tabela">

        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>NOME:</th>
                            <th>LIVRO:</th>
                            <th>CPF:</th>
                            <th>DETALHES:</th>
                     
                         
                            </tr>
                        </thead>
                        <tbody>
                           {listBooks && 
                                filterBooks.map((books) => {

                                    return(

                                        <tr key={books.cpf}>
                                            <td>{books.name}</td>
                                            <td>{books.livro}</td>
                                            <td>{books.cpf}</td>
                                            <td> <BsFillTrash3Fill onClick={() => deleteReserva(books.cpf)}/></td>
                                        </tr>
                                    )

                                })
                           }
                                                    
                    
                           
                        </tbody>
                        </Table>

                        <Modal show={showModal} onHide={modalClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>CADASTRO DE NOVA RESERVA</Modal.Title>
                                </Modal.Header>
                            <Modal.Body>
                                        {/* <FormUpdate modalClose={modalClose} studentData={studentData}/> */}
                                        <FormPessoas
                                        modalClose={modalClose}
                                    
                                        />
                     </Modal.Body>
                     
                        
                        </Modal>

           </section>
                    
        </Container>
    )
}