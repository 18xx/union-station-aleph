// deno-lint-ignore-file no-explicit-any

import React, { ComponentType } from "react";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="style/index.css" />
      </head>
      <header>
        <img src="/menu.svg" width="24" height="24" title="Menu" />
        <h6>Union Station</h6>
      </header>
      <main>
        <Page {...pageProps} />
      </main>
    </>
  );
}
