import React from 'react';
import { Header } from '../../components/header';
import { Container, Title, Row, Wrapper, SubtitleSig, TitleSig, Column } from './style';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import * as yup from "yup";
import { useForm } from 'react-hook-form';

const schema = yup.object({
    email: yup.string().email('email nao é valido').required(),
    password: yup.string().min(3, 'no minimo 3 caracteres').required(),
}).required();

const Signin = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors, isValid} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange', 
    });

    console.log(isValid, errors)

    const onSubmit = async formData => {
      try{
        const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
        if(data.length === 1){
            navigate('/feed') 
        } else {
            alert('Email ou senha errado')
        }
      }catch{
        alert('Houve um erro, tente novamente')
      } 
    };

  return (<>
    <Header/>
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleSig>Comece agora grátis</TitleSig>
                <SubtitleSig>Crie sua conta e make the change._</SubtitleSig>
                <form>
                    <Input name="nome" placeholder="Nome completo" control={control} />
                    <Input name="email" placeholder="E-mail" leftIcon={<MdEmail />} control={control} />
                    <Input name="password" placeholder="Password" leftIcon={<MdLock />} type="password" control={control} />
                    <Button title="Criar minha conta" onClick={navigate('/login')} variant="secondary" type="button" control={control} />
                </form>
            </Wrapper> 
        </Column>
    </Container>
    </>
    )
}

export { Signin }