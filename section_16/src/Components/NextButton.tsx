import type React from 'react';
import type {IStateData} from '../App';

const NextButton = ({
  dispatch
}: {
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
        payload?: IStateData;
      }
    ]
  >;
}) => {
  return (
    <button className='btn btn-ui' onClick={() => dispatch({type: 'NextQuestions'})}>
      Next
    </button>
  );
};

export default NextButton;
