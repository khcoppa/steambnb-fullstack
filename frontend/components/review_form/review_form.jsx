import React from 'react';
import { Link } from 'react-router-dom';
import ListingIndexItem from '../listing_page/listing_index_item';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listing_id: this.props.listingId,
      user_id: this.props.user.id,
      body: "",
      rating: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (!this.props.listing) {
      this.props.fetchListing(this.props.listingId);
    }
  }

  navigateToListingShow() {
    const url = `/listings/${this.state.listing_id}`;
    this.props.history.push(url);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
    debugger
  }
  handleSubmit(e) {
    e.preventDefault();
    let review = this.state;
    review.rating = parseInt(review.rating);

    this.props.createReview(review);
    this.navigateToListingShow();
  }
   //star review form was learned from A Pen by Neil Pomerleau
    //https://codepen.io/neilpomerleau/pen/wzxzQr
  render() {
    if (this.props.listing) {
      return(
        <div className="review-form">
          <h1>Review for {this.props.listing.title}</h1>
          <div className="listing-div">
            <img src={this.props.listing.image_url} />
            <h4>Sauna {this.props.listing.beds} beds</h4>
            <h3>{this.props.listing.title}</h3>
            <p>From ${this.props.listing.price} per night</p>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="rating">
              <h2>Rate your stay at {this.props.listing.title}</h2>
              <input list="ratings" onChange={this.update('rating')}/>
              <datalist id="ratings">
                <option value="5">My stay was amazing!</option>
                <option value="4">My stay was good!</option>
                <option value="3">My stay was okay!</option>
                <option value="2">My stay was bad!</option>
                <option value="1">My stay was terrible!</option>
              </datalist>
            </div>

            <div className="review-text">
              <h2>Write a public review</h2>
              <textarea
                placeholder="Describe your experience..."
                value={this.state.body}
                onChange={this.update('body')}
              />
            </div>

            <button id="review-button">Review</button>

          </form>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default ReviewForm;
