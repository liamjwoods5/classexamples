// This is the default export of the module, a React functional component named FunctionsPage.
export default function FunctionsPage() {
  // This is a regular function named helloWorld that takes two parameters: username and dayOfWeek.
  // It returns a greeting string that includes the username and the day of the week.
  function helloWorld(username, dayOfWeek) {
    // return "Hello World! I am " + username + ", today is " + dayOfWeek;
    return `Hello World Welcome back ${username}, today is ${dayOfWeek}`;
  }

  // This is an arrow function named helloWorld2 that takes two parameters: username and dayOfWeek.
  // It returns a greeting string that includes the username and the day of the week.
  const helloWorld2 = (username, dayOfWeek) => {
    return `Hello World Welcome back ${username}, today is ${dayOfWeek}`;
  };

  // This is a concise arrow function named helloWorld3 that takes one parameter: username.
  // It returns a greeting string that includes the username.
  const helloWorld3 = (username) => `Hello World! I am ${username}`;

  // This is a concise arrow function named helloMath that takes two parameters: a and b.
  // It returns the sum of a and b.
  const helloMath = (a, b) => a + b;

  // This is an arrow function named louder that takes two parameters: textFunc and username.
  // It calls textFunc with username, converts the result to uppercase, and returns it.
  const louder = (textFunc, username) => {
    let thisText = textFunc(username);
    return thisText.toUpperCase();
  };

  // This is a higher-order function named multiplyBy that takes one parameter: num1.
  // It returns another function that takes one parameter: num2.
  // The returned function multiplies num1 and num2 and returns the result.
  const multiplyBy = (num1) => {
    return (num2) => num1 * num2;
  };

  // These are specific instances of the multiplyBy function.
  // multiplyByThree is a function that multiplies its input by 3.
  const multiplyByThree = multiplyBy(3);

  // multiplyByTen is a function that multiplies its input by 10.
  const multiplyByTen = multiplyBy(10);

  // The return statement defines the JSX structure of the component.
  // It includes a main element with several paragraphs, each displaying the result of calling one of the functions defined above.
  return (
    <main>
      <h1>Functions</h1>
      <p>{helloWorld("alice", "Friday")}</p>
      <p>{helloWorld2("bob", "Monday")}</p>
      <p>{helloWorld3("Willy")}</p>
      <p>{helloMath(5, 7)}</p>
      <p>{louder(helloWorld3, "robert")}</p>
      <p>{louder(helloWorld2, "Lil willy")}</p>
      <p>{multiplyBy(7)(1)}</p>
      <p>{multiplyByThree(7)}</p>
      <p>{multiplyByTen(7)}</p>
    </main>
  );
}
