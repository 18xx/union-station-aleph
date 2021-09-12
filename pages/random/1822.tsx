import shuffle from "lodash.shuffle";
import React from "react";

import OrderedList from "~/components/ordered_list.tsx";

const Page: React.VFC = () => {
  const concessions: readonly string[] = [
    "LNWR - London and North West Railway",
  ].concat(
    shuffle([
      "GWR - Great Western Railway",
      "LBSCR - London, Brighton and South Coast Railway",
      "SECR - South Eastern & Chatham Railway",
      "CR - Caledonian Railway",
      "MR - Midland Railway",
      "L&YR - Lancashire & Yorkshire",
      "NBR - North British Railway",
      "SWR - South Wales Railway",
      "NER - North Eastern Railway",
    ]),
  );

  const minors: readonly string[] = ["M24 - Swansea (D35)"].concat(
    shuffle([
      "M1 - Aberdeen (H1)",
      "M2 - Highlands (E2-4)",
      "M3 - Edinburgh (H5)",
      "M4 - Newcastle (K10)",
      "M5 - Darlington (J15)",
      "M6 - Barrow (G16)",
      "M7 - Warrington (H23)",
      "M8 - Sheffield (K24)",
      "M9 - Grimsby (N29)",
      "M10 - Birmingham (I30)",
      "M11 - Peterborough (M30)",
      "M12 - Ipswich (P35)",
      "M13 - Maidstone (O40)",
      "M14 - London (Optional) (M38)",
      "M15 - London (NE) (M38)",
      "M16 - London (NW) (M38)",
      "M17 - Southampton (J41)",
      "M18 - Bournemouth (I42)",
      "M19 - Cardiff (F35)",
      "M20 - Pontypool (F33)",
      "M21 - Merthyr Tydfil (E34)",
      "M22 - Exeter (D41)",
      "M23 - Plymouth (A42)",
    ]),
  );

  const privates: readonly string[] = ["P1 (permanent 5-train)"].concat(
    shuffle([
      "P2 (remove small station)",
      "P3 (permanent 2-train)",
      "P4 (permanent 2-train)",
      "P5 (token EC)",
      "P6 (mail contract)",
      "P7 (mail contract)",
      "P8 (Hill/mountain)",
      "P9 (double cash SR order / treasury)",
      "P10 (estuary)",
      "P11 (advanced track)",
      "P12 (additional track)",
      "P13 (Pullman)",
      "P14 (Pullman)",
      "P15 (£10 / phase based payments)",
      "P16 (tax haven)",
      "P17 (adjust certificate order)",
      "P18 (token exchange)",
    ]),
  );

  return (
    <>
      <h1>1822 (Standard)</h1>

      <OrderedList heading="Concessions" list={concessions} />
      <OrderedList heading="Minors" list={minors} />
      <OrderedList heading="Privates" list={privates} />
    </>
  );
};

export default Page;
