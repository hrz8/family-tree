import type { RelationshipFinder } from "../common.ts";
import type { Person } from "./person.ts";

export class FamilyTree {
  private members: Map<string, Person> = new Map();

  constructor(public head: Person) {
    this.addFamilyRecursive(head);
  }

  public addMember(person: Person) {
    if (!this.members.has(person.name)) {
      this.members.set(person.name, person);
    }
  }

  public getMember(name: string): Person | null {
    return this.members.get(name) ?? null;
  }

  public listMembers(): string[] {
    return Array.from(this.members.keys());
  }

  public getRelationship(person: Person, finder: RelationshipFinder): string {
    if (!this.members.has(person.name)) {
      return "";
    }

    const relations = finder.find(person);
    return relations.length > 0
      ? relations.map((rel) => rel.name).join(" ")
      : "";
  }

  private addFamilyRecursive(person: Person) {
    if (this.members.has(person.name)) {
      return;
    }

    this.members.set(person.name, person);

    if (person.spouse && !this.members.has(person.spouse.name)) {
      this.addFamilyRecursive(person.spouse);
    }

    for (const child of person.children) {
      this.addFamilyRecursive(child);
    }
  }
}
