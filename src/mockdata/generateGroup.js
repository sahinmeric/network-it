import { faker } from '@faker-js/faker';


export function generateMember(id) {
  return {
    memberId: id.toString(),
    memberName: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
  };
}

export function generateGroup() {
  const members = Array.from({ length: 10 }, (_, i) => generateMember(i + 1));
  let i = 0;
  return {
    id: i.toString(),
    name: faker.company.name(),
    private: faker.datatype.boolean(),
    location: faker.location.country(),
    members,
  };
}

const groups = Array.from({ length: 10 }, (_, i) => generateGroup(i + 1));

export default groups;