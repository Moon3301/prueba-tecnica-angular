import { Tend } from "../../../shared/enums/tend.enum";

export type Constituent = {
  codeInstrument:         string;
  name:                   string;
  shortName:              string;
  pctDay:                 number;
  pct30D:                 number;
  pctCY:                  number;
  pct1Y:                  number;
  lastPrice:              number;
  datetimeLastPrice:      string;
  volumeMoney:            number;
  accumulatedVolumeMoney: number;
  tend:                   Tend;
  performanceAbsolute:    number;
  performanceRelative:    number;
}
