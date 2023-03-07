import styled from "styled-components";


export const Container = styled.div``


export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
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

  @media(max-width:500px) {
    width: 100%;
    margin: 0 5px;
  }
`

export const ContainerButton = styled.button`
  position: absolute;
  top: 14px;
  right: 28px;

  border: none;
  border-radius: 50%;
  background-color: #fff;
  transition:  0.8s ease-in-out;


  svg {
    width: 20px;
    height: 20px;
    color: green;
  }

  &:hover{
    svg {
    width: 30px;
    height: 30px;
    color: red;
  }
  }

`

export const ContainerList = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
      background-color: tomato;
      border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
      background-color: black;
  }

  @media(max-width:500px) {
    padding: 0;
    margin-top: 40px;
    ::-webkit-scrollbar{
      width: 1px;
    }

    ::-webkit-scrollbar-track{
      background-color: tomato;
    }

    ul {
      margin: 0 5px;
      padding-left: 0;
    }
  }

`

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  padding: 15px 20px;
  background-color: ${(props) => props.color};

  input[type=checkbox] {
    margin-left: 5px;
  }

  .ContainerConcluido {
    opacity: .6;
  }

  .concluido {
    text-decoration: line-through
  }
`

export const ContainerButtonList = styled.div`
  display: flex;
`

export const ButtonList = styled.button`
  margin: 0 5px;
  border: none;
`
