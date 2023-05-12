interface ExerciseCalc {
  daily_exercises: number[];
  target: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseExerciseArguments = (args: any): ExerciseCalc => {

    if (!args.daily_exercises || !args.target) {
      throw new Error('Parameters missing');
    }

    if (!isNaN(Number(args.target) && args.daily_exercises.every((number: any) => !isNaN(Number(number))))) {
      return {
        daily_exercises: args.daily_exercises,
        target: args.target
      };
    } else {
      throw new Error('Malformatted parameters');
    }
};