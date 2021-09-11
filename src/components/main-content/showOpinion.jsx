/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import shortid from 'shortid';

class Opinions extends React.Component {
    state = {
        opinion: [],
    };

    handleShow = (opinionId, pollId) => {
        // console.log(opinionId);
        // const opinion = poll.opinions.filter((p) => p.selectedOption === opinionId);
        // this.setState({ opinion });
        // const match = this.props.poll.find((poll) => poll.id === pollId);
        // console.log('p: ', match);
        const countOpinions = this.props.poll.opinions.filter((op) => op.selectedOption === opinionId);
        // console.log('l:', countOpinions);
        const opinionsName = countOpinions.map((n) => n);
        console.log(opinionsName);
        this.setState({ opinion: opinionsName });
    };

    allShow = () => {
        this.setState({opinion: this.props.poll.opinions})
    }

    render() {
        const { poll, handleShow, showOpinion } = this.props;
        const { opinion } = this.state;
        // console.log(this.state.opinion);
        // console.log("total: ",poll);
        return (
            <div>
                <h4 className="mt-2">Show Opinions</h4>
                <ButtonGroup className="my-3">
                    <Button onClick={this.allShow}>All</Button>
                    {poll.options.map((opt) => (
                        <Button onClick={() => this.handleShow(opt.id, poll.id)} key={shortid.generate()}>
                            {opt.value}
                        </Button>
                    ))}
                </ButtonGroup>
                <ListGroup>
                    { opinion.map((op) => (
                              <ListGroupItem key={shortid.generate()}>{op.name}</ListGroupItem>
                          ))}
                </ListGroup>
            </div>
        );
    }
}

export default Opinions;
