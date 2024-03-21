import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script src="https://player.live-video.net/1.23.0/amazon-ivs-player.min.js" />

      <h2>Playback</h2>
      <video id="video-player" playsInline></video>
    </>
  );
}
