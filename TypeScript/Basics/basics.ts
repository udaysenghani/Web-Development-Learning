/*
TypeScript Complete Guide
Single File Notes for JavaScript Developers
Author: Uday Senghani
*/

/*
What is TypeScript
TypeScript is a superset of JavaScript
It adds static typing
It is developed by Microsoft
It compiles to JavaScript
*/

/*
Basic Data Types
*/

let username: string = "Uday";
let age: number = 22;
let isLoggedIn: boolean = true;

// Arrays
let skills: string[] = ["JavaScript", "TypeScript"];
let scores: Array<number> = [80, 90, 100];

// Tuple
let userTuple: [number, string] = [1, "Admin"];

/*
Type Inference
TypeScript automatically infers the type
*/

let count = 10;
// count = "ten"; Error

/*
any vs unknown
any disables type safety
unknown forces type checking
*/

// any example
let x: any = 10;
x = "hello";
x.toUpperCase();

// unknown example
let y: unknown = 10;

if (typeof y === "number") {
  console.log(y + 1);
}

/*
Union and Literal Types
*/

let id: number | string;
id = 101;
id = "A101";

let status: "success" | "error" | "loading";
status = "success";

/*
Functions in TypeScript
*/

function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): void => {
  console.log("Hello " + name);
};

function login(email: string, password?: string): void {
  console.log(email, password);
}

function multiply(a: number, b: number = 2): number {
  return a * b;
}

/*
Object Types
*/

let userObj: { id: number; name: string } = {
  id: 1,
  name: "Uday"
};

/*
Interfaces
*/

interface User {
  id: number;
  name: string;
  email?: string;
}

const user1: User = {
  id: 1,
  name: "Uday"
};

interface Admin extends User {
  role: string;
}

const admin1: Admin = {
  id: 2,
  name: "Admin",
  role: "SUPER_ADMIN"
};

/*
Type Alias
*/

type StatusType = "success" | "error" | "loading";

let apiStatus: StatusType = "success";

/*
Enums
*/

enum Role {
  ADMIN,
  USER,
  GUEST
}

let myRole: Role = Role.ADMIN;

enum HttpStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500
}

/*
Classes and OOP
*/

class Person {
  constructor(
    public name: string,
    private age: number
  ) {}

  getAge(): number {
    return this.age;
  }
}

const p1 = new Person("Uday", 22);

/*
Readonly and Optional Properties
*/

interface Product {
  readonly id: number;
  name?: string;
}

const product1: Product = {
  id: 101,
  name: "Laptop"
};

/*
Generics
*/

function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Hello");

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<User> = {
  data: user1,
  status: 200
};

/*
Type Assertions
*/

let value: unknown = "TypeScript";

let str1 = value as string;
console.log(str1.toUpperCase());

let str2 = <string>value;

/*
never type
Used when function never returns
*/

function throwError(message: string): never {
  throw new Error(message);
}

/*
Null and Undefined
*/

let data: string | null = null;

interface Profile {
  email?: string;
}

interface Account {
  profile?: Profile;
}

const account: Account = {};

console.log(account.profile?.email);

let displayName = username ?? "Guest";

/*
tsconfig reference

{
  "compilerOptions": {
    "target": "ES6",
    "strict": true,
    "outDir": "dist",
    "rootDir": "src"
  }
}
*/

/*
TypeScript with Express reference

import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript");
});
*/

/*
Final Notes
Avoid any
Use unknown
Use interface for objects
Use type for unions
Use generics for reusable code
Enable strict mode
TypeScript is safer JavaScript
*/
