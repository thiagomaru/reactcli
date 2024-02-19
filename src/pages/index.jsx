import { useState, useEffect } from "react";

const Teste = () => {

    const [name, setName] = useState('Thiago');

    const handleChangeName = () =>{
        setName(prev => prev === 'Thiago' ? 'Jose' : 'Thiago')
    }

    useEffect(() => {
        alert('nome alterado')
    },[name]);
    

    return(
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export { Teste }