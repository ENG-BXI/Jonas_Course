import {useState} from 'react';
import type {ObjectType} from '../Type/ObjectType';

const Header = ({setListOfObjects}: {setListOfObjects: React.Dispatch<React.SetStateAction<ObjectType[]>>}) => {
  const [inputText, setInputText] = useState('');
  const [inputSelect, SetInputSelect] = useState(1);
  function ResetInputs() {
    setInputText('');
    SetInputSelect(1);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputText !== '') {
      setListOfObjects(list => [...list, {id: Date.now().toString(), text: inputText, numberOfObject: inputSelect, isComplete: false}]);
      ResetInputs();
    }
  }
  return (
    <header>
      <div className='header-top'>
        <h1 className='header-text'>Far away</h1>
      </div>
      <div className='header-bottom'>
        <h2>What do need for your trip</h2>
        <form onSubmit={handleSubmit} className='flex gap-x-2 items-center'>
          <select value={inputSelect} onChange={e => SetInputSelect(+e.target.value)} className='select'>
            {Array.from({length: 20}, (_, index) => index + 1).map(index => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
          <input value={inputText} onChange={e => setInputText(e.target.value)} type='text' placeholder='Item ...' />
          <button>ADD</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
