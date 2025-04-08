import React, { Component } from 'react';
import Message from './Message';

class Passenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Message: 'Enter the details',
      passengerDetails: {
        name: '',
        mobile: '',
        source: '',
        destination: '',
        date: '',
      },
      submitted: false,
    };
  }

  // Method to update the message
  PassengerList() {
    const { name, mobile, source, destination, date } = this.state.passengerDetails;
    if (name && mobile && source && destination && date) {
      this.setState({
        Message: 'Passenger details have been entered!',
        submitted: true,
      });
    } else {
      this.setState({
        Message: 'Please fill out all details.',
        submitted: false,
      });
    }
  }

  // Method to handle input changes
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      passengerDetails: {
        ...prevState.passengerDetails,
        [name]: value,
      },
    }));
  };

  render() {
    const { name, mobile, source, destination, date } = this.state.passengerDetails;
    const { submitted } = this.state;
    return (
      <div>
        <h1>Welcome to Passenger List</h1>
        <h2>{this.state.Message}</h2>
        <h3>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                placeholder="Enter name"
              />
            </label>
            <br />
            <label>
              Mobile:
              <input
                type="text"
                name="mobile"
                value={mobile}
                onChange={this.handleInputChange}
                placeholder="Enter mobile number"
              />
            </label>
            <br />
            <label>
              Source:
              <input
                type="text"
                name="source"
                value={source}
                onChange={this.handleInputChange}
                placeholder="Enter source"
              />
            </label>
            <br />
            <label>
              Destination:
              <input
                type="text"
                name="destination"
                value={destination}
                onChange={this.handleInputChange}
                placeholder="Enter destination"
              />
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </label>
          </form>
        </h3>
        <button onClick={() => this.PassengerList()}>Submit Details</button>
        {submitted && (
          <div style={{ marginTop: '20px', color: 'green' }}>
            <h4>Passenger Summary:</h4>
            <p><strong>Name:</strong> {name}</p>

            <p><strong>Mobile:</strong> {mobile}</p>

            <p><strong>Source:</strong> {source}</p>

            <p><strong>Destination:</strong> {destination}</p>

            <p><strong>Date:</strong> {date}</p>
            
          </div>
        )}
      </div>
    );
  }
}

export default Passenger;
