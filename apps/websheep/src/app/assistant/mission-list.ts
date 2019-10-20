import { Mission } from './mission';
import { Topic } from './topic';

export const missionList: Mission[] = [
  {
    id: 'authz1',
    title: 'Catch a sheep herd 1',
    topic: Topic.Authorization,
    goals: [`Grab the names of Foo Bar's sheep`],
    hints: [`Foo Bar's user id is "foobar"`],
    config: {
      apiBasePath: 'authz1'
    }
  },
  {
    id: 'authz2',
    title: 'Catch a sheep herd 2',
    topic: Topic.Authorization,
    goals: [`Grab the names of Foo Bar's sheep`],
    hints: [`Admins can see all sheep`],
    config: {
      apiBasePath: 'authz2'
    }
  }
  // {
  //   title: 'Inject a wolf in the herd',
  //   topic: Topic.Csrf,
  //   goals: [`Inject a wolf in the hed`],
  //   hints: [`Foo Bar's user id is "foobar"`]
  // }
];
