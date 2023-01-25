import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const name = "Matheus";
  const newName = name.toUpperCase();

  function sum(a,b){
    return a + b;
  }

  const url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.pngtree.com%2Fso%2Fimagem-pequena&psig=AOvVaw1kcdwUZUr2PcO95RucMd_w&ust=1674768029652000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIDf3J_T4_wCFQAAAAAdAAAAABAQ";

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} />
      <HelloWorld />
      <SayMyName name="Robert"/>
      <SayMyName name={name}/>
      <Pessoa nome="Rodrigo" idade="12" foto={url}/>
      <h1>Testando CSSS</h1>
      <Frase />
      <Frase />
    </div>
  );
}

export default App;
