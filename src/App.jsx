import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {
  Container,
  ContainerInputs,
  ContainerLimitador,
  ContainerList,
  List,
  ContainerButton,
  ButtonList,
  ContainerButtonList
} from './style'


import { MdDelete, MdModeEditOutline, MdAdd } from "react-icons/md"

function App() {

  const [show, setShow] = useState(false);
  const [list, setList] = useState([])
  const [input, setInput] = useState({
    tarefa: "",
  })
  const [inputEdit, setInputEdit] = useState({
    novaTarefa: "",
  })
  const [concluido, setConcluido] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  
  const handleAddTarefa = () => {

    if(input.tarefa !== "" || input.tarefa.length >= 2) {
      setList(list.concat(
        {
          ...input.tarefa,
          id: Math.random(),
          tarefa: input.tarefa,
        }
        ))
        input.tarefa = ""
      }
    }

    
    const handleEditTarefa = (id) => {
      const novaLista = list.map(item => {
        if(item.id === id) {
          return {
            ...item,
            tarefa: inputEdit.novaTarefa
          }
        }
        return item
      })

      setList(novaLista)
      inputEdit.novaTarefa = ""

    }
    
    const handleRemoveTarefa = (id) => {
      setList(list.filter(item => item.id !== id))
    }

  return (
    <Container>
      <ContainerLimitador>
        <ContainerInputs>
          <input 
            type="text"
            placeholder='Digite uma tarefa'
            name='task'
            value={input.tarefa}
            onChange={(e) => setInput({ ...input, tarefa: e.target.value })} 
          />
          <ContainerButton
            onClick={handleAddTarefa}
          >
            <MdAdd/>
          </ContainerButton>
        </ContainerInputs>
        <ContainerList>
          <ul>
            {
              list.map((item, index) => (
                <List
                  className={`${concluido&&'concluido'} animate__animated animate__pulse`}
                  key={`tarefa-${index}`}
                >
                  <input 
                    type="checkbox"
                    value={concluido}
                    onClick={() => setConcluido(!concluido)}
                  />
                  <strong>
                    {
                      item.tarefa
                    }
                  </strong>
                  <ContainerButtonList>
                    <ButtonList onClick={handleShow}>
                      <MdModeEditOutline />
                    </ButtonList>
                    <ButtonList
                      onClick={() => handleRemoveTarefa(item.id)}
                    >
                      <MdDelete />
                    </ButtonList>
                  </ContainerButtonList>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Editar tarefa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <input 
                        type="text"
                        placeholder='Digite uma tarefa'
                        name='task'
                        value={inputEdit.novaTarefa}
                        onChange={(e) => setInputEdit({ ...inputEdit, novaTarefa: e.target.value })} 
                      />
                      <ContainerButton
                        onClick={() => handleEditTarefa(item.id)}
                      >
                        Confirmar
                      </ContainerButton>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </List>
              ))
            }
          </ul>
        </ContainerList>
      </ContainerLimitador>
      <>
    </>
    </Container>
  )
}

export default App
