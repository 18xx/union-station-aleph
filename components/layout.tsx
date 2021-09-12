import React, { VFC } from "react";

type Props = {
  readonly children: React.ReactChild | React.ReactChildren;
};

const Layout: VFC<Props> = ({ children }) => (
  <>
    <head>
      <title>Union Station - 18xx Randomizer</title>
      <link rel="stylesheet" href="../style/index.css" />
    </head>
    <body>
      <header>
        Union Station
      </header>
      <main>{children}</main>
    </body>
  </>
);

export default Layout;
