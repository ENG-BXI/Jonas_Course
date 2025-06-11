import {useEffect, useReducer} from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Loader from './components/Loader';
import Error from './components/Error';
import WelcomePage from './components/WelcomePage';
import Questions from './components/Questions';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';

export interface IStateData {
  questions?: IQuestionsResponse[];
  status?: 'loading' | 'active' | 'error' | 'ready' | 'done';
  index?: number;
  points?: number;
  answer?: number;
}
export interface IQuestionsResponse {
  correctOption: number;
  id: number;
  options: string[];
  points: number;
  question: string;
}
const iniState: IStateData = {
  questions: [],
  status: 'loading',
  index: 0,
  points: 0,
  answer: undefined
};

function fetchData(
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
        payload: IStateData;
      }
    ]
  >
) {
  fetch('http://localhost:5000/questions')
    .then(response => response.json())
    .then(data => {
      dispatch({payload: {questions: data as IQuestionsResponse[], status: 'ready'}, type: 'dataReceived'});
    })
    .catch(() => {
      dispatch({payload: {questions: [], status: 'error'}, type: 'error'});
    });
}

function reducer(state: IStateData, action: {type: string; payload?: IStateData}): IStateData {
  switch (action.type) {
    case 'dataReceived':
      return {...state, ...action.payload};
    case 'GoTo':
      return {...state, status: action.payload!.status, index: 0};
    case 'NewAnswer':
      return {
        ...state,
        answer: action.payload!.answer,
        points: action.payload!.answer === state.questions![state.index!].correctOption ? state.points! + state.questions![state.index!].points : state.points!,
        status: state.questions!.length - 1 === state.index ? 'done' : 'active'
      };
    case 'NextQuestions':
      return {
        ...state,
        index: state.questions!.length - 1 > state.index! ? state.index! + 1 : state.index!,
        answer: undefined
      };
    default:
      return iniState;
  }
}

function App() {
  const [{questions, status, answer, index, points}, dispatch] = useReducer(reducer, iniState);
  useEffect(() => {
    fetchData(dispatch);
  }, []);
  const numberOfQuestions = questions?.length ?? 0;
  const maxNumberOfPoint = questions?.reduce((acc, curr) => {
    return acc + curr.points;
  }, 0);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'active' && <Progress points={points!} answer={answer!} currentQuestion={index! + 1} maxNumberOfPoint={maxNumberOfPoint!} numberOfQuestions={numberOfQuestions} />}
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <WelcomePage numberOfQuestions={numberOfQuestions} dispatch={dispatch} />}
        {status === 'active' && <Questions question={questions![index!]} answer={answer} dispatch={dispatch} />}
        {answer !== undefined && status === 'active' && <NextButton dispatch={dispatch} />}
        {status === 'done' && <FinishScreen points={points!} maxNumberOfPoint={maxNumberOfPoint!} />}
      </Main>
    </div>
  );
}

export default App;
