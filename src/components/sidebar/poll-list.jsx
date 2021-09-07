/* eslint-disable prettier/prettier */
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PollList = (props) => {
    const { polls, selectPoll } = props;
    if (polls.length === 0) {
        return <p>There is no Poll</p>;
    }
    
    return (
        <ListGroup>
            {polls.map((poll) => (
                <ListGroupItem 
                    key={poll.id} 
                    onClick={() => selectPoll(poll.id)}
                    style={{cursor: 'pointer'}}
                >
                    {poll.title.length > 50 ? `${poll.title.substr(0, 50)  }...` : poll.title}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default PollList;
