import linspace from "../src/linspace"

describe('linspace', () => {
  it('linspace exists', () => {
    expect(linspace).toBeTruthy();
  });

  it('throws an error if x1 is equal to x2', () => {
    expect(() => {
      linspace(4, 4)
    }).toThrowError();

    expect(() => {
      linspace(0, 0)
    }).toThrowError();

    expect(() => {
      linspace(-1, -1)
    }).toThrowError();

    expect(() => {
      linspace(7, 7, 1);
    }).toThrowError();

    expect(() => {
      linspace(3, 3, 0);
    }).toThrowError();

    expect(() => {
      linspace(-2, -2, 4);
    }).toThrowError();
  });

  it('includes the endpoints', () => {
    const x11: number = 8;
    const x12: number = 13;
    const values1: number[] = linspace(x11, x12);
    expect(values1).toContain(x11);
    expect(values1).toContain(x12);

    const x21: number = -8;
    const x22: number = 3;
    const values2: number[] = linspace(x21, x22);
    expect(values2).toContain(x21);
    expect(values2).toContain(x22);
  });

  it('returns a descending array if x2 is less than x1', () => {
    const result1: number[] = [5, 4, 3];
    const values1: number[] = linspace(5, 3, 3);
    for (let i: number = 0; i < values1.length; i++) {
      expect(values1[i]).toBeCloseTo(result1[i]);
    }

    const result2: number[] = [4, 3, 2, 1, 0, -1, -2, -3];
    const values2: number[] = linspace(4, -3, 8);
    for (let i: number = 0; i < values2.length; i++) {
      expect(values2[i]).toBeCloseTo(result2[i]);
    }

    const result3: number[] = [-1, -2];
    const values3: number[] = linspace(-1, -2, 2);
    for (let i: number = 0; i < values3.length; i++) {
      expect(values3[i]).toBeCloseTo(result3[i]);
    }
  });

  it('returns 100 values by default', () => {
    expect(linspace(2, 3)).toHaveLength(100);
    expect(linspace(0, 13)).toHaveLength(100);
    expect(linspace(-1, 0)).toHaveLength(100);
    expect(linspace(-7, -3)).toHaveLength(100);
    expect(linspace(7, 4)).toHaveLength(100);
    expect(linspace(-9, -11)).toHaveLength(100);
  });

  it('returns x2 if n is 1', () => {
    expect(linspace(4, 7, 1)).toEqual([7]);
    expect(linspace(-1, -2, 1)).toEqual([-2]);
    expect(linspace(-1, 0, 1)).toEqual([0]);
    expect(linspace(3.14, 2.72, 1)).toEqual([2.72]);
  });

  it('returns an empty array if n is less than or equal to zero', () => {
    expect(linspace(2, 81, 0)).toEqual([]);
    expect(linspace(0, 1, 0)).toEqual([]);
    expect(linspace(-13, -2, 0)).toEqual([]);
    expect(linspace(5, -7, 0)).toEqual([]);
    expect(linspace(3, 9, -4)).toEqual([]);
    expect(linspace(-1, 0, -91)).toEqual([]);
    expect(linspace(-42, -6, -1)).toEqual([]);
    expect(linspace(-35, 6, -0.01)).toEqual([]);
  });

  it('rounds n down if n is not an integer', () => {
    expect(linspace(8, -3, 4.5)).toEqual(linspace(8, -3, 4));
    expect(linspace(0, 5, 9.99)).toEqual(linspace(0, 5, 9));
  });

  it('returns evenly spaced values in the interval', () => {
    const result: number[] = [-5.0000, -3.3333, -1.6667, 0, 1.6667, 3.3333, 5.0000];
    const values: number[] = linspace(-5, 5, 7);
    for (let i: number = 0; i < values.length; i++) {
      expect(values[i]).toBeCloseTo(result[i]);
    }
  });
});
