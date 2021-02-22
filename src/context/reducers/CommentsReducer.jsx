export const initialState = {
  loadingComments: false,
  errorComments: false,
  loadingComment: false,
  errorComment: false,
  comments: [],
};

export const CommentsReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_COMMENT":
      return {
        ...state,
        loadingComment: true,
        errorComment: false,
      };
    case "REQUEST_COMMENTS":
      return {
        ...state,
        loadingComments: true,
        errorComments: false,
      };
    case "REQUEST_COMMENTS_FAILURE":
      return {
        ...state,
        loadingComments: false,
        errorComments: action.payload,
      };

    case "REQUEST_COMMENT_FAILURE":
      return {
        ...state,
        loadingComment: false,
        errorComment: action.payload,
      };
    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
        loadingComments: false,
      };

    case "SET_COMMENT":
      return {
        ...state,
        comment: action.payload,
        loadingComment: false,
      };

    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loadingComment: false,
      };

    case "UPDATE_COMMENT":

      let tmp = state.comments;

      tmp[tmp.findIndex(t => t._id === action.payload._id)] = action.payload;

      return {
          ...state,
          loadingComment: false,
          selected: null,
          comments: [...tmp]
      }


    case "DELETE_COMMENT":

      return {
          ...state,
          selected: null,
          loadingComment: false,
          comments: [...state.comments.filter(t => t._id !== action.payload)]
      }

    default:
      return {
        ...state,
      };
  }
};
