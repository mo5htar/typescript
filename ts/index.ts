//type Annotations

let Myname: String = "ahmed";

// Parameter type annotation and return type annotation
function greet(name: string): void {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
//object type annotation and optional properties
function g(user: { name: string; age?: Number }): void {
  console.log(`${user.name} + ${user.age}`);
}

//Union Types
type userId = String | Number;

//Type Aliases
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//Generic
type StringArray = Array<string>;

function solve<T, U, F>(a: T, b: U, c: F): void {
  console.log("return ");
}

//Type Assertions
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

//type of
let ans: String = typeof Myname === "string" ? "yes" : "no";

// Utility Types
type A = Awaited<Promise<string>>;

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
