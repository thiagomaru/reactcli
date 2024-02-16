

import { Card } from "../../components/Card";
import { Header } from "../../components/header";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./style"

const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA </TitleHighlight>            
                    <UserInfo nome="Thiago Maruyama" image="https://avatars.githubusercontent.com/u/126510946?v=4" percentual={25}/>
                    <UserInfo nome="Thiago Maruyama" image="https://avatars.githubusercontent.com/u/126510946?v=4" percentual={65}/>
                    <UserInfo nome="Thiago Maruyama" image="https://avatars.githubusercontent.com/u/126510946?v=4" percentual={45}/>
                    <UserInfo nome="Thiago Maruyama" image="https://avatars.githubusercontent.com/u/126510946?v=4" percentual={72}/>
                    <UserInfo nome="Thiago Maruyama" image="https://avatars.githubusercontent.com/u/126510946?v=4" percentual={89}/>
            </Column>
            
        </Container>
        </>)


}

export { Feed };