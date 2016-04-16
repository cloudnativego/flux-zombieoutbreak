import alt from '../lib/alt';
import uuid from 'node-uuid';

class OutbreakActions {
  updateOutbreak(outbreak) {
    return outbreak;
  }

  fetchOutbreak() {
    return [];
  }

  deleteOutbreak(outbreak) {
    return outbreak;
  }

  changeOutbreak(outbreak) {
    return outbreak;
  }

  outbreakFailed(errorMessage) {
    return errorMessage;
  }

  addOutbreak() {
    var d = new Date();
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
      d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    var newOutbreak =
      {
        id: uuid.v4(),
        origin: "Station Gamma",
        severity: "Yellow",
        description: "This was bad",
        date: datestring
      };
      return newOutbreak
    }
}

export default alt.createActions(OutbreakActions);
