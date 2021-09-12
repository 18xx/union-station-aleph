import sampleSize from "lodash.samplesize";
import shuffle from "lodash.shuffle";
import React from "react";

import OrderedList from "~/components/ordered_list.tsx";

const Page: React.VFC = () => {
  const concessions: readonly string[] = ["FCM - Ferrocarril Mexicano"].concat(
    shuffle([
      "MC - Mexican Central Railway",
      "CHP - Chihuahua-Pacific Railway",
      "FNM - Ferrocarriles Nacionales de México",
      "MIR - Mexican International Railroad",
      "FCP - Ferrocarril del Pacífico",
      "IRM - Interoceanic Railway of Mexico",
    ]),
  );

  const minors: readonly string[] = shuffle(
    [
      "M1 - Tijuana (B1)",
      "M2 - Ciudad Juarez (D2)",
      "M3 - Hermosillo (E8)",
      "M4 - Cuauhtemoc (F13)",
      "M5 - Nuevo Laredo (G22)",
      "M6 - Los Mochis (H11)",
      "M7 - Monterrey (I22)",
      "M8 - La Paz (J9)",
      "M9 - Mazatlán (J13)",
      "M10 - San Luis Potosi (K20)",
      "M11 - Guadalajara (L17)",
      "M12 - Guanajuato (L19)",
      "M13 - León (L19)",
      "M16 - Tlaxcala (N25)",
      "M19 - Veracruz (N27)",
      "M20 - Acapulco (Q23)",
      "M21 - Oaxaca (Q27)",
      "M22 - Villahermosa (P32)",
      "M23 - Merida (L37)",
      "M24 - Guatemala (R34)",
    ].concat(
      sampleSize(
        [
          "M14 - Mexico City (N23)",
          "M15 - Mexico City (N23)",
          "M17 - Puebla (N25)",
        ],
        2,
        undefined,
      ),
    ),
  );

  const privates: readonly string[] = ["P1 (Permanent 5-train)"].concat(
    shuffle([
      "P2 (Permanent L-Train)",
      "P3 (Permanent 3/2-Train)",
      "P4 (Permanent 2-train)",
      "P5 (Pullman)",
      "P6 (Pullman)",
      "P7 (Declare 2x Cash Holding / Revenue)",
      "P8 (Advanced Tile Lay)",
      "P9 (Extra Tile Lay)",
      "P10 (Three Builder Cubes)",
      "P11 (Three Builder Cubes)",
      "P12 (Remove Town)",
      "P13 (Remove Town)",
      "P14 (Mail Contract)",
      "P15 (Mail Contract)",
      "P16 (Stock Drop)",
      "P17 (Small Port)",
      "P18 (Large Port)",
    ]),
  );

  return (
    <>
      <h1>1822MX</h1>

      <OrderedList heading="Concessions" list={concessions} />
      <OrderedList heading="Minors" list={minors} />
      <p>
        M18 Sold with FCM Concession. Remaining minor in pool as an NdeM share.
      </p>
      <OrderedList heading="Privates" list={privates} />
    </>
  );
};

export default Page;
