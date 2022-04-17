import logo from './logo.svg';
import './App.css';
import { TodoList  } from './components/TodoList.tsx';
import { TodoStore } from './stores/TodoStore.ts';
function App() {
  return (
    <div className="App" style={ {display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',marginTop:'300px'}}>
      <h1>TodoList</h1>
      <TodoList todoStore={TodoStore} />
    </div>
  );
}

export default App;
