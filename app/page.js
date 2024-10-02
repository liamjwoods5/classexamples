import Link from "next/link";

export default function Home() {
  let linkStyles = "underline text-cyan-300 hover:text-cyan-500";

  return (
    <main>
      <h1 className="text-3xl text-center">CPRG306 Class Examples</h1>
      <p>Hello World</p>
      <h2>Course Example Links</h2>
      <Link href="/week-2/" className={`${linkStyles} block mb-2`}>
        Week-2 intro to react
      </Link>
      <Link href="/Week-3/Objects/" className={`${linkStyles} block mb-2`}>
        Week-3 Objects
      </Link>
      <Link href="/Week-3/Props/" className={`${linkStyles} block mb-2`}>
        Week-3 Props
      </Link>
      <Link href="/week-4/functions/" className={`${linkStyles} block mb-2`}>
        week-4 functions
      </Link>
      <Link
        href="/week-4/simple-counter/"
        className={`${linkStyles} block mb-2`}
      >
        Week-4 Simple Counter
      </Link>
      <Link
        href="/week-4/advanced-counter/"
        className={`${linkStyles} block mb-2`}
      >
        Week-4 Advanced Counter
      </Link>
    </main>
  );
}
