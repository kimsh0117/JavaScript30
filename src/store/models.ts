// for Ajax Type Ahead
export interface countries {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}

export interface AjaxState {
  country: countries[];
  err?: string;
}
// -------------------------------------