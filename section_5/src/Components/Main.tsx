import type {ObjectType} from '../Type/ObjectType';
import Item from './Item';
import SorterButton from './SorterButton';

function Main({listOfObjects, setListOfObjects}: {listOfObjects: ObjectType[]; setListOfObjects: React.Dispatch<React.SetStateAction<ObjectType[]>>}) {
  return (
    <main className='main'>
      <div className='main-body'>
        {listOfObjects.map((item, index) => (
          <Item listOfObjects={listOfObjects} item={item} index={index} setListOfObjects={setListOfObjects} key={index} />
        ))}
      </div>
      <div className='main-footer'>
        <SorterButton />
        <button onClick={() => setListOfObjects([])}>Clear List</button>
      </div>
    </main>
  );
}

export default Main;
