import { UPDATE_TEST, FETCH_QUES } from "../Actions/Types";
const initialState = {
  selectedQues: [],
  quesList: [
    {
      question: "lorem ipsum",
      category: "category1",
      topics: "DevExpress",
      difficulty: "easy",
      source: "aaa1.com",
      tags: ""
    },
    {
      question: "lorem ipsum",
      category: "category2",
      topics: "DevExpress",
      difficulty: "easy",
      source: "aaa2.com",
      tags: ""
    },
    {
      question: "lorem ipsum",
      category: "category2",
      topics: "DevExpress",
      difficulty: "easy",
      source: "aaa3.com",
      tags: ""
    },
    {
      question: "lorem ipsum",
      category: "category2",
      topics: "DevExpress",
      difficulty: "easy",
      source: "aaa4.com",
      tags: ""
    },
    {
      question: "lorem ipsum",
      category: "category3",
      topics: "DevExpress",
      difficulty: "easy",
      source: "aaa5.com",
      tags: ""
    },
    {
      question: "lorem ipsum",
      category: "category4",
      topics: "DevExpress",
      difficulty: "easy",
      source: "aaa6.com",
      tags: ""
    }
  ],
  testName: "",
  testImage: "",
  testDesc: "",
  testDuration: [],
  isPaid: false,
  published: false,
  text: "",
  category: "",
  step: 0,
  sectionalDuration: false,
  tempSelection: [],
  cacheSelection: [],
  keyWord:true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEST:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_QUES:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
