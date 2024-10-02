export default function ObjectsPage() {
  let StudentOne = {
    studentName: "Joe",
    studentAge: 25,
    hasGraduated: false,
    schedule: ["CPRG123", "CPRG456", "CPRG789"],
    address: {
      street: "123 Elm St",
      city: "Calgary",
      postalCode: "T2A 1A",
    },
  };

  let { studentName, studentAge: Age } = StudentOne;

  return (
    <main>
      <h1>Objects</h1>
      <h2>Dot Notation</h2>
      <p>Name: {StudentOne.studentName}</p>
      <p>Age: {StudentOne.studentAge}</p>
      <p>Graduation status: {StudentOne.hasGraduated}</p>
      <p>Web Dev 2: {StudentOne.schedule[3]}</p>
      <p>city: {StudentOne.address.city}</p>
      <h2>Destructuring</h2>
      <p>Name:{studentName}</p>
      <p>Age: {Age}</p>
    </main>
  );
}
