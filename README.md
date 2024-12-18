# Family Tree

This application is a family tree finder implemented in Deno. This purpose of the project is to complete the Take Home Test Challenge from Shippit.

## Installation

1. Install Deno by running:

```bash
curl -fsSL https://deno.land/install.sh | sh
```

2. Setup
```bash
# Change directory to the project
cd lengaburu
deno install
```

3. Clone/Copy/Extract the source code The project is structured as follows:

```
.
├── commands.ts
├── common.ts
├── deno.json
├── deno.lock
├── entities
│   ├── family_mock.ts
│   ├── family_tree.ts
│   └── person.ts
├── inputs
│   ├── input.txt
│   ├── sample1.txt
│   ├── sample2.txt
│   └── sample3.txt
├── main.ts
├── main_test.ts
└── relationship.ts
```

4. Key Files

- `commands.ts`: Defines supported commands and constants
- `entities/family_mock.ts`: A predefined family tree based on the challenge's
  requirements.
- `entities/family_tree.ts`: Family tree class, responsible for managing family
  members and relationships.
- `entities/person.ts`: Person class defining individual family members.
- `inputs`: Contains input files that can be used to test the application.
- `main.ts`: Main entry file to run the application.
- `main_test.ts`: Test file to validate functionality.
- `relationship.ts`: Defines relationship-finder classes.

## Usage

### Using Deno
```bash
# Default input
deno run --allow-read main.ts
deno run --allow-read main.ts inputs/input.txt

# Custom inputs
deno run --allow-read main.ts inputs/sample1.txt
deno run --allow-read main.ts inputs/sample2.txt
deno run --allow-read main.ts inputs/sample3.txt
```

### Using Docker
```bash
# Build image
docker build -t lengaburu .

# Run/Invoke the container
docker run -v $(pwd)/inputs/input.txt:/app/input.txt lengaburu /app/input.txt
docker run -v $(pwd)/inputs/sample1.txt:/app/input.txt lengaburu /app/input.txt
docker run -v $(pwd)/inputs/sample2.txt:/app/input.txt lengaburu /app/input.txt
docker run -v $(pwd)/inputs/sample3.txt:/app/input.txt lengaburu /app/input.txt
```

### Input

The app currently supports input file with the following commands:

- `ADD_CHILD` \<MotherName\> \<ChildName\> \<Gender\>: Add a child to a mother.
- `GET_RELATIONSHIP` \<PersonName\> \<Relationship\>: Retrieves specified
  relationship(s) for a particular person/family member.

### Supported Relationships

- `Paternal-Uncle`
- `Maternal-Uncle`
- `Paternal-Aunt`
- `Maternal-Aunt`
- `Sister-In-Law`
- `Brother-In-Law`
- `Son`
- `Daughter`
- `Siblings`

### Example

```txt
ADD_CHILD Flora Minerva Female
GET_RELATIONSHIP Remus Maternal-Aunt
GET_RELATIONSHIP Minerva Siblings
```

## Running Tests

```bash
deno test
```
