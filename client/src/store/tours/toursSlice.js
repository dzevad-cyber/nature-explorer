import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api/apiActions';
import moment from 'moment';

const toursSlice = createSlice({
  name: 'tours',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    toursRequested: (tours, action) => {
      tours.loading = true;
    },
    toursReceived: (tours, action) => {
      tours.list = action.payload.tours;
      tours.loading = false;
      tours.lastFetch = Date.now();
    },
    toursReqFailed: (tours, action) => {
      tours.loading = false;
    },
    tourAdded: (tours, action) => {
      tours.list.push(action.payload.tour);
    },
  },
});

const {
  toursReceived,
  toursRequested,
  toursReqFailed,
  tourAdded,
} = toursSlice.actions;

const url = '/api/v1/tours';

export const loadTours = () => (dispatch, getState) => {
  const { lastFetch } = getState().tours;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: toursRequested.type,
      onSuccess: toursReceived.type,
      onError: toursReqFailed.type,
    })
  );
};

export const addTour = tour =>
  apiCallBegan({
    url,
    method: 'post',
    data: tour,
    onSuccess: tourAdded.type,
  });

// selectors
export const getTours = state => state.tours.list;

export default toursSlice.reducer;
