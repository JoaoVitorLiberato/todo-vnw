import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
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
  width: 500px;
  margin: 0 auto 60px;

  display: flex;
  justify-content: center;
  

  input[type=text] {
    padding: 15px;
    width: 100%;
    margin-right: 15px;
  }
`

export const ContainerButton = styled.button`
  padding: 10px 20px;

  svg {
    width: 20px;
    height: 20px;
    color: green;
  }

`

export const ContainerList = styled.div`
  width: 500px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  padding-bottom: 2px;
  border-bottom: 2px solid gray;
`

export const ContainerButtonList = styled.div`
  display: flex;
`

export const ButtonList = styled.button`
  margin: 0 5px;
  border: none;
`
