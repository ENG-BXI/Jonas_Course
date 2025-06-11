const Progress = ({currentQuestion, answer, points, maxNumberOfPoint, numberOfQuestions}: {currentQuestion: number; answer: number; maxNumberOfPoint: number; points: number; numberOfQuestions: number}) => {
  return (
    <header className='progress'>
      <progress max={numberOfQuestions} value={currentQuestion - 1 + Number(answer !== undefined)} />
      <p>
        Questions <strong>{currentQuestion}</strong> / {numberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxNumberOfPoint} Points
      </p>
    </header>
  );
};

export default Progress;
