import React from "react";

const Bascis = () => {
  // Bascis typescript
  // Basics types

  let firstName: string;
  firstName = "Nithin";

  let age: number = 28;
  let isReactDeveloper: boolean = true;
  let hobbies: string[]; // array of strings
  hobbies = ["coding", "sleeping"];

  // union type
  /**
   * A union type describes a value that can be one of several types.
   * We use the vertical bar (|) to separate each type,
   * so number | string | boolean is the type of a value that can be a number, a string, or a boolean.
   */

  let currentAge: number | string;
  currentAge = "5"; // currentAge = 5;

  // tuples
  /**
   *
   * Typically an array contains zero to many objects of a
   * single type. TypeScript has special analysis around
   * arrays which contain multiple types, and where the order
   * in which they are indexed is important.
   *
   * These are called tuples. Think of them as a way to
   * connect some data, but with less syntax than keyed objects.
   */

  let role: [string, number];
  role = ["test", 5];

  //object

  let person1: Object; // not the recommended way

  // Type Aliases
  /**
   *
   * Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces,
   * but can name primitives, unions, tuples, and any other types that you'd otherwise have to
   * write by hand. Aliasing doesn't actually create a new type -
   * it creates a new name to refer to that type
   */

  type Person = {
    name: string;
    age?: number; // optional
  };

  let person: Person = {
    name: "nithin",
    age: 28,
  };

  let person2: Person = {
    name: "Nithin",
  };

  // function type

  let printName: Function;

  let printNames: (name: string) => void; // retuns undefined
  let funName: (name: string) => never; // doesnt return anything

  // function printName(name: string) {
  //   console.log(name);
  // }

  // any type
  /**
   *
   */

  // unknown type
  /**
   * TypeScript 3.0 introduced a new unknown type which is the type-safe counterpart of the any type.
   */
  let value: any;

  // interface
  interface Persons {
    name: string;
    age?: number;
  }

  type X = {
    a: string;
    b: number;
  };
  type Y = X & {
    // have properties of X and Y
    c: string;
    d: number;
  };

  interface Professional extends Persons {
    job: string;
  }
  let testUser: Professional = {
    name: "test name",
    age: 26,
    job: "test job",
  };
  return <></>;
};

export default Bascis;
