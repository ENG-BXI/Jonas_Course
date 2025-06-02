import Item from './Item';
import SorterButton from './SorterButton';

const Main = () => {
  return (
    <main className='main'>
      <div className='main-body'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className='main-footer'>
        <SorterButton />
        <button>Clear List</button>
      </div>
    </main>
  );
};

export default Main;
