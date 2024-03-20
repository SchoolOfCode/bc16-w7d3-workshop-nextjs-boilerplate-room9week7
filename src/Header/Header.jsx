import Link from "next/link";
import { useState } from "react";
export default function state () {
  const onOffSwitch =
}


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
