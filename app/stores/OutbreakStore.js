import alt from '../lib/alt';
import OutbreakSource from '../sources/OutbreakSource'
import OutbreakActions from '../actions/OutbreakActions';

class OutbreakStore {
  constructor() {
   this.outbreaks = [];
   this.errorMessage = null;

   this.bindListeners({
     handleUpdateOutbreaks: OutbreakActions.UPDATE_OUTBREAK,
     handleFetchOutbreak: OutbreakActions.FETCH_OUTBREAK,
     handleOutbreakFailed: OutbreakActions.OUTBREAK_FAILED,
     handleChangeOutbreak: OutbreakActions.CHANGE_OUTBREAK,
     handleDeleteOutbreak: OutbreakActions.DELETE_OUTBREAK,
     handleAddOutbreak: OutbreakActions.ADD_OUTBREAK
   });

   this.exportAsync(OutbreakSource)
  }

  handleDeleteOutbreak(outbreak) {
    this.outbreaks =  this.outbreaks.filter(target => target.id !== outbreak.id)
  }

  handleAddOutbreak(outbreak) {
    this.outbreaks = this.outbreaks.concat([outbreak]);
  }

  handleChangeOutbreak(outbreak) {
    // make last-minute changes if we need to
  }

  handleUpdateOutbreaks(outbreaks) {
    this.outbreaks = outbreaks;
    this.errorMessage = null;
  }

  handleFetchOutbreak() {
    this.outbreaks = [];
  }

  handleOutbreakFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(OutbreakStore, 'OutbreakStore');
