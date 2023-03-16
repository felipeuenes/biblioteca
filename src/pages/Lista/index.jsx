import { Container } from "./style"
import Table from 'react-bootstrap/Table'
import { BiEdit } from 'react-icons/bi'
import { useState, useEffect } from "react"
import axios from 'axios'





export function Lista() {

    const [listStudents, setListStudents] = useState([])

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
        <h1>lista aqui</h1>

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
                                            <BiEdit className='editIcon'/>
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

       </Container>
    )
}