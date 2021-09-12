// deno-lint-ignore-file no-explicit-any

import React, { ComponentType } from "react";
import Header from "~/components/header.tsx";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="style/index.css" />
      </head>
      <Header siteTitle="Union Station" />
      <main>
        <Page {...pageProps} />
      </main>
    </>
  );
}
