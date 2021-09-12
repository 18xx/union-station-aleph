import shuffle from "lodash.shuffle";
import React from "react";

import OrderedList from "~/components/ordered_list.tsx";

const Page: React.VFC = () => {
  const concessions: readonly string[] = [
    "CPR - Canadian Pacific Railway",
  ].concat(
    shuffle([
      "CNoR - Canadian Northern Railway",
      "GNWR - Great North West Railway",
      "GT - Grand Trunk Railway Toronto",
      "GTP - Grand Trunk Pacific Railway",
      "GWR - Great Western Railway Hamilton",
      "ICR - Intercolonial Railway Halifax",
      "NTR - National Transcontinental Railway",
      "PGE - Pacific Great Eastern Railway Vancouver",
      "QMOO - Quebec, Montreal, Ottawa and Occidental Railway",
    ]),
  );

  const minors: readonly string[] = ["M6 - La Prairie (AH13)"].concat(
    shuffle([
      "M1 - Halifax (AQ4)",
      "M2 - Saint John (AO6)",
      "M3 - Edmunston (AL3)",
      "M4 - Sherbrooke (AI12)",
      "M5 - Quebec (AI8)",
      "M7 - Montreal (AG12)",
      "M8 - Ottawa (AF15)",
      "M9 - Ottawa (AF15)",
      "M10 - Peterborough (AE20)",
      "M11 - Buffalo (AD23)",
      "M12 - Toronto (AD21)",
      "M13 -Toronto (AD21)",
      "M14 - London (AB25)",
      "M15 - North Bay (AB15)",
      "M16 - Windsor (AA28)",
      "M17 - Sudbury (Z15)",
      "M18 - Timmins (Y12)",
      "M19 - Sault Ste Marie (W18)",
      "M20 - Duluth (Q18)",
      "M21 - Winnipeg (N16)",
      "M22 - Churchill (N6)",
      "M23 - Prince Albert (K11)",
      "M24 - Saskatoon (J12)",
      "M25 - Lethbridge (G17)",
      "M26 - Calgary (G15)",
      "M27 - Edmonton (G11)",
      "M28 - Kamloops (D14)",
      "M29 - Prince George (D10)",
      "M30 - Prince Rupert (A7)",
    ]),
  );

  const privates: readonly string[] = ["P1 (permanent 5-train)"].concat(
    shuffle([
      "P2 (permanent L-train)",
      "P3 (permanent 2-train)",
      "P4 (permanent 2-train)",
      "P5 (pullman)",
      "P6 (pullman)",
      "P7 (double cash SR order / treasury)",
      "P8 ($10 / phase based payments)",
      "P9 ($5 / phase based payments)",
      "P10 (Winnipeg Station)",
      "P11 (tax haven)",
      "P12 (advanced track)",
      "P13 (sawmill)",
      "P14 (free Toronto upgrades)",
      "P15 (free Ottawa upgrades)",
      "P16 (free Montreal upgrades)",
      "P17 (free Quebec upgrades)",
      "P18 (free Winnipeg upgrades)",
      "P19 (Crowsnest Pass tile)",
      "P20 (Yellowhead Pass tile)",
      "P21 (3-Tile Grant)",
      "P22 (Large Mail Contract)",
      "P23 (Large Mail Contract)",
      "P24 (Small Mail Contract)",
      "P25 (Small Mail Contract)",
      "P26 (Grain Train)",
      "P27 (Grain Train)",
      "P28 (station marker swap)",
      "P29 (remove small station)",
      "P30 (remove small station)",
    ]),
  );

  return (
    <>
      <h1>1822 CA</h1>

      <OrderedList heading="Concessions" list={concessions} />
      <OrderedList heading="Minors" list={minors} />
      <OrderedList heading="Privates" list={privates} />
    </>
  );
};

export default Page;
