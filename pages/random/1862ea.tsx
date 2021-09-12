import shuffle from "lodash.shuffle";
import React from "react";

import OrderedList from "~/components/ordered_list.tsx";

const Page: React.VFC = () => {
  const companies: readonly string[] = shuffle([
    "E&H - Ely & Huntingdon",
    "ECR - Eastern Counties Railway",
    "ENR - East Norfolk Railway",
    "ESR - East Suffolk Railway",
    "EUR - Eastern Union Railway",
    "FDR - Felixstowe Dock & Railway",
    "I&B - Ipswich & Bury Railway Black/Grey Bury",
    "L&D - Lynn & Dereham Railway",
    "L&E - Lynn & Ely Railway Red/Yellow",
    "L&H - Lynn & Hunstanton Railway Blue/Red",
    "N&B - Norwich & Brandon Railway",
    "N&E - Northern & Eastern Railway Grey/Green",
    "N&S - Norfolk & Suffolk, Joint Railway",
    "Y&N - Yarmouth & Norwich Railway Black/Red",
    "NGC - Newmarket and Great Chesterford Railway",
    "SVR - Colchester, Stour Valley, Sudbury & Halstead",
    "WNR - West Norfolk Railway",
    "W&F - Wells & Fakenham Railway",
    "WVR - Waveney Valley Railway",
    "WStI - Wisbech, St Ives & Cambridge Junction Rwy",
  ]).slice(4);

  const permits: readonly string[] = shuffle([
    "Freight",
    "Freight",
    "Freight",
    "Freight",
    "Freight",
    "Freight",
    "Express",
    "Express",
    "Express",
    "Express",
    "Express",
    "Local",
    "Local",
    "Local",
    "Local",
    "Local",
  ]);

  const pairs: readonly string[] = companies.map(
    (c, i) => `${c} (${permits[i]})`,
  );

  return (
    <>
      <h1>1862: Railway Mania in the Eastern Counties</h1>

      <OrderedList heading="Companies" list={pairs} />
    </>
  );
};

export default Page;
