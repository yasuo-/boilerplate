import "rxjs";
import { Observable } from 'rxjs/Observable';
import * as t from "../../actions/type";
import * as api from "../../../api/authApi";
import { auth } from "../../../config/firebase";

/**
 * authEpics
 * @param {*} action$
 */
export const authEpics = action$ => (
  action$.ofType(t.FIREBASE_AUTH_SET_FACEBOOK)
    .map(action => action.payload)
    .mergeMap(payload => Observable.bindCallback(api.signInWithFacebook(payload, (success, data, error) => {
      if (success) {
        console.log(data)
        console.log("こkまで4")
        return {
          type: "AUTH_LOGGED_IN",
          payload: data
        }
      } //else if (error) errorCB(error)
    }))()
    )
    .map(payload => {
      console.log("こkまで1")
      return {
        type: "Decrement",
        payload
      }
    })
  /*.map(data => {
    console.log("こkまで5")
    console.log(data)
    return {
      type: "Decrement"
    }
  })*/
)