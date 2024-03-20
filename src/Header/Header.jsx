import Link from "next/link";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <h2>{props.title}</h2>
        <Link href="/Founders">Founders</Link>
      </header>
    </>
  );
}
