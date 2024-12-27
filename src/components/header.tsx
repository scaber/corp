import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="conteiner relative flex flex-wrap items-center justify-between mx-autı p-8">
        <Link href="/" className="font-bontd text-3xl">
          Home
        </Link>
        <div className="flex space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
