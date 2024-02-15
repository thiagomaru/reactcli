import React from 'react';
import logo from '../../assets/logo-dio.png'
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wraper } from './styles'
import { Button } from '../button'

const Header = () => {
  return (
    <Wraper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wraper>

  )
}

export { Header }