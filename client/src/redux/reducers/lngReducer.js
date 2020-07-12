/**
 *  This app both ways of initializing Redux state.
 *  It has an initial state passed as the second argument of
 *  create store but each reducer has an initial state when there
 *  recive state as undefined.
 *
 */

let initial = { selected: 'es' };

const climateCardsReducer = (state = initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default climateCardsReducer;
