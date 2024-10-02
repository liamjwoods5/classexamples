export default function StudentObjComponent({ studentObj }) {
  let {
    studentName: Name,
    studentAge: Age,
    address: { city, province },
  } = studentObj;

  return (
    <div className="bg-green-600 inline-block mb-10 mt-5 mx-5 p-5 border border-white ">
      <h1>{Name}</h1>
      <p>{Age}</p>
      <p>
        {city}, {province}
      </p>
    </div>
  );
}
