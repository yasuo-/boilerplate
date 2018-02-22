/** flow */

import * as _ from "lodash";
import type {
  ApiResponse,
  Home,
  Booking,
  Thread,
  Profile
} from "../model/model";

type ByCities<T> = { [string]: T[] };
type Callback = (Home[]) => void;

const endpoint =
  "https://firebasestorage.googleapis.com/v0/b/react-native-ting.appspot.com/o/index.json?alt=media&token=073153af-88e1-40d9-8f40-cd045287161a";

export default class APIStore {
  static listeners: Callback[] = [];
  static saved: string[] = [];
  static data: ApiResponse;

  static async load(): Promise<void> {
    const result = await fetch(endpoint);
    APIStore.data = await result.json();
  }

  static homesByCities(): ByCities<Home> {
    return _.groupBy(APIStore.data.homes, home => home.location.city);
  }

  static home(id: string): Home {
    return APIStore.data.homes.filter(home => home.id === id)[0];
  }

  static bookingsByCities(): ByCities<Booking> {
    return _.groupBy(APIStore.data.bookings, booking => {
      const home = APIStore.home(booking.home);
      return home.location.city;
    });
  }
}
