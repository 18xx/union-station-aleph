import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";

import ListItemLink from "./list_item_link.tsx";

const randomGames: Record<string, string> = {
  "1822": "1822",
  "1822ca": "1822 CA",
  "1822mrs": "1822 MRS",
  "1822mx": "1822 MX",
  "1822plus": "1822+",
  "1828": "1828",
  "1846": "1846",
  "1849": "1849",
  "1862ea": "1862EA",
  "18ches": "18Chesapeake",
  "18ireland": "18Ireland",
  "18newengland": "18NewEngland",
  "18nw": "18NW",
};

const Home: React.VFC =
  () => (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
      />
    </svg>
  );

const DiceMultiple: React.VFC =
  () => (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19.78,3H11.22C10.55,3 10,3.55 10,4.22V8H16V14H19.78C20.45,14 21,13.45 21,12.78V4.22C21,3.55 20.45,3 19.78,3M12.44,6.67C11.76,6.67 11.21,6.12 11.21,5.44C11.21,4.76 11.76,4.21 12.44,4.21A1.23,1.23 0 0,1 13.67,5.44C13.67,6.12 13.12,6.67 12.44,6.67M18.56,12.78C17.88,12.79 17.33,12.24 17.32,11.56C17.31,10.88 17.86,10.33 18.54,10.32C19.22,10.31 19.77,10.86 19.78,11.56C19.77,12.23 19.23,12.77 18.56,12.78M18.56,6.67C17.88,6.68 17.33,6.13 17.32,5.45C17.31,4.77 17.86,4.22 18.54,4.21C19.22,4.2 19.77,4.75 19.78,5.44C19.78,6.12 19.24,6.66 18.56,6.67M4.22,10H12.78A1.22,1.22 0 0,1 14,11.22V19.78C14,20.45 13.45,21 12.78,21H4.22C3.55,21 3,20.45 3,19.78V11.22C3,10.55 3.55,10 4.22,10M8.5,14.28C7.83,14.28 7.28,14.83 7.28,15.5C7.28,16.17 7.83,16.72 8.5,16.72C9.17,16.72 9.72,16.17 9.72,15.5A1.22,1.22 0 0,0 8.5,14.28M5.44,11.22C4.77,11.22 4.22,11.77 4.22,12.44A1.22,1.22 0 0,0 5.44,13.66C6.11,13.66 6.66,13.11 6.66,12.44V12.44C6.66,11.77 6.11,11.22 5.44,11.22M11.55,17.33C10.88,17.33 10.33,17.88 10.33,18.55C10.33,19.22 10.88,19.77 11.55,19.77A1.22,1.22 0 0,0 12.77,18.55H12.77C12.77,17.88 12.23,17.34 11.56,17.33H11.55Z"
      />
    </svg>
  );

const LeftMenu: React.VFC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const [openRandomizers, setOpenRandomizers] = useState(false);

  const randomizersOnClick: () => void = () => {
    setOpenRandomizers(!openRandomizers);
  };

  return (
    <>
      <List>
        <ListItemLink
          primary="Home"
          to="/"
          icon={<Home />}
          inset={false}
          onClick={closeMenu}
        />

        <ListItem button={true} onClick={randomizersOnClick}>
          <ListItemIcon>
            <DiceMultiple />
          </ListItemIcon>
          <ListItemText primary="Game Randomizers" />
        </ListItem>
        <Collapse in={openRandomizers} timeout="auto" unmountOnExit={true}>
          <List>
            {Object.entries(randomGames).map((g) => (
              <ListItemLink
                to={`/random/${g[0]}/`}
                primary={g[1]}
                key={g[0]}
                inset={true}
                onClick={closeMenu}
              />
            ))}
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default LeftMenu;
