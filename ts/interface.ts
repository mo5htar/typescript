// interface
interface User {
  name: string;
  email: String;
  password: String;
  pic: String;
  age: Number;
}

function getUser(user: User): void {
  console.log(user.name, user.age, user.email, user.pic);
}

//Generic object type or interface

interface Box<Type> {
  contents: Type;
}

let box: Box<string>;
