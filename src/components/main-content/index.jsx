/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import PollForm from '../poll-form';
import ParticipationForm from './participate-form';

class MainContent extends React.Component {
    state = {
        openModal: false,
    };

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal,
        });
    };

    render() {
        const { poll, getOpinion, updatePoll, deletePoll } = this.props;
        // console.log(poll);
        if (Object.keys(poll).length === 0) {
            return (
                <div>
                    <h3>Welcome to My Poll Application</h3>
                    <p>
                        This is a simple Poll web Application. When You want to people opinion you
                        can use it.
                    </p>
                </div>
            );
        }

        return (
            <div>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
                <br />
                <ParticipationForm
                    poll={poll}
                    getOpinion={getOpinion}
                    toggleModal={this.toggleModal}
                    deletePoll={deletePoll}
                />
                <Modal isOpen={this.state.openModal} toggle={this.toggleModal} unmountOnClose>
                    <ModalHeader toggle={this.toggleModal}>
                        Update Poll
                        <ModalBody>
                            <PollForm
                                poll={poll}
                                isUpdate
                                submit={updatePoll}
                                buttonValue="Update Poll"
                            />
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default MainContent;
