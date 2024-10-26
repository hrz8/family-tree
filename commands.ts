export const SUPPORTED_RELATIONSHIPS = [
  "Paternal-Uncle",
  "Maternal-Uncle",
  "Paternal-Aunt",
  "Maternal-Aunt",
  "Sister-In-Law",
  "Brother-In-Law",
  "Son",
  "Daughter",
  "Siblings",
] as const;
export type SupportedRelationship = typeof SUPPORTED_RELATIONSHIPS[number];

export const SUPPORTED_COMMANDS = [
  "ADD_CHILD",
  "GET_RELATIONSHIP",
];

export const SUPPORTED_GENDERS = ["Male", "Female"] as const;
export type SupportedGender = typeof SUPPORTED_GENDERS[number];
