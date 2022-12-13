export default function Condition() {
  const monBoolean = true;

  return <div>{monBoolean ? <p>Hello!</p> : <p>Text jamais afficher</p>}</div>;
}
