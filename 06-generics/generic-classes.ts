class ClassicalClassUser {
  constructor(
    public id: number | string | object,
    public name: string,
  ) {}
}

// with generics
class User<T, U> {
  constructor(
    public id: T,
    public name: U,
  ) {}
}

const user = new User(2, "Max");
