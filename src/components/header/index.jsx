import { useNavigate } from "react-router-dom"; 
import React from 'react';
import logo from '../../assets/logo-dio.png'
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wraper } from './styles'
import { Button } from '../button'

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickHome = () => {
        navigate('/')
    }

  return (
    <Wraper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" onClick={handleClickHome} type="button" />
                {autenticado ? (
                    <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/126510946?v=4" />
                ) : (
                    <>
                        <MenuRight href='#' onClick={handleClickHome} type="button">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn} type="button"/>
                        <Button title="Cadastrar" />    
                    </>
                )}
                
            </Row>
        </Container>
    </Wraper>

  )
}

export { Header }