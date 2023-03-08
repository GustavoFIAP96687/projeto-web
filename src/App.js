import logo from './';
import './App.css';
import Home from './componentes/home';
import Livros from './componentes/livros';

export default function App() {
  const h1 = "Biblioteca geek"
  const subt = "Seja bem vindo a bliblioteca geek"
  const estoque = ['The witcher ', 'Outliers', 'Assassins creed']
  return (
    <div >
      <Home h1={h1}/>
      <Home subt={subt}/>
      <Livros estoque={estoque}/>
    </div>
    
  );
}


