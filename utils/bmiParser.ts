interface BmiCalc {
  height: number;
  weight: number;
}
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseBmiArguments = (args: any): BmiCalc => {
  if (!args.weight || !args.height) {
    throw new Error('Parameters missing');
  }
  
  if (!isNaN(Number(args.weight)) && !isNaN(Number(args.height))) {
    return {
      weight: Number(args.weight),
      height: Number(args.height)
    };
  } else {
    throw new Error('Malformatted parameters');
  }
};
  
  