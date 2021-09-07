/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import PollForm from '../poll-form';
import PollList from './poll-list';

class SideBar extends React.Component {
    state = {
        openModal: false,
    };

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal,
        });
    };

    render() {
        const { searchTerm, handleSearch, polls, selectPoll } = this.props;
        return (
            <div style={{ background: '#efefef', padding: '10px' }}>
                <div className="d-flex">
                    <Input
                        type="searc"
                        placeholder="search"
                        valid={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <Button color="success" className="ms-2" onClick={this.toggleModal}>
                        New
                    </Button>
                </div>
                <h3>List of Polls</h3>
                <PollList polls={polls} selectPoll={selectPoll} />
                <Modal isOpen={this.state.openModal} toggle={this.toggleModal} unmountOnClose>
                    <ModalHeader toggle={this.toggleModal}>Create a New Poll</ModalHeader>
                    <ModalBody />
                    <PollForm />
                    <ModalBody />
                </Modal>
            </div>
        );
    }
}

export default SideBar;
