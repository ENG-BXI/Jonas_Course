import React from 'react';
import type {IQuestionsResponse, IStateData} from '../App';
import Options from './Options';

const Questions = ({
  question,
  answer,
  dispatch
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
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Questions;
