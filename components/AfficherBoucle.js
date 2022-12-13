export default function AffichageBoucle() {
  const tableau = ['pomme', 'poire', 'peche', 'fraise'];

  return (
    <div>
      {tableau.map((fruit) => (
        <p>{fruit}</p>
      ))}
    </div>
  );
}
