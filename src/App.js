
import './App.css';
import Baner from './componets/baner/Baner';
import Navbar from './componets/navbar/Navbar';
import RowPost from './componets/rowpost/RowPost';
import {orginals,action} from './urls'

function App() {
  return (
    <div>
      <Navbar/>
      <Baner/>
      <RowPost title={"Netflix Orginals"} url={orginals}/>
      <RowPost title={"Comedy Movies"} isSmall url={action}/>
    </div>
  );
}

export default App;
