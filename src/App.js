import logo from './logo.svg';
import './App.css';
import GitUsers from './Components/gitUsers';
import FetchUsers from './Components/FetchUsers';
import Ouser from './Components/SecUser';
import Thors from './Components/Tours';
import Errexample from './Components/Errexamp';
import Page from './Pagination/page';
import TextGen from './Components/Text-Generator/text-gen';
import Display from './Components/Text-Generator/text';

function App() {
  const faves = {
    color:'blue',
    size:'medium',    
num:3.14,
 }

 const{ color,size,num}= faves

  return (
    <>
 <TextGen/>
    </>
  );
}

export default App;
