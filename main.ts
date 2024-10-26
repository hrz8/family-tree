import {
  SUPPORTED_COMMANDS,
  SUPPORTED_GENDERS,
  type SupportedGender,
  type SupportedRelationship,
} from "./commands.ts";
import type { RelationshipFinder } from "./common.ts";
import { FamilyTree } from "./entities/family_tree.ts";
import { Gender, Person } from "./entities/person.ts";
import { KingArthur } from "./entities/family_mock.ts";
import {
  BrotherInLaw,
  Daughter,
  MaternalAunt,
  PaternalAunt,
  PaternalUncle,
  Siblings,
  SisterInLaw,
  Son,
} from "./relationship.ts";

export function addChild(
  ft: FamilyTree,
  motherName: string,
  child: Person,
): string {
  const mother = ft.getMember(motherName);
  if (!mother) {
    return "PERSON_NOT_FOUND";
  }
  try {
    mother.addChildren(child);
    ft.addMember(child);
  } catch {
    return "CHILD_ADDITION_FAILED";
  }
  return "CHILD_ADDED";
}

export function getRelationShip(
  ft: FamilyTree,
  name: string,
  strategy: RelationshipFinder,
): string {
  const person = ft.getMember(name);
  if (!person) {
    return "PERSON_NOT_FOUND";
  }
  const rel = ft.getRelationship(person, strategy);
  if (rel === "") {
    return "NONE";
  }
  return rel;
}

const GENDER: Record<SupportedGender, Gender> = {
  Male: Gender.Male,
  Female: Gender.Female,
};

const RELATIONSHIP: Record<SupportedRelationship, RelationshipFinder> = {
  "Paternal-Uncle": new PaternalUncle(),
  "Maternal-Uncle": new MaternalAunt(),
  "Paternal-Aunt": new PaternalAunt(),
  "Maternal-Aunt": new MaternalAunt(),
  "Sister-In-Law": new SisterInLaw(),
  "Brother-In-Law": new BrotherInLaw(),
  Son: new Son(),
  Daughter: new Daughter(),
  Siblings: new Siblings(),
};

async function main() {
  const decoder = new TextDecoder("utf-8");
  const ft = new FamilyTree(KingArthur);

  const input = Deno.args[0] ?? "inputs/input.txt";
  const bytes = await Deno.readFile(input);
  const text = decoder.decode(bytes);
  const lines = text.split("\n");

  for (const line of lines) {
    const [command, ...args] = line.split(" ");
    if (command === "") {
      continue;
    }

    if (!SUPPORTED_COMMANDS.includes(command)) {
      throw new Error(`Invalid command '${command}' in the input file`);
    }

    if (command === "ADD_CHILD") {
      const [motherName, childName, _gender] = args;
      const gender = _gender as SupportedGender;
      if (!SUPPORTED_GENDERS.includes(gender)) {
        throw new Error(`Invalid gender '${gender}' in the input file`);
      }

      const res = addChild(
        ft,
        motherName,
        new Person(childName, GENDER[gender]),
      );
      console.log(res);
    } else if (command === "GET_RELATIONSHIP") {
      const [name, _relationship] = args;
      const relationship = _relationship as SupportedRelationship;

      const res = getRelationShip(ft, name, RELATIONSHIP[relationship]);
      console.log(res);
    }
  }
}

if (import.meta.main) {
  await main();
}
