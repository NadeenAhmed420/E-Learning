"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try Again</button>
      </body>
    </html>
  );
}
