import React, { Component } from "react";
import Upload from "../../../Components/UserMain/Admin/UploadQuestion";
import { connect } from "react-redux";
import {
  UploadQuestion,
  setQuestion
} from "../../../Store/Actions/QuestionActions";
import { setInfo as toggle } from "../../../Store/Actions/GenericActions";
class UploadQuest extends Component {
  upload = () => {
    const { quesFile, fileName } = this.props;
    const data = new FormData();
    data.append("file", quesFile);
    data.append("fileName", fileName);
    this.props.UploadQuestion(data);
  };
  closeSnackBar = data => {
    this.props.setQuestion({ uploaded: false });
  };
  setInfo = data => {
    const file = data.target.files[0];
    const extArr = ["csv"];

    if (file !== undefined) {
      const fileName = file.name;
      const ext = fileName.split(".");

      if (extArr.indexOf(ext[ext.length - 1].toLowerCase()) > -1) {
        this.props.setQuestion({ fileName, quesFile: file, uploadError: [] });
      } else {
        this.props.setQuestion({
          fileName: "",
          quesFile: null,
          uploadError: ["Invalid file type"]
        });
      }
      data.target.value = null;
    }
  };
  render() {
    return (
      <Upload
        setInfo={this.setInfo.bind(this)}
        state={this.props}
        upload={this.upload.bind(this)}
        close={this.closeSnackBar.bind(this)}
      />
    );
  }
}

const MapStateToProps = state => state.QuestionUpload;
export default connect(
  MapStateToProps,
  { UploadQuestion, setQuestion }
)(UploadQuest);
