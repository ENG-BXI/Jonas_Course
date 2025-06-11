const FinishScreen = ({points, maxNumberOfPoint}: {points: number; maxNumberOfPoint: number}) => {
  return (
    <p className='result'>
      You Scored <strong>{points}</strong> out of {maxNumberOfPoint} ({Math.ceil((points / maxNumberOfPoint) * 100)}%)
    </p>
  );
};

export default FinishScreen;
