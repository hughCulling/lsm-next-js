import Link from "next/link";

export default function Header({ status }) {
  return (
    <>
      <h1>Live Stream Music</h1>
      <hr />
      <nav>
        <Link href="/">Index</Link>
        <span> | </span>
        <Link href="sign-in">Broadcast</Link>
        <span> | </span>
        <Link href="playback">Playback</Link>
      </nav>
      <hr />
    </>
  );
}
