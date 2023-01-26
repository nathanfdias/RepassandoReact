import { useState } from "react";

function Form() {

    function cadastrar(e) {
        e.preventDefault();
        console.log("Cadastro realizado");
        console.log(name);
        console.log(password);
    }

    const [name, setName] = useState("Matt");
    const [password, setPassword] = useState("");

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e)=> setName(e.target.value)} /*value={name}*/></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastro" />
                </div>
            </form>
        </div>
    )

}

export default Form;