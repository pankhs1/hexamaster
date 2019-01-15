export const displayFlex = { display: "flex" };
export const flex1 = { flexGrow: 1 };
export const justifyCenter = { justifyContent: "center" };
export const getMargin = (dir, val) => {
  switch (dir) {
    case "top":
      return { marginTop: val };
    case "bottom":
      return { marginBottom: val };
    case "left":
      return { marginLeft: val };
    case "right":
      return { marginRight: val };
    default:
      return { margin: val };
  }
};

export const getPadding = (dir, val) => {
  switch (dir) {
    case "top":
      return { paddingTop: val };
    case "bottom":
      return { paddingBottom: val };
    case "left":
      return { paddingLeft: val };
    case "right":
      return { paddingRight: val };
    default:
      return { padding: val };
  }
};

export const alignText = dir => {
  switch (dir.toLowerCase()) {
    case "center":
      return { textAlign: dir };
    case "left":
      return { textAlign: dir };
    case "right":
      return { textAlign: dir };
    default:
      break;
  }
};
