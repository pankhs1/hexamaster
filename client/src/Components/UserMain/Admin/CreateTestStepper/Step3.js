import React from "react";
import Paper from '@material-ui/core/Paper';
import { Typography } from "@material-ui/core";
import {table} from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  Grid,
    Table,
    TableHeaderRow,
    TableFilterRow,
    TableSelection
  } from "@devexpress/dx-react-grid-material-ui";
  import {
    SortingState,
    IntegratedSorting,
  } from '@devexpress/dx-react-grid';
  import {
    Card,
    CardContent,
    
    TextField,
    Select,
    MenuItem,
    Button
  } from "@material-ui/core";
export default props => {
  const { state, updateSelection, getQuestion } = props;
  console.log(state.step);
  const section=state.selectedQues.map((data)=>state.quesList[data]);
  const noOfSection= new Set(state.selectedQues.map((data)=>state.quesList[data].category));
  console.log(state.sectionalDuration);
 

  
  return (
    <Card style={{ overflowY: "auto !important", marginBottom: 50 }}>
      <CardContent>
        { !state.sectionalDuration &&
      <Paper>
        <Grid
        
          rows={section}
          columns={[
            { name: 'question', title: 'Question' },
            { name: 'category', title: 'Section' },
            { name: 'topics', title: 'Topic' },
            { name: 'difficulty', title: 'Difficulty' },
          ]}
        >
        <Typography
            variant="h6"
            style={{
              textAlign: "center",
              marginLeft: 20,
              display: "inline-block"
            }}
          >
           Total Questions  : {state.selectedQues.length}
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: "right",
              marginLeft: 20,
              display: "inline-block"
            }}
          >
           Total Time  : {state.testDuration}
          </Typography>
          
          <SortingState
            defaultSorting={[{ columnName: 'category', direction: 'asc' }]}
          />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Paper>
       
          }

          {
            state.sectionalDuration &&
            Array.from(noOfSection).map((data)=>
            
           
            <div>
            <paper>
              
            <Typography
            variant="h6"
            style={{
              textAlign: "center",
              marginLeft: 20,
              display: "inline-block"
            }}
          >
           {data}
          </Typography>
         
              <table > 
 <TableHead>
                  <TableRow>
                  <TableCell>Question</TableCell>
                  <TableCell>difficulty</TableCell>
                  <TableCell>topic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {section.map((x)=>x.category===data &&
                  <TableRow>

                  <TableCell>
                    {x.question}
                  </TableCell>
                  <TableCell>
                    {x.difficulty}
                  </TableCell>
                  <TableCell>
                    {x.topics}
                  </TableCell>
                  </TableRow>
                  )
                }
                  </TableBody>
              </table>
              
            
              
            </paper>
            <hr/>
            </div>
            
            
           
              
              
            
          
            
            )
             
          }
        



      <div>
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
                disabled={
                  (state.testName.length > 0) &
                  (state.testDesc.length > 0) &
                  (state.testImage.length > 0) 
                  
                    ? false
                    : true
                }
                onClick={e => updateSelection.apply(null, [e, "nextstep"])}
              >
                Create Test
              </Button>
            </span>
          </div>
            
      </CardContent>
    </Card>
  );
};
