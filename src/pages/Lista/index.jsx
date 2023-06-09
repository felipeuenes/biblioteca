import { Container } from "./style"
import Table from 'react-bootstrap/Table'
import { BiEdit } from 'react-icons/bi'
import { useState, useEffect } from "react"
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import { FormUpdate } from "../../components/FormUpdate"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { Form } from "../../components/Form"
import { BsSearch } from 'react-icons/bs'




export function Lista() {

    const [listStudents, setListStudents] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [showModalRegister, setShowModalRegister] = useState(false);
    const [studentData, setStudentData] = useState({});


    const [searchStudent, setSearchStudent] = useState('')

    const filterStudents = listStudents.filter((student) => {
        return(
            String(student.idlivros).toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.autor.toLowerCase().includes(searchStudent.toLowerCase()) 

        )
    })

    console.log(filterStudents);


    // const [studentDataForm, setStudentDataForm] = useState({
    //     idlivros: studentData.idlivros,
    //     autor: studentData.autor,
        
    //   });

    const modalRegisterOpen = () => {

        setShowModalRegister(true)
    }
        const modalCloseRegister = () => setShowModalRegister(false);


    const modalOpen = (studentID) => {
        
        setShowModal(true)
        console.log(studentID);

        const student = listStudents.findIndex(student => student.idlivros == studentID);
        setStudentData(listStudents[student])
    }
        const modalClose = () => setShowModal(false);
    console.log(studentData);



    const API = 'http://localhost:3000/livros/';

    function fetchStudents(){
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error.response.data));
    }

    useEffect(() => {
        fetchStudents();
    }, [])

    // console.log(listStudents);





    function deleteStudent(id){

        const isDelete = confirm('Deseja deletar?');
        if (isDelete) {
         axios.delete(API + `${id}`)
         .then((res) => {
           alert(res.data);
           fetchStudents();
           
         }).catch((error) => alert(error.response.data));
        //  .catch((error) => alert(error.response.data));
        }
     }
    //  console.log(studentData.id);



    return(
       <Container>
        <h1>LIVROS DA BIBLIOTECA</h1>
        <article>

        <section>
            <button id="cadastro" onClick={() => modalRegisterOpen()}>Cadastrar novo</button>


            <Modal show={showModalRegister} onHide={modalCloseRegister} >
                                <Modal.Header closeButton>
                                    <Modal.Title>CADASTRO DE NOVO LIVRO</Modal.Title>
                                </Modal.Header>
                            <Modal.Body>
                                        {/* <FormUpdate modalClose={modalClose} studentData={studentData}/> */}
                                        <Form
                                        fetchStudents={fetchStudents}
                                        modalCloseRegister={modalCloseRegister}
                                        />

                            </Modal.Body>
                        
             </Modal>
        </section>
        <section>
            <div className='inputSection'>
                        <label htmlFor="inputSearchStudents" className='labelBusca'>Buscar livro:</label>
                        {/* <BsSearch className='searchIcon'/> */}
                        <input
                        type="text"
                        id='inputSearchStudents'
                        placeholder='Pesquise por nome, id ou autor...'
                        value={searchStudent}
                        onChange={(event) => setSearchStudent(event.target.value)}
                        />
                    </div>
            </section>
 </article>
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
                                filterStudents.map((students) =>{
                                    return(
                                        <tr key={students.idlivros}>
                                        <td>{students.idlivros}</td>
                                        <td>{students.name}</td>
                                        <td>{students.autor}</td>
                                        
                                        <td>
                                            <BiEdit className='editIcon' onClick={() => modalOpen(students.idlivros)}/>
                                            <BsFillTrash3Fill onClick={() => deleteStudent(students.idlivros)}/>
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
                            <Modal show={showModal} onHide={modalClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Aluno</Modal.Title>
                                </Modal.Header>
                            <Modal.Body>
                                        <FormUpdate
                                        modalClose={modalClose}
                                        studentData={studentData}
                                        fetchStudents={fetchStudents}
                                        />

                            </Modal.Body>
                        
      </Modal>
                            </section>

       </Container>
    )
}