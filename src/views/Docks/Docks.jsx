import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TableList({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Bicycle Docks"
          cardSubtitle="Summary of Bicycle Docks"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={[]}
              tableData={[]}
            />
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Bicycle Docks"
          cardSubtitle="Detailed summary of bicycle dock"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={[]}
              tableData={[
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;
