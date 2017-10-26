import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

class FilterBar extends React.Component {
  // have buttons for Date, Guests, Price
  // Each is modal that will apply the inputed filter
  //
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      filter: ""
    }
    this.onModalClose = this.onModalClose.bind(this);
  }

  handleClick(filter) {
    this.setState({modalOpen: true, filter: filter});
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  render () {
    // if statement checking what filter modal to render
    const component = this.state.filter + "_filter";
    return (
      <div className="filterbar">
        <div className="filter-buttons">
          <ul>
            <li>
              <button className="dates" onClick={this.handleClick.bind(this, "dates")}>
                Dates
              </button>
            </li>
            <li>
              <button className="guests" onClick={this.handleClick.bind(this, "guests")}>
                Guests
              </button>
            </li>
            <li>
              <button className="Price" onClick={this.handleClick.bind(this, "Price")}>
                Price
              </button>
            </li>
          </ul>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
        >
          {component}
        </Modal>
      </div>
    );
  }

}

export default FilterBar;
