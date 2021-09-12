import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import React from "react";

type Props = {
  readonly icon?: JSX.Element;
  readonly primary: string;
  readonly to: string;
  readonly inset: boolean;
  readonly onClick: () => void;
};

const ListItemLink: React.VFC<Props> = (
  { icon, inset, primary, to, onClick },
) => (
  <a rel="nav" href={to} onClick={onClick}>
    <ListItem>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText inset={inset} primary={primary} />
    </ListItem>
  </a>
);

export default ListItemLink;
