import type {IStateData} from '../App';

const WelcomePage = ({
  numberOfQuestions,
  dispatch
}: {
  numberOfQuestions: number;
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
        payload: IStateData;
      }
    ]
  >;
}) => {
  return (
    <div className='start'>
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React mastery</h3>
      <button
        className='btn btn-ui'
        onClick={() => {
          dispatch({type: 'GoTo', payload: {status: 'active'}});
        }}
      >
        Lets Start
      </button>
    </div>
  );
};

export default WelcomePage;
