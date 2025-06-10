import type {ObjectType} from '../Type/ObjectType';

function handleChangeCheckBox(index: number, item: ObjectType, listOfObjects: ObjectType[], setListOfObjects: React.Dispatch<React.SetStateAction<ObjectType[]>>) {
  item.isComplete = !item.isComplete;
  listOfObjects[index] = item;
  setListOfObjects([...listOfObjects]);
}
function handleDelete(item: ObjectType, listOfObjects: ObjectType[], setListOfObjects: React.Dispatch<React.SetStateAction<ObjectType[]>>) {
  listOfObjects = listOfObjects.filter(localItem => {
    return item.id !== localItem.id;
  });
  setListOfObjects([...listOfObjects]);
}
const Item = ({item, listOfObjects, setListOfObjects, index}: {item: ObjectType; listOfObjects: ObjectType[]; index: number; setListOfObjects: React.Dispatch<React.SetStateAction<ObjectType[]>>}) => {
  return (
    <div className='item'>
      <input checked={item.isComplete}
        onClick={() => {
          handleChangeCheckBox(index, item, listOfObjects, setListOfObjects);
        }}
        type='checkbox'
        className='checkbox cursor-pointer'
      />
      <span>{item.numberOfObject}</span>
      <h3 className={item.isComplete ? 'line-through' : ''}>{item.text}</h3>
      <button onClick={() => handleDelete(item, listOfObjects, setListOfObjects)} className='close-button'>
        ❌
      </button>
    </div>
  );
};

export default Item;
