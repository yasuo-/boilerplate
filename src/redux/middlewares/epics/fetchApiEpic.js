import "rxjs";
import * as Type from "../../actions/type";

/**
 * fetchApiEpic
 * @param {*} action$
 */
export const fetchApiEpic = action$ =>
  action$.ofType(Type.INIT).mergeMap(action =>
    ajax
      .getJSON("https://*****")
      .map(response => loadResult(result))
      .catch(loadError())
  );
