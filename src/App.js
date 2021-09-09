/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import shortId from 'shortid';
import MainContent from './components/main-content';
import SideBar from './components/sidebar';
import POLLS from './data/poll';

class App extends React.Component {
    state = {
        polls: [],
        selectedPoll: {},
        searchTerm: '',
    };

    componentDidMount() {
        this.setState({ polls: POLLS });
    }

    addNewPoll = (poll) => {
        poll.id = shortId.generate();
        poll.created = new Date();
        poll.totalVote = 0;
        poll.opinion = [];

        this.setState({
            polls: this.state.polls.concat(poll),
        });
    };

    updatePoll = (updatePoll) => {
        const polls = [...this.state.polls];
        const poll = polls.find((p) => p.id === updatePoll.id);
        poll.title = updatePoll.title;
        poll.description = updatePoll.description;
        poll.options = updatePoll.options;

        this.setState({ polls: poll }); // change
    };

    deletePoll = (pollId) => {
        const polls = this.state.polls.filter((poll) => poll.id !== pollId);
        this.setState({ polls, selectedPoll: {} });
    };

    selectPoll = (pollId) => {
        const poll = this.state.polls.find((p) => p.id === pollId);
        this.setState({ selectedPoll: poll });
    };

    handleSearch = (searchTerm) => {};

    getOpinion = (res) => {
        const { polls } = this.state;
        const poll = polls.find((p) => p.id === res.pollId);
        const option = poll.options.find((o) => o.id === res.selectedOption);

        poll.totalVote++;
        option.vote++;
        const opinion = {
            id: shortId.generate(),
            name: res.name,
            selectedOption: res.selectedOption,
        };

        poll.opinions.push(opinion);
        this.setState({ polls: poll }); // change
    };

    render() {
        // console.log(this.state.selectedPoll);
        return (
            <Container className="my-5">
                <Row>
                    <Col md={4}>
                        <SideBar
                            searchTerm={this.state.searchTerm}
                            handleSearch={this.handleSearch}
                            polls={this.state.polls}
                            selectPoll={this.selectPoll}
                            addNewPoll={this.addNewPoll}
                        />
                    </Col>
                    <Col md={8}>
                        <MainContent
                            poll={this.state.selectedPoll}
                            getOpinion={this.getOpinion}
                            updatePoll={this.updatePoll}
                            deletePoll={this.deletePoll}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
