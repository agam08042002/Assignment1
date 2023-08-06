import React from "react";
import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

// Create a map to associate order IDs with orderSubmitted dates
const timestampsMap = {
  "SE|20221104|179|9:1:NEWO": "2022-11-04T15:29:00Z",
  // Add other order IDs and orderSubmitted dates here
};

const List = ({ rows }) => {
  return (
    <table className={styles.container}>
      <tbody>
  {rows.map((row) => (
    <ListRow key={row["&id"]}>
      {/* ... Render cells ... */}
    </ListRow>
  ))}
</tbody>

      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow key={row["&id"]}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>
              {timestampsMap[row["&id"]] || "Data unavilable"} 
            </ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
