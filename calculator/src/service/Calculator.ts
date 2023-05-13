export class Calculator {
  current = 0

  constructor(a: number) {
    this.current = a;
  }

  sum = (a: number): Calculator => {
    this.current += a;

    return this
  }

  minus = (a: number): Calculator => {
    this.current = this.current - a

    return this;
  }

  divide = (a: number): Calculator => {
    this.current = this.current / a;

    return this;
  }

  multiple = (a: number, b: number): Calculator => {
    this.current = this.current * a;

    return this;
  };

  clear = (): Calculator => {
    this.current = 0

    return this;
  }
}