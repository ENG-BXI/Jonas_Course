const Header = () => {
  return (
    <header>
      <div className='header-top'>
        <h1 className='header-text'>Far away</h1>
      </div>
      <div className='header-bottom'>
        <h2>What do need for your trip</h2>
        <select className='select'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <input type='text' placeholder="Item ..." />
        <button>ADD</button>
      </div>
    </header>
  );
};

export default Header;
