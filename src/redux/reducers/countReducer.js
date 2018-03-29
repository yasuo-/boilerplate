let count = 0;
export default function (state = count, action) {
  switch (action.type) {
    case "Increment": count++;
      break;
    case "Decrement":
      console.log(action)
      //count++;
      const user = action.payload.user;
      // Save token and data to Asyncstorage
      AsyncStorage.multiSet([
        ['user', JSON.stringify(user)]
      ]);

      state = Object.assign({}, state, { isLoggedIn: true, user });
      return state;
      break;
  }
  return count;
}