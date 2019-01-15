import React, { Component } from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableSelection
} from "@devexpress/dx-react-grid-material-ui";
import {
  FilteringState,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting,
  SelectionState,
  IntegratedSelection
} from "@devexpress/dx-react-grid";
import { Typography } from "@material-ui/core";
export default class TableGrid extends Component {
  render() {
    const { state } = this.props;
    const hidden = state.tempSelection.length;
    const selected = state.selectedQues.length;
    const a=[];
    return (
      <Grid
        rows={state.quesList}
        columns={[
          { name: "question", title: "Question" },
          { name: "category", title: "Category" },
          { name: "topics", title: "Topics" },
          { name: "difficulty", title: "Difficulty" },
          { name: "source", title: "Source" },
          { name: "tags", title: "Tags" }
        ]}
      >
        {hidden < 1 ? null : (
          <Typography
            variant="h6"
            style={{
              textAlign: "left",
              marginLeft: 20,
              display: "inline-block"
            }}
          >
            Rows Selected : {hidden}
          </Typography>
        )}
        {
          //   selected < 1 ?
          //  null :
          <Typography
            variant="h6"
            style={{
              textAlign: "right",
              marginLeft: 20,
              display: "inline-block"
            }}
          >
            Question Selected : {  hidden}
          </Typography>
        }
        <SelectionState
          selection={this.props.state.tempSelection}
          onSelectionChange={this.props.selection}
        />
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering />
        <SortingState defaultSorting={[]} />
        <IntegratedSorting />
        <IntegratedSelection />
        <Table />
        <TableHeaderRow showSortingControls />

        <TableSelection showSelectAll />

        <TableFilterRow />
      </Grid>
    );
  }
}
