function Form() {

    function cadastrar(e) {
        e.preventDefault();
        console.log("Cadastro realizado");
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <input type="text"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastro" />
                </div>
            </form>
        </div>
    )

}

export default Form;