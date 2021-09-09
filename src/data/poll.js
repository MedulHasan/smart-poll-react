const polls = [
    {
        id: 'lkh1',
        title: 'What is your favorite Programming Language',
        description:
            'There are lot of popular programming language availeable. Among them what is your favorite?',
        options: [
            { id: 'a1pl', value: 'C Programming', vote: 0 },
            { id: 'a2pl', value: 'JavaScript', vote: 0 },
            { id: 'a3pl', value: 'Pyhton', vote: 0 },
            { id: 'a4pl', value: 'Java', vote: 0 },
        ],
        created: new Date(),
        totalVote: 0,
        opinions: [],
    },
    {
        id: 'lkh2',
        title: 'What is your favorite Front end framework',
        description:
            'There are lot of popular Front end framework availeable. Among them what is your favorite?',
        options: [
            { id: 'a1qw', value: 'react', vote: 0 },
            { id: 'a2pw', value: 'Angular', vote: 0 },
            { id: 'a3qw', value: 'Vue', vote: 0 },
            { id: 'a4qw', value: 'Svalte', vote: 0 },
        ],
        created: new Date(),
        totalVote: 0,
        opinions: [],
    },
    {
        id: 'lkh3',
        title: 'What is your favorite Back end framework',
        description:
            'There are lot of popular Back end framework availeable. Among them what is your favorite?',
        options: [
            { id: 'a1gt', value: 'express js', vote: 0 },
            { id: 'a2gt', value: 'django', vote: 0 },
            { id: 'a3gt', value: '.net', vote: 0 },
            { id: 'a4gt', value: 'spring boot', vote: 0 },
        ],
        created: new Date(),
        totalVote: 0,
        opinions: [],
    },
];

export default polls;
