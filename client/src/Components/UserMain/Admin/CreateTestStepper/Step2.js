import React from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  FormControlLabel,
  Switch
} from "@material-ui/core";

export default props => {
  const { state, updateSelection, getQuestion } = props;
  const section=state.selectedQues.map((data)=>state.quesList[data].category);
  const noOfSection= new Set(section);
  console.log(Array.from(noOfSection).sort().map((data)=>data));
  return (
    <Card style={{ overflowY: "auto !important", marginBottom: 50 }}>
      <CardContent>
        <Grid container style={{ textAlign: "center" }}>
          <Grid xs={12} md={6} item>
            <TextField
              style={{ width: "80%", margin: "10px 0px" }}
              InputLabelProps={{ shrink: true }}
              label="Test Name"
              onChange={e => updateSelection.apply(null, [e, "testName"])}
              value={state.testName}
              id="testName"
            />
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ textAlign: "left", marginLeft: 60 }}
            >
              Unique Identification Name
            </Typography>
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField
              style={{ width: "80%", margin: "10px 0px" }}
              InputLabelProps={{ shrink: true }}
              label="Test Image"
              onChange={e => updateSelection.apply(null, [e, "testimage"])}
              value={state.testImage}
              id="testImage"
            />
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ textAlign: "left", marginLeft: 60 }}
            >
              Supports publicly available images
            </Typography>
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField
              style={{ width: "80%", margin: "10px 0px" }}
              InputLabelProps={{ shrink: true }}
              label="Description"
              onChange={e => updateSelection.apply(null, [e, "testDesc"])}
              value={state.testDesc}
              id="testDesc"
            />
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ textAlign: "left", marginLeft: 60 }}
            >
              Description of the test
            </Typography>
          </Grid>
          <Grid xs={12} md={6} item>
          { !state.sectionalDuration &&
            <TextField
              style={{ width: "80%", margin: "10px 0px" }}
              InputLabelProps={{ shrink: true }}
              label="Test Duration"
              onChange={e => updateSelection.apply(null, [e, "testDuration"])}
              value={state.testDuration}
              id="testDuration"
            />
          }
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ textAlign: "left", marginLeft: 60 }}
            >
              Duration in minutes.
            </Typography>
          </Grid>
          <Grid xs={12} md={6} item>
            <FormControlLabel
              style={{
                float: "left",
                marginLeft: " 7%"
              }}
              control={
                <Switch
                  checked={state.isPaid}
                  onChange={e => updateSelection.apply(null, [e, "togglepaid"])}
                  value=""
                  color="primary"
                />
              }
              label="Is Paid?"
            />
            <FormControlLabel
              style={{
                float: "right",
                marginRight: "10%"
              }}
              control={
                <Switch
                  checked={state.published}
                  onChange={e =>
                    updateSelection.apply(null, [e, "togglepublished"])
                  }
                  color="primary"
                  value=""
                />
              }
              label="Published?"
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <FormControlLabel
              style={{
                float: "left",
                marginLeft: " 7%"
              }}
              control={
                <Switch
                  checked={state.sectionalDuration}
                  onChange={e =>
                    updateSelection.apply(null, [e, "sectionalduration"])
                  }
                  value=""
                  color="primary"
                />
              }
              label="Sectional Duration?"
            />
            {
              state.sectionalDuration && Array.from(noOfSection).sort().map((data)=>
              <TextField
              style={{ width: "60%", margin: "10px 0px" }}
              InputLabelProps={{ shrink: true }}
              label={data} 
              onChange={e => updateSelection.apply(null, [e, "testDuration"])}
              value={state.testDuration}
              id="testDuration"
            />
              )
            }
          </Grid>
          <Grid xs={12} item>
            <span style={{ float: "left" }}>
              <Button
                variant="contained"
                style={{
                  margin: "20px 0px"
                }}
                color="primary"
                onClick={e => updateSelection.apply(null, [e, "prevstep"])}
              >
                Back
              </Button>
            </span>
            <span style={{ flexGrow: 1 }} />
            <span style={{ float: "right" }}>
              <Button
                variant="contained"
                style={{
                  margin: "20px 0px"
                }}
                color="primary"
               /* disabled={
                  (state.testName.length > 0) &
                  (state.testDesc.length > 0) &
                  (state.testImage.length > 0) 
                  
                    ? false
                    : true
                }
                */
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
