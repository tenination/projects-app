const initState = {
  projects: [
    {
      id: 1,
      name: 'Shibuya Crossing',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic a non commodi illum consectetur nesciunt, neque, nostrum vitae delectus perferendis quidem pariatur autem, totam vero et quos ullam ipsa ab',
      author: 'Yoshi',
      date: 'Oct 27',
    },
    {
      id: 2,
      name: 'Ginza Shopping',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic a non commodi illum consectetur nesciunt, neque, nostrum vitae delectus perferendis quidem pariatur autem, totam vero et quos ullam ipsa ab',
      author: 'Takayoki',
      date: 'Oct 25',
    },
    {
      id: 3,
      name: 'Harajuku Fashion',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic a non commodi illum consectetur nesciunt, neque, nostrum vitae delectus perferendis quidem pariatur autem, totam vero et quos ullam ipsa ab',
      author: 'Kata',
      date: 'Oct 21',
    },
    {
      id: 4,
      name: 'Shinjuku District',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic a non commodi illum consectetur nesciunt, neque, nostrum vitae delectus perferendis quidem pariatur autem, totam vero et quos ullam ipsa ab',
      author: 'Yokohama',
      date: 'Oct 20',
    },
    {
      id: 5,
      name: 'Asakusa Temple',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic a non commodi illum consectetur nesciunt, neque, nostrum vitae delectus perferendis quidem pariatur autem, totam vero et quos ullam ipsa ab',
      author: 'Roku',
      date: 'Oct 14',
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
