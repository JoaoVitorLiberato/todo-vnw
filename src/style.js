import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  background-color: tomato;
  height: 100vh;
`

export const ContainerLimitador = styled.div`
  width: 100%;
  max-width: 1100px;
  padding-top: 100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`

export const ContainerInputs = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto 60px;

  display: flex;
  justify-content: center;
  

  input[type=text] {
    padding: 15px;
    width: 100%;
    margin-right: 15px;
    border: none;
    border-radius: 10px;
  }
`

export const ContainerButton = styled.button`
  position: absolute;
  top: 14px;
  right: 28px;

  border: none;
  border-radius: 50%;


  svg {
    width: 20px;
    height: 20px;
    color: green;
  }

`

export const ContainerList = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
  overflow-y: scroll;

  
`

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  padding: 15px 0;
  background-color: #83A3EE;

  input[type=checkbox] {
    margin-left: 5px;
  }

  .concluido {
    background-color: red;
    strong {
      text-decoration: underline;
    }
  }
`

export const ContainerButtonList = styled.div`
  display: flex;
`

export const ButtonList = styled.button`
  margin: 0 5px;
  border: none;
`
