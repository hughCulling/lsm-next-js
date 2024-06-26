import Link from "next/link";

export default function Header({ status }) {
  return (
    <>
      <h1>Live Stream Music</h1>
      <hr />
      <nav>
        <Link href="/">Index</Link>
        <span> | </span>
        <Link href="sign-up">Sign Up</Link>
        <span className="status">User: not signed in</span>
      </nav>
      <hr />
    </>
  );
}
