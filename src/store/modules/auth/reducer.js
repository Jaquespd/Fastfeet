import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SING_IN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/SING_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    case '@auth/SING_OUT':
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      });
    case '@auth/SING_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
