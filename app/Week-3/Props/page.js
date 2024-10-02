import StudentComponent from "./student-component";
import StudentObjComponent from "./student-obj-component";

export default function PropsPage() {
  let StudentOne = {
    studentName: "Joe",
    studentAge: 25,
    hasGraduated: false,
    schedule: ["CPRG123", "CPRG456", "CPRG789"],
    address: {
      street: "123 Elm St",
      city: "Calgary",
      province: "AB",
      postalCode: "T2A 1A",
    },
  };

  let studentTwo = {
    studentName: "Alice",
    studentAge: 28,
    hasGraduated: true,
    schedule: ["CPRG987", "CPRG456", "CPRG789"],
    address: {
      city: "Edmonton",
      province: "AB",
    },
  };

  return (
    <main>
      <StudentComponent
        sName={StudentOne.studentName}
        sAge={StudentOne.studentAge}
        sCity={StudentOne.address.city}
        sProvince={StudentOne.address.province}
      />

      <StudentObjComponent studentObj={StudentOne} />
      <StudentObjComponent studentObj={studentTwo} />

      <StudentComponent
        sName="Kevin"
        sAge="28"
        sCity="Lethbridge"
        sProvince="AB"
      />
    </main>
  );
}
