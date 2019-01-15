import React, { Component } from "react";
import CreateTestComp from "../../../Components/UserMain/Admin/CreateTest";
import {
  updateTest,
  fetchQues
} from "../../../Store/Actions/CreateTestActions";
import { connect } from "react-redux";
class CreateTest extends Component {
  updateSelection = (e, type = "") => {
    switch (type.toLowerCase()) {
      case "textupdate":
     
      console.log(this.props.CreateTestState.text);
     /* case "blur":
      console.log("hiii");
      */
        return this.props.updateTest({ text: e });
      case "nextstep":
        const finalArray = this.getMergedArray();
        this.props.updateTest({tempSelection:this.props.CreateTestState.tempSelection});
       // console.log(this.props.CreateTestState.selectedQues.map((data) =>this.props.CreateTestState.quesList[data].category));
        return this.props.CreateTestState.step === 3
          ? null
          : this.props.updateTest({
              step: this.props.CreateTestState.step + 1,
              selectedQues: this.props.CreateTestState.tempSelection
            });
      case "prevstep":
        return this.props.CreateTestState.step === 0
          ? null
          : this.props.updateTest({
              step: this.props.CreateTestState.step - 1
            });
      case "togglepaid":
        return this.props.updateTest({
          isPaid: !this.props.CreateTestState.isPaid
        });
      case "sectionalduration":
        return this.props.updateTest({
          sectionalDuration: !this.props.CreateTestState.sectionalDuration
        });
      case "togglepublished":
        return this.props.updateTest({
          published: !this.props.CreateTestState.published
        });
      case "testname":
        return this.props.updateTest({
          testName: e.target.value
        });
      case "testimage":
        return this.props.updateTest({
          testImage: e.target.value
        });

      case "testdesc":
        return this.props.updateTest({
          testDesc: e.target.value
        });
      case "testduration":
        return this.props.updateTest({
          testDuration: [e.target.value]
        });

      default:
        this.props.updateTest({
          tempSelection: e
        });

        break;
    }
  };
  getQuestion = e => {
    const text = this.props.CreateTestState.text;
    this.props.updateTest({tempSelection:this.props.CreateTestState.tempSelection});
    console.log("hii")
    if(this.props.CreateTestState.text.length!=0)
    {
    this.props.updateTest({keyWord:false})
    }
    /*
    const tempArr = this.getMergedArray();
    console.log(this.props.CreateTestState.keWord);
    this.props.fetchQues({ text, tempSelection: [], selectedQues: tempArr });
    */
  };
  getMergedArray = () => {
    let selectedQues = this.props.CreateTestState.selectedQues;
    let tempSelection = this.props.CreateTestState.tempSelection;

    selectedQues = selectedQues.concat(
      this.props.CreateTestState.tempSelection
    );
    const tempArr = [...new Set([...tempSelection, ...selectedQues])];
    this.props.updateTest({ tempSelection: [] });
    return tempArr;
  };
  render() {
    return (
      <CreateTestComp
        state={this.props.CreateTestState}
        updateSelection={this.updateSelection.bind(this)}
        getQuestion={this.getQuestion.bind(this)}
      />
    );
  }
}

const MapStateToProps = state => {
  return { CreateTestState: state.CreateTest };
};
export default connect(
  MapStateToProps,
  {
    updateTest,
    fetchQues
  }
)(CreateTest);
