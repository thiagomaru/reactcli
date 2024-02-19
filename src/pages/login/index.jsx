import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { api } from '../../services/api';
import { Column, Container, ErrorText, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./style"

const schema = yup.object({
    email: yup.string().email('email nao é valido').required(),
    password: yup.string().min(3, 'no minimo 3 caracteres').required(),
}).required();



const Login = () => {

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


    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="email" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control}  placeholder="senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
                
            </Column>
        </Container>
        </>)


}

export { Login }