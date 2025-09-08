import { Tend } from "../../../shared/enums/tend.enum";

export type Chart = {
  datetimeLastPrice:   string;
  datetimeLastPriceTs: number;
  lastPrice:           number;
  highPrice:           number;
  lowPrice:            number;
  openPrice:           number;
  closePrice:          number;
  volume:              number;
  volumeMoney:         number;
  performanceRelative: number;
  performanceAbsolute: number;
  tend:                Tend;
}
