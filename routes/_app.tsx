import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App(props: AppProps) {
  const { Component } = props;

  return (
    <html>
      <Head>
        <link rel="stylesheet" href="../styles/tailwind.css" />
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
