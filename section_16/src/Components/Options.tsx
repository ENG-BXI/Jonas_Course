import type {IQuestionsResponse, IStateData} from '../App';

const Options = ({
  question,
  dispatch,
  answer
}: {
  question: IQuestionsResponse;
  answer?: number;
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
    <div className='options'>
      {question.options.map((option, index) => (
        <button key={index} disabled={answer !== undefined} onClick={() => dispatch({type: 'NewAnswer', payload: {answer: index}})} className={`btn btn-option ${index === answer ? 'answer' : ''} ${answer !== undefined ? (index === question.correctOption ? 'correct' : 'wrong') : ''}`}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
