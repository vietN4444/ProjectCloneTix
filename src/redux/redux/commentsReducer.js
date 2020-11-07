import { SET_COMMENTS } from "../actions/actionContants";

let initialState = {
  listComments: [
    {
      userName: "Username A",
      time: "6 ngày trước",
      vote: 2,
      comment:
        "Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vero.",
      like: 0,
    },
    {
      userName: "Username B",
      time: "9 ngày trước",
      vote: 4,
      comment:
        "Comment: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non a doloribus, sapiente omnis aliquid aperiam in nam officia quos! Amet, hic repellendus maxime eius tempora, ad temporibus adipisci reiciendis illo facere ratione sed nobis quidem dolore odio ipsam, exercitationem perspiciatis.",
      like: 1,
    },
    {
      userName: "Username C",
      time: "16 ngày trước",
      vote: 4,
      comment:
        "Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vero.",
      like: 0,
    },
    {
      userName: "Username D",
      time: "16 ngày trước",
      vote: 5,
      comment:
        "Comment: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias quae ducimus perferendis, laudantium vero facilis. Illum quo amet necessitatibus?",
      like: 3,
    },
    {
      userName: "Username E",
      time: "20 ngày trước",
      vote: 3,
      comment:
        "Comment: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis sit non eveniet obcaecati deleniti tenetur consequatur amet voluptate ipsa recusandae, accusantium laudantium ratione?",
      like: 0,
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMMENTS: {
      const newArr = [...state.listComments];
      newArr.unshift(payload);
      return { ...state, listComments: newArr };
    }
    default:
      return state;
  }
};

export default reducer;
