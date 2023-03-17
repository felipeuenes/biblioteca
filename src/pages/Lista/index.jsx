import { Container } from "./style"
import Table from 'react-bootstrap/Table'
import { BiEdit } from 'react-icons/bi'
import { useState, useEffect } from "react"
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import { FormUpdate } from "../../components/FormUpdate"




export function Lista() {

    const [listStudents, setListStudents] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [studentData, setStudentData] = useState({});


    const modalOpen = (studentID) => {
        
        setShowModal(true)
        console.log(studentID);

        const student = listStudents.findIndex(student => student.id == studentID);
        setStudentData(listStudents[student])
    }
        const modalClose = () => setShowModal(false);
    console.log(studentData);



    const API = 'http://localhost:3000/livros';

    function fetchStudents(){
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error));
    }

    useEffect(() => {
        fetchStudents();
    }, [])

    console.log(listStudents);



    return(
       <Container>
        <h1>LIVROS DA BIBLIOTECA</h1>
<section>

        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nome do livro</th>
                            <th>Autor</th>
                            <th>Detalhes</th>
                         
                            </tr>
                        </thead>
                        <tbody>
                            { listStudents &&
                                listStudents.map((students) =>{
                                    return(
                                        <tr key={students.idlivros}>
                                        <td>{students.idlivros}</td>
                                        <td>{students.name}</td>
                                        <td>{students.autor}</td>
                                        
                                        <td>
                                            <BiEdit className='editIcon'  onClick={() => modalOpen(students.id)}/>
                                        </td>
                                        
                                    </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@</td>
                            </tr> */}
                           
                        </tbody>
                        </Table>
                            </section>
                            <section>
                            <Modal show={showModal} onHide={modalClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Aluno</Modal.Title>
                                </Modal.Header>
                            <Modal.Body>
                                        <FormUpdate modalClose={modalClose} studentData={studentData}/>

                            </Modal.Body>
                        
      </Modal>
                            </section>

       </Container>
    )
}