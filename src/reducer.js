import * as actions from "./actions";

export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_USER:
      return { ...state, ...payload };

    case actions.SET_TOKEN:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
