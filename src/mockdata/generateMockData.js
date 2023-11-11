import { faker } from '@faker-js/faker';

function generateMember(id) {
  return {
    memberId: id.toString(),
    memberName: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
  };
}

function generateGroup() {
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

function generateEvent(id) {
  const eventName = faker.company.catchPhrase();
  const eventLocation = faker.location.streetAddress();
  const members = Array.from({ length: 10 }, (_, i) => generateMember(i + 1));

  return {
    id: id.toString(),
    name: eventName + ' Event',
    date: faker.date.future(),
    location: eventLocation,
    description: faker.lorem.paragraph(),
    organizer: faker.person.fullName(),
    members,
  };
}

export const groups = Array.from({ length: 10 }, (_, i) => generateGroup(i + 1));
export const events = Array.from({ length: 10 }, (_, i) => generateEvent(i + 1));
export const members = Array.from({ length: 10 }, (_, i) => generateMember(i + 1));

const mockData = {
  groups,
  events,
  members,
};

export default mockData;

