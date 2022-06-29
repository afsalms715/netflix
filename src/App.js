
import './App.css';
import Baner from './componets/baner/Baner';
import Navbar from './componets/navbar/Navbar';
import RowPost from './componets/rowpost/RowPost';

function App() {
  return (
    <div>
      <Navbar/>
      <Baner/>
      <RowPost title={"Netflix Orginals"}/>
      <RowPost title={"Action Movies"} isSmall/>
    </div>
  );
}

export default App;
