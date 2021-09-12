import React from "react";

type OrderedListProps = {
  readonly heading: string;
  readonly list: readonly string[];
};

const OrderedList: React.VFC<OrderedListProps> = ({ heading, list }) => (
  <>
    <h3>{heading}</h3>
    <ol>
      {list.map((str, idx) => <li key={idx}>{str}</li>)}
    </ol>
  </>
);

export default OrderedList;
