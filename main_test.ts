import { assertEquals } from "@std/assert";
import { addChild } from "./main.ts";
import { Gender, Person } from "./entities/person.ts";
import { FamilyTree } from "./entities/family_tree.ts";
import { getRelationShip } from "./main.ts";
import { MaternalAunt, Siblings, SisterInLaw } from "./relationship.ts";
import { Flora, KingArthur, Lily, Remus, Ted } from "./entities/family_mock.ts";

Deno.test("Should as expected as the file sample", () => {
  const ft = new FamilyTree(KingArthur);
  const Minerva = new Person("Minerva", Gender.Female);
  const res1 = addChild(ft, Flora.name, Minerva);
  const res2 = getRelationShip(ft, Remus.name, new MaternalAunt());
  const res3 = getRelationShip(ft, Minerva.name, new Siblings());
  assertEquals(res1, "CHILD_ADDED");
  assertEquals(res2, "Dominique Minerva");
  assertEquals(res3, "Victoire Dominique Louis");
});

Deno.test("Should as expected from the sample", async (t) => {
  await t.step("sample 1-A", () => {
    const ft = new FamilyTree(KingArthur);
    const res = addChild(ft, "Luna", new Person("Lola", Gender.Female));
    assertEquals(res, "PERSON_NOT_FOUND");
  });

  await t.step("sample 1-B", () => {
    const ft = new FamilyTree(KingArthur);
    const res = getRelationShip(ft, "Luna", new MaternalAunt());
    assertEquals(res, "PERSON_NOT_FOUND");
  });

  await t.step("sample 2-A", () => {
    const ft = new FamilyTree(KingArthur);
    const res = addChild(ft, Ted.name, new Person("Bella", Gender.Female));
    assertEquals(res, "CHILD_ADDITION_FAILED");
  });

  await t.step("sample 2-B", () => {
    const ft = new FamilyTree(KingArthur);
    const res = getRelationShip(ft, Remus.name, new Siblings());
    assertEquals(res, "NONE");
  });

  await t.step("sample 3-A", () => {
    const ft = new FamilyTree(KingArthur);
    const res = getRelationShip(ft, Lily.name, new SisterInLaw());
    assertEquals(res, "Darcy Alice");
  });
});
