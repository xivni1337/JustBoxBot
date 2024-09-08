import './App.css';
import {useTg} from "./hooks/useTg";
import Header from "./components/Header/Header";
function App() {
    const {onToggleButton} = useTg()
    return (
    <div className="app">
        <Header></Header>
        <button onClick={onToggleButton}>dsfgt</button>
    </div>
  );
}
export default App;
