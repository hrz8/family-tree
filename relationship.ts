import { Gender, type Person } from "./entities/person.ts";

export class PaternalUncle {
  find(person: Person): Person[] {
    const father = person.father;
    if (!father || !father.mother) {
      return [];
    }
    const grandma = father.mother;
    return grandma.children.filter(
      (uncle) => uncle !== father && uncle.gender === Gender.Male,
    );
  }
}

export class MaternalUncle {
  find(person: Person): Person[] {
    const mother = person.mother;
    if (!mother || !mother.mother) {
      return [];
    }
    return mother.mother.children.filter(
      (uncle) => uncle !== mother && uncle.gender === Gender.Male,
    );
  }
}

export class PaternalAunt {
  find(person: Person): Person[] {
    const father = person.father;
    if (!father || !father.mother) {
      return [];
    }
    const grandma = father.mother;
    return grandma.children.filter(
      (aunt) => aunt !== father && aunt.gender === Gender.Female,
    );
  }
}

export class MaternalAunt {
  find(person: Person): Person[] {
    const mother = person.mother;
    if (!mother || !mother.mother) {
      return [];
    }
    const grandma = mother.mother;
    return grandma.children.filter(
      (aunt) => aunt !== mother && aunt.gender === Gender.Female,
    );
  }
}

export class SisterInLaw {
  find(person: Person): Person[] {
    const sistersInLaw: Person[] = [];

    if (person.spouse) {
      sistersInLaw.push(
        ...person.spouse.mother?.children.filter(
          (sibling) =>
            sibling.gender === Gender.Female && sibling !== person.spouse,
        ) ?? [],
      );

      const spouseBrothers = person.spouse.mother?.children.filter(
        (sibling) => sibling.gender === Gender.Male,
      ) ?? [];
      for (const brother of spouseBrothers) {
        if (brother.spouse) {
          sistersInLaw.push(brother.spouse);
        }
      }
    }

    const mother = person.mother;
    if (mother) {
      const brothers = mother.children.filter(
        (sibling) => sibling.gender === Gender.Male && sibling !== person,
      );
      for (const brother of brothers) {
        if (brother.spouse) {
          sistersInLaw.push(brother.spouse);
        }
      }
    }

    return sistersInLaw;
  }
}

export class BrotherInLaw {
  find(person: Person): Person[] {
    const brothersInLaw: Person[] = [];

    if (person.spouse) {
      brothersInLaw.push(
        ...person.spouse.mother?.children.filter(
          (sibling) =>
            sibling.gender === Gender.Male && sibling !== person.spouse,
        ) ?? [],
      );

      const spouseSisters = person.spouse.mother?.children.filter(
        (sibling) => sibling.gender === Gender.Female,
      ) ?? [];
      for (const sister of spouseSisters) {
        if (sister.spouse) {
          brothersInLaw.push(sister.spouse);
        }
      }
    }

    const mother = person.mother;
    if (mother) {
      const sisters = mother.children.filter(
        (sibling) => sibling.gender === Gender.Female && sibling !== person,
      );
      for (const sister of sisters) {
        if (sister.spouse) {
          brothersInLaw.push(sister.spouse);
        }
      }
    }

    return brothersInLaw;
  }
}

export class Son {
  find(person: Person): Person[] {
    return person.children.filter((child) => child.gender === Gender.Male);
  }
}

export class Daughter {
  find(person: Person): Person[] {
    return person.children.filter((child) => child.gender === Gender.Female);
  }
}

export class Siblings {
  find(person: Person): Person[] {
    const mother = person.mother;
    if (!mother) {
      return [];
    }
    return mother.children.filter((sibling) => sibling !== person);
  }
}
