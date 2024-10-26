import type { Nullable } from "../common.ts";

export enum Gender {
  Male,
  Female,
}

export class Person {
  mother: Nullable<Person> = null;
  father: Nullable<Person> = null;
  spouse: Nullable<Person> = null;
  children: Person[] = [];

  constructor(
    public name: string,
    public gender: Gender,
  ) {}

  public setSpouse(spouse: Person): boolean {
    if (this.spouse || spouse.spouse) {
      return false;
    }

    this.spouse = spouse;
    spouse.spouse = this;

    return true;
  }

  public addChildren(...children: Person[]): boolean {
    if (this.gender !== Gender.Female) {
      throw new Error(`Only mother can add child`);
    }

    for (const child of children) {
      child.mother = this;
      child.father = this.spouse;
      this.children.push(child);
    }

    return true;
  }
}
