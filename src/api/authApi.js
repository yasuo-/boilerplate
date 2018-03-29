import { auth, database, provider } from "../config/firebase";

/**
 * register
 * Register the user using email and password
 * @param {*} data 
 * @param {*} callback 
 */
export const register = (data, callback) => {
  const { email, password } = data;
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => callback(true, user, null))
    .catch((error) => callback(false, null, error))
}

/**
 * createUser
 * Create the user object in realtime database
 * @param {*} user 
 * @param {*} callback 
 */
export const createUser = (user, callback) => {
  database.ref('users').child(user.uid).update({ ...user })
    .then(() => callback(true, null, null))
    .catch((error) => callback(false, null, { message: error }))
}

/**
 * login
 * Sign the user in with their email and password
 * @param {*} data 
 * @param {*} callback 
 */
export const login = (data, callback) => {
  const { email, password } = data;
  auth.signInWithEmailAndPassword(email, password)
    .then((user) => getUser(user, callback))
    .catch((error) => callback(false, null, error))
}

/**
 * getUser
 * Get the user object from the realtime database
 * @param {*} user 
 * @param {*} callback 
 */
export const getUser = (user, callback) => {
  database.ref('users').child(user.uid).once('value')
    .then((snapshot) => {
      const exists = (snapshot.val() !== null);
      // if the user exist in the DB,
      // replace the user variable with the returned snapshot
      if (exists) user = snapshot.val();

      const data = { exists, user }
      callback(true, data, null);
    })
    .catch(error => callback(false, null, error))
}
/**
 * resetPassword
 * Send Password Reset Email
 * @param {*} data 
 * @param {*} callback 
 */
export const resetPassword = (data, callback) => {
  const { email } = data;
  auth.sendPasswordResetEmail(email)
    .then((user) => callback(true, null, null))
    .catch((error) => callback(false, null, error))
}

/**
 * signOut
 * Out the user
 * @param {*} callback 
 */
export const signOut = (callback) => {
  auth.signOut()
    .then(() => {
      if (callback) callback(true, null, null)
    })
    .catch((error) => {
      if (callback) callback(false, null, error)
    });
}
/**
 * signInWithFacebook
 * Sign the user in with their Facebook
 * @param {*} fbToke 
 * @param {*} callback 
 */
export const signInWithFacebook = (fbToken, callback) => {
  const credential = provider.credential(fbToken);
  return auth.signInWithCredential(credential)
    .then((result) => callback(true, result, null))
    .catch((error) => callback(false, null, error))
  // .then((result) => getUser(result, callback))
  // .catch((error) => callback(false, null, error))
}