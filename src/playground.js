const poll = [
    {
        id: 1,
        name: 'A',
    },
    {
        id: 2,
        name: 'B',
    },
];

const abc = {
    id: 3,
    name: 'C',
};

// const res = poll.concat(abc);
const res = [...poll, abc];
console.log(res);
