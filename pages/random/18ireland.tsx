import sampleSize from "lodash.samplesize";
import React from "react";

import OrderedList from "~/components/ordered_list.tsx";

type Private = {
  readonly num: number;
  readonly name: string;
};

const Page: React.VFC = () => {
  const privates: readonly string[] = [
    { num: 1, name: "Dalkey Atmospheric Railway (C: £20, R: £5)" },
    { num: 11, name: "Dublin and Kingstown Railway (C: £110, R: £20)" },
  ]
    .concat(
      sampleSize(
        [
          { num: 2, name: "Donegal Railway (C: £30, R: £7)" },
          { num: 3, name: "Board of Works (C: £40, R: £9)" },
          {
            num: 4,
            name: "City of Dublin Steam Packet Company (C: £45, R: £10)",
          },
          { num: 5, name: "Tralee and Dingle Railway (C: £50, R: £10)" },
          { num: 6, name: "Drumglass Colliery Railway (C: £60, R: £12)" },
          {
            num: 7,
            name: "Trans-Atlantic Steam Packet Station (C: £75, R: £15)",
          },
          { num: 8, name: "River Shannon Shipping Company (C: £80, R: £10)" },
          { num: 9, name: "William Dargan Esq. (C: £90, R: £10)" },
          { num: 10, name: "The Irish Mail (C: £110, R: £20)" },
        ],
        3,
        undefined,
      ),
    )
    .sort((a: Private, b: Private) => a.num - b.num)
    .map((p) => `P${p.num} - ${p.name}`);

  const companies: readonly string[] = [
    "DKR - Dublin & Kingstown Railway (Dublin, I11)",
  ].concat(
    sampleSize(
      [
        "GNWR - Great Northern & Western Railway (Dromod, F10)",
        "WLR - Waterford & Limerick Railway (Limerick, D16)",
        "GJR - Grand Junction Railway (Sligo, D6)",
        "DDR - Dublin & Drogheda Railway (Dublin, I11)",
        "KJR - Kilkenny Junction Railway (Maryborough, G13)",
        "EBSR - Enniskillen, Bundoran & Sligo Railway (Enniskillen, F6)",
        "SLNCR - Sligo, Leitrim & Northern Counties Railway (Enniskillen, F6)",
        "UR - Ulster Railway (Belfast, J4)",
        "DER - Dundalk & Enniskillen Railway (Dundalk, I9)",
        "CIR - Central Ireland Railway (Maryborough, G13)",
        "LER - Londonderry & Enniskillen Railway (Londonderry, G1)",
        "CBPR - Cork, Blackrock & Passage Railway (Cork, E21)",
        "WKR - Waterford & Kilkenny Railway (Waterford, G19)",
      ],
      12,
      undefined,
    ),
  );

  return (
    <>
      <h1>18Ireland</h1>

      <OrderedList heading="Privates" list={privates} />
      <OrderedList heading="Companies" list={companies} />
    </>
  );
};

export default Page;
