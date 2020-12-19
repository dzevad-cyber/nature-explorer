import axios from 'axios';
import * as actions from '../api/apiActions';

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const res = await axios.request({
      url,
      method,
      data,
    });

    console.log(res);
    // general
    dispatch(actions.apiCallSuccess(res.data.data));

    // specific
    if (onSuccess) dispatch({ type: onSuccess, payload: res.data.data });
  } catch (err) {
    console.log('error happend here...');
    // general
    dispatch(actions.apiCallFailed(err.message));
    // specific
    if (onError) dispatch({ type: onError, payload: err.message });
  }
};

export default api;
