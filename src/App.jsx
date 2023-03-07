import { useState } from 'react'
import ModalComponetent from "./components/Modal"
import Button from 'react-bootstrap/Button';

import {
  Container,
  ContainerInputs,
  ContainerLimitador,
  ContainerList,
  List,
  ContainerButton,
  ButtonList,
  ContainerButtonList,
  Title
} from './style'


import { MdDelete, MdModeEditOutline, MdAdd } from "react-icons/md"

export default function App() {

  const [concluido, setConcluido] = useState(false)
  const [show, setShow] = useState(false);
  const [list, setList] = useState([])

  const [input, setInput] = useState({
    tarefa: "",
  })

  const [inputEdit, setInputEdit] = useState({
    novaTarefa: "",
  })


  const handleAddTarefa = () => {

    if(input.tarefa !== "" || input.tarefa.length >= 2) {
      setList(list.concat(
        {
          ...input.tarefa,
          id: Math.random(),
          concluido: false,
          tarefa: input.tarefa,
        }
        ))
        input.tarefa = ""
      }
    }

    const handleConcluirTarefa = (id) => {
      list.filter(item => {
        setConcluido(item === id ? true : false)
      })
    }
    
    const handleEditTarefa = (id) => {
      const novaLista = list.map(item => {
        if(item.id === id) {
          return {
            ...item,
            tarefa: inputEdit.novaTarefa
          }
        }
        if(item) return item
      })

      if(inputEdit.novaTarefa !== "" || inputEdit.novaTarefa.length >= 2) {
        setList(novaLista)
      }

      inputEdit.novaTarefa = ""

    }
    
    const handleRemoveTarefa = (id) => {
      setList(list.filter(item => item.id !== id))
    }

  return (
    <Container>
      <ContainerLimitador>
        <Title>
          Lista de Tarefas
        </Title>
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
              list.map((item) => (
                <List
                  className={`animate__animated animate__bounceInLeft ${concluido === true ?"ContainerConcluido":""}`}
                  onClick={() => handleConcluirTarefa(item.id)}
                  key={`tarefa-${item.id}}`}
                  color={concluido? "#83a3ee61": "#83A3EE"}
                  
                >
                  <input 
                    type="checkbox"
                    value={item.concluido}
                    onClick={() => handleConcluirTarefa(item.id)}
                  />
                  <strong
                    className={concluido === true ?"concluido":""}
                  >
                    {
                      item.tarefa
                    }
                  </strong>
                  <ContainerButtonList>
                    <ButtonList onClick={() => setShow(true)}>
                      <MdModeEditOutline />
                    </ButtonList>
                    <ButtonList
                      onClick={() => handleRemoveTarefa(item.id)}
                    >
                      <MdDelete />
                    </ButtonList>
                  </ContainerButtonList>
                  <ModalComponetent
                    title="Editar tarefa"
                    show={show}
                    close={() => setShow(false)}
                  >
                    <input
                      type="text"
                      placeholder='Digite uma tarefa'
                      name='task'
                      value={inputEdit.novaTarefa}
                      onChange={(e) => setInputEdit({ ...inputEdit, novaTarefa: e.target.value })} 
                    />
                    <Button 
                      className='mx-2'
                      variant="danger"
                      onClick={() => handleEditTarefa(item.id)}
                    >
                      Editar Tarefa
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={() => setShow(false)}
                    >
                      Cancelar
                    </Button>
                  </ModalComponetent>
                </List>
              ))
            }
          </ul>
        </ContainerList>
      </ContainerLimitador>
    </Container>
  )
}