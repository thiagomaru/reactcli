import { Button } from "../../components/button";
import { Header } from "../../components/header";

import { Container, TextContent, Title, TitleHighlight } from "./style"
import bannerImage from "../../assets/banner.png"

const Home = () => {
    return(<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                    Implemente
                    <br />
                    </TitleHighlight>  
                    o seu futuro global AGORA!
                </Title>
                <TextContent>
                Domine as Tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo deafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null} />
            </div>
            <div>
                <img src={bannerImage} alt="imagem principal" />
            </div>
        </Container>
        </>)


}

export { Home }