import { useRouteError } from "react-router-dom";

export default function  RouterError() {
  const error = useRouteError();
  console.error(error);
  return (
    <div style={{ padding: 20 }}>
      <h2>Routing error</h2>
      <pre style={{ whiteSpace: "pre-wrap", color: "crimson" }}>
        {String(error?.message ?? error)}
      </pre>
    </div>
  );
}