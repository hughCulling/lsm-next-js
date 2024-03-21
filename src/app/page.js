function Content({ title }) {
  return <h2>{title}</h2>;
}

export default function HomePage() {
  return (
    <div>
      <Content title="Index" />
    </div>
  );
}
