export default (state, action) => {
  switch (action.type) {
    case 'GET_PRAYERS':
      return {
        ...state,
        prayerIntentions: action.payload,
      };
    case 'ADD_PRAYER':
      return {
        ...state,
        prayerIntentions: [...state.prayerIntentions, action.payload],
        isPrayerAdded: true,
      };
    case 'SEND_EMAIL':
      return {
        ...state,
        isEmailSent: true,
      };
    default:
      return state;
  }
};
