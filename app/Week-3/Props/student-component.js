export default function StudentComponent({ sName, sAge, sCity, sProvince }) {
  return (
    <div className="mb-10 bg-slate-600 p-5 border border-white ">
      <h3>Name: {sName}</h3>
      <p>Age: {sAge} </p>
      <p>city: {sCity}</p>
      <p>province: {sProvince}</p>
    </div>
  );
}
