/**
 * Returns an array of n values between x1 and x2 including the endpoints.
 * 
 * @param  x1 First endpoint.
 * @param  x2 Second endpoint.
 * @param  n  Total number of values.
 * @return    Array of n values between x1 and x2 including the endpoints.
 */
export default function linspace(
  x1: number,
  x2: number,
  n: number = 100,
): number[] {
  /* Assure that the endpoints are not equal. */
  if (x1 === x2) {
    throw new Error('The endpoints of linspace must not be equal.');
  }

  /* Round down n if it is not an integer. */
  n = Math.floor(n);

  /* Return x2 if n is equal to 1. */
  if (n === 1) return [x2];

  /* Initialize linspace. */
  const ys: number[] = [];

  /* Determine values. */
  for (let i: number = 0; i < n; i++) {
    /* Determine next value. */
    const lambda: number = i / (n - 1);
    ys.push(
      (1 - lambda) * x1 + lambda * x2
    );
  }

  /* Return results. */
  return ys;
}
