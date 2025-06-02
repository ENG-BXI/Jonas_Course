import {useState} from 'react';
import type {ObjectType} from '../Type/ObjectType';
import Item from './Item';
import SorterButton from './SorterButton';

function Main({listOfObjects, setListOfObjects}: {listOfObjects: ObjectType[]; setListOfObjects: React.Dispatch<React.SetStateAction<ObjectType[]>>}) {
  const [Sort, setSort] = useState<'input' | 'text' | 'packed'>('input');
  function handleClearItems() {
    const result =  confirm("Are You Sure")
    if(result)
    setListOfObjects([])
  }
  return (
    <main className='main'>
      <div className='main-body'>
        {listOfObjects
          .sort((a, b) => {
            if (Sort === 'text') return a.text.localeCompare(b.text);
            if (Sort === 'packed') return Number(b.isComplete) - Number(a.isComplete);
            if (Sort === 'input') return a.id - b.id;
            return 0;
          })
          .map((item, index) => (
            <Item listOfObjects={listOfObjects} item={item} index={index} setListOfObjects={setListOfObjects} key={index} />
          ))}
      </div>
      <div className='main-footer'>
        <SorterButton Sort={Sort} setSort={setSort} />
        <button onClick={handleClearItems}>Clear List</button>
      </div>
    </main>
  );
}

export default Main;
