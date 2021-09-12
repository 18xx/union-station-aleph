import shuffle from "lodash.shuffle";
import React from "react";

const Page: React.VFC = () => {
  const companies: readonly string[] = shuffle([
    "B&O - Baltimore & Ohio",
    "C&A - Camden & Amboy",
    "C&O - Chesapeake & Ohio",
    "LV - Lehigh Valley",
    "N&W - Norfolk & Western",
    "PRR - Pensylvania Railroad",
    "PLE - Pittsburgh and Lake Erie",
    "SRC - Strasburg",
  ]);

  return (
    <>
      <h1>18Chesapeake</h1>

      <dl>
        <dt>P6 Associated with Presidency of:</dt>
        <dd>{companies[0]}</dd>
      </dl>
    </>
  );
};

export default Page;
