import React from "react";

import OrderedList from "~/components/ordered_list.tsx";

import sampleSize from "lodash.samplesize";

const Page: React.VFC = () => {
  const privates: readonly string[] = [
    "P1 - IRNC",
    "P2 - Mine",
    "P4 - Ferry",
    "P6 - Oil",
  ]
    .concat(
      sampleSize(
        ["P3a - Timber", "P3b - Steamboat", "P3c - Steamship"],
        1,
        undefined,
      ),
      sampleSize(["P5a - Port", "P5b - Shovel", "P5c - Tunnel"], 1, undefined),
      sampleSize(
        [
          "P7a - Kettle Valley",
          "P7b - Camas Prairie",
          "P7c - Kaslo & Slocan",
          "P7d - Tacoma & Eastern",
          "P7e - Oregon Short Line",
        ],
        3,
        undefined,
      ),
    )
    .sort();

  return (
    <>
      <h1>18NW: Railroading in the Great Northwest</h1>

      <OrderedList heading="Private Companies" list={privates} />
    </>
  );
};

export default Page;
