import Link from "next/link";
import "./Header.css";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <h3>🔥Fireplace Palace</h3>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/founders">Founders</Link>
        </p>
      </header>
    </>
  );
}
