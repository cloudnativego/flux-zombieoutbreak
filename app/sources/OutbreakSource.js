import uuid from 'node-uuid';
import OutbreakActions from '../actions/OutbreakActions'

var mockData = [
    {
      id: uuid.v4(),
      origin: "Station Gamma",
      severity: "Yellow",
      description: "This was bad",
      date: "03-04-2016 12:00"
    }
  ];

const OutbreakSource = {
  fetchOutbreak() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
                resolve(mockData);
            })
      },

      local() {
        return null;
      },

      success: OutbreakActions.updateOutbreak,
      error: OutbreakActions.outbreakFailed,
      loading: OutbreakActions.fetchOutbreak
    }
  }
};

export default OutbreakSource;
