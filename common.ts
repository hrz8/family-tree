import type { Person } from "./entities/person.ts";

export type Nullable<T> = T | null;

export interface RelationshipFinder {
  find(person: Person): Person[];
}
