import type {ObjectType} from '../Type/ObjectType';

const Footer = ({listOfObjects}: {listOfObjects: ObjectType[]}) => {
  // When Add New Item or Update or Delete In Items The State in App is Changed
  // so App Components is Rerender so All Of child is Rerendering
  // Here Footer Components Rerender When App State Change and Read New Value👇
  const NumberOfList = listOfObjects.length;
  const NumberOfPackedItem = listOfObjects.reduce((acc, cur) => {
    return cur.isComplete ? acc + 1 : acc;
  }, 0);
  const PercentageOfPacked = ((NumberOfPackedItem / (NumberOfList || 1)) * 100).toFixed(1);
  return (
    <footer className='footer'>
      You Have {NumberOfList} Items On Your List , And already Packed {NumberOfPackedItem} ({PercentageOfPacked}%)
    </footer>
  );
};

export default Footer;
