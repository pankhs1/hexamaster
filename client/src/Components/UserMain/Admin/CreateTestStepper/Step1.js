import React from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import TableGrid from "../../../../Containers/TableGrid";

export default props => {
  const { state, updateSelection, getQuestion } = props;
  console.log(state.step);
  return (
    <Card style={{ overflowY: "auto !important", marginBottom: 50 }}>
      <CardContent>
        <Grid container style={{ textAlign: "center" }}>
          <Grid md={3} sm={false} xs={false} item />
          <Grid xs={12} sm={12} md={6} item>
            <TextField
              style={{ width: "80%", margin: "20px 0px 30px" }}
              placeholder="Search By Keyword"
              onBlur={getQuestion}
              onChange={e =>
                updateSelection.apply(null, [e.target.value, "textupdate"])
              }
            />
            <Select
              style={{
                width: "80%",
                margin: "20px 0px 30px",
                textAlign: "left",
                textIndent: 10
              }}
              disabled={state.keyWord}
              value={10}
              onChange={this.handleChange}
              inputProps={{
                name: "category",
                id: "category-sel"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>category one</MenuItem>
              <MenuItem value={20}>category two</MenuItem>
              <MenuItem value={30}>category Three</MenuItem>
              <MenuItem value={30}>category Four</MenuItem>

            </Select>
          </Grid>
          <Grid xs item>
            <TableGrid selection={updateSelection} state={state} />

            <span style={{ display: "block", textAlign: "right" }}>
              <Button
                variant="contained"
                style={{
                  margin: "10px 0px"
                }}
                color="primary"
               disabled={
                  state.tempSelection.length > 0 ||
                  state.selectedQues.length > 0
                    ? false
                    : true
                }
                
                onClick={e => updateSelection.apply(null, [e, "nextstep"])}
              >
                Next
              </Button>
            </span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
