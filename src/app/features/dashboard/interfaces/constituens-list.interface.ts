import { Chart } from "../models/chart.model";
import { Constituent } from "../models/constituyent.model";
import { Price } from "../models/price.model";
import { Info } from "./info.interface";

export interface ConstituensList {
  success: boolean;
  code:    number;
  data:    DataConstituents | DataChart | DataPrice;
}

export interface DataConstituents {
  info:         Info;
  constituents: Constituent[];
}

export interface DataChart {
  info:  Info;
  chart: Chart[];
}

export interface DataPrice {
  info:  Info;
  price: Price;
}
