import { journeys } from './constants';

export interface ResHealth {
  ok: boolean;
}

export interface ResJourneys {
  journeys: Journey[];
}

export type Journey = typeof journeys[number];
