/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function (state, appointments, id) {




  const getWeekdayNum = (id) => {
    if (id < 6) {
      return 0;
    } else if (id < 11) {
      return 1;
    } else if (id < 16) {
      return 2;
    } else if (id < 21) {
      return 3;
    } else {
      return 4;
    }
  }

  //book edit, book create, delete
  let daysCopy = [...state.days]
  if (!state.appointments[id].interview) { //create
    
    daysCopy[getWeekdayNum(id)].spots--;
  } else { // edit
    continue;
  }
//delete

  return daysCopy;
};

module.exports = updateSpots;


