import {useState} from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import type {ObjectType} from './Type/ObjectType';

function App() {
  const [listOfObjects, setListOfObjects] = useState<ObjectType[]>([]);
  
  return (
    <>
      <Header setListOfObjects={setListOfObjects} />
      <Main listOfObjects={listOfObjects!} setListOfObjects={setListOfObjects} />
      <Footer listOfObjects={listOfObjects!} />
    </>
  );
}

export default App;
