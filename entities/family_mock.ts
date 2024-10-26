// THIS IS A DEFAULT FAMILY TREE THAT PROVIDED IN THE PDF CHALLENGE FILE

import { Gender, Person } from "./person.ts";

// 1nd Generation Marriage
export const KingArthur = new Person("King Arthur", Gender.Male);
export const QueenMargret = new Person("Queen Margret", Gender.Female);
KingArthur.setSpouse(QueenMargret);

// 2nd Generation Births
const Bill = new Person("Bill", Gender.Male);
const Charlie = new Person("Charlie", Gender.Male);
const Percy = new Person("Percy", Gender.Male);
const Ronald = new Person("Ronald", Gender.Male);
const Ginerva = new Person("Ginerva", Gender.Female);
QueenMargret.addChildren(Bill, Charlie, Percy, Ronald, Ginerva);

// 2nd Generation's Marriage
export const Flora = new Person("Flora", Gender.Female);
Bill.setSpouse(Flora);
const Audrey = new Person("Audrey", Gender.Female);
Percy.setSpouse(Audrey);
const Helen = new Person("Helen", Gender.Female);
Ronald.setSpouse(Helen);
const Harry = new Person("Harry", Gender.Male);
Ginerva.setSpouse(Harry);

// 3rd Generation Births
// --
const Victoire = new Person("Victoire", Gender.Female);
const Dominique = new Person("Dominique", Gender.Female);
const Louis = new Person("Louis", Gender.Male);
Flora.addChildren(Victoire, Dominique, Louis);
// --
const Molly = new Person("Molly", Gender.Female);
const Lucy = new Person("Lucy", Gender.Female);
Audrey.addChildren(Molly, Lucy);
// --
const Rose = new Person("Rose", Gender.Female);
const Hugo = new Person("Hugo", Gender.Male);
Helen.addChildren(Rose, Hugo);
// --
const James = new Person("James", Gender.Male);
const Albus = new Person("Albus", Gender.Male);
export const Lily = new Person("Lily", Gender.Female);
Ginerva.addChildren(James, Albus, Lily);

// 3rd Generation Marriage
export const Ted = new Person("Ted", Gender.Male);
Victoire.setSpouse(Ted);
const Malfoy = new Person("Malfoy", Gender.Male);
Rose.setSpouse(Malfoy);
const Darcy = new Person("Darcy", Gender.Female);
James.setSpouse(Darcy);
const Alice = new Person("Alice", Gender.Female);
Albus.setSpouse(Alice);

// 4th Generation Births
// --
export const Remus = new Person("Remus", Gender.Male);
Victoire.addChildren(Remus);
// --
const Draco = new Person("Draco", Gender.Male);
const Aster = new Person("Aster", Gender.Female);
Rose.addChildren(Draco, Aster);
// --
const William = new Person("William", Gender.Male);
Darcy.addChildren(William);
// --
const Ron = new Person("Ron", Gender.Male);
const Ginny = new Person("Ginny", Gender.Female);
Alice.addChildren(Ron, Ginny);
