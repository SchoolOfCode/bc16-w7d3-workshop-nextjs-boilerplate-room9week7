import Link from "next/link";
import "./Header.css";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <h3>{props.title}</h3>
        <Link href="/Founders">Founders</Link>
      </header>
    </>
  );
}
