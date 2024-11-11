# Union Types:

Union types allow us use a value to be one of the several types. we can use the | symbol to define a union type.

### Significance:

* Union types let us work with variables that can hold more than one type, adding flexibility to our code.

* we can ensure that variables and function parameters are one of the specified types, reducing the runtime errors.

* we can handle multiple types without complex type checks or casting.

### Example:
```
type Result = string | number;

function printResult(result: Result) {
    if (typeof result === "string") {
        console.log(`String result: ${result}`);
    } else {
        console.log(`Number result: ${result}`);
    }
}

printResult("Success"); // String result: Success
printResult(50);        // Number result: 50
```

# Intersection Types

Intersection types combine multiple types into one. We can use the & symbol to define an intersection type.

### Significance:

* Intersection types allow us to create types that are combinations of multiple interfaces, providing a way to merge characteristics.

* Intersection types ensure that a variable meets all the constraints of the intersected types, increasing type safety.

### Example: 

```
interface Nameable {
    name: string;
}

interface Ageable {
    age: number;
}

type Person = Nameable & Ageable;

const person: Person = { name: "Alice", age: 25 };

function printPerson(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}

printPerson(person); // Output: Name: Alice, Age: 25
```