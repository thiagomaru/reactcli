import { Link } from "react-router-dom";
import { Button } from "../../components/button";

const Home = () => {
    return(<>
        <h1>Home</h1>
        <Button title="Teste 1" />
        <Button variant="secondary" title="Teste 2" />
        <Link to="/Login">Fazer login</Link>
        </>)


}

export { Home }