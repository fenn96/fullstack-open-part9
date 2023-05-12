interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (array: number[], target: number): Result => {
  let rating: number;
  let ratingDescription: string;
  const trainingDays: number = array.filter((day) => day > 0).length;
  const success: boolean = array.filter((day) => day >= target).length === array.length;
  const average: number = array.reduce((acc, current) => acc + current, 0) / array.length;

  switch(true) {
    case (average >= target):
      rating = 3;
      ratingDescription = 'Perfect';
      break;
    case (average >= target / 2):
      rating = 2;
      ratingDescription = 'Not too bad but could be better';
      break;
    default:
      rating = 1;
      ratingDescription = 'Poor';
      break;
  }
  
  const result: Result = {
    periodLength: array.length,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average
  };

  return result;
};
