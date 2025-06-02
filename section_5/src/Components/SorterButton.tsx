const SorterButton = ({Sort, setSort}: {Sort: 'input' | 'text' | 'packed'; setSort: React.Dispatch<React.SetStateAction<'input' | 'text' | 'packed'>>}) => {
  return (
    <select value={Sort} onChange={e => setSort(e.target.value as 'input' | 'text' | 'packed')} defaultValue={0} className='sorter-button'>
      <option value='input'>Sort By Input Order</option>
      <option value='text'>Sort By Text Order</option>
      <option value='packed'>Sort By Packed Order</option>
    </select>
  );
};

export default SorterButton;
