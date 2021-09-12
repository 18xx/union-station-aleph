import { Tab, Tabs } from "@material-ui/core";

import range from "lodash.range";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  readonly initialValue: number;
  readonly minPlayers: number;
  readonly maxPlayers: number;
  readonly setNumPlayers: Dispatch<SetStateAction<number>>;
};

const PlayerSelector: React.VFC<Props> = ({
  initialValue,
  minPlayers,
  maxPlayers,
  setNumPlayers,
}) => {
  const onChange: (event: ChangeEvent<unknown>, value: number) => void = (
    _,
    value,
  ) => {
    setNumPlayers(value);
  };

  return (
    <>
      <Tabs value={initialValue} onChange={onChange}>
        {range(minPlayers, maxPlayers + 1).map((
          n: number,
        ) => <Tab key={n} value={n} label={`${n} Player`} />)}
      </Tabs>
    </>
  );
};
export default PlayerSelector;
