import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="m-0 p-0">Belajar Next JS</h1>

      <Link href="./bottles">Ke Bottle</Link>
    </>
  );
}
