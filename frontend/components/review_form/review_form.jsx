import React from 'react';
import { Link } from 'react-router-dom';

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

   update(field) {
     return e => this.setState({[field]: e.currentTarget.value});
   }
   handleSubmit(e) {
     e.preventDefault();
     let review = this.state;
     review.rating = parseInt(review.rating);
     this.props.createReview(review);
   }
   //star review form was learned from A Pen by Neil Pomerleau
    //https://codepen.io/neilpomerleau/pen/wzxzQr
  render() {
    if (this.props.listing) {
      return(
        <div className="review-form">
          <form onSubmit={this.handleSubmit}>

            <div className="rating">
              <h2>How was your stay at {this.props.listing.title}?</h2>
              <label>
                <input
                  type="radio"
                  name="stars"
                  value="1"
                  onChange={this.update('rating')}
                />
                <span className="icon">★</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="stars"
                  value="2"
                  onChange={this.update('rating')}
                />
                <span className="icon">★</span>
                <span className="icon">★</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="stars"
                  value="3"
                  onChange={this.update('rating')}
                />
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="stars"
                  value="4"
                  onChange={this.update('rating')}
                />
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="stars"
                  value="5"
                  onChange={this.update('rating')}
                />
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
              </label>
            </div>

            <div className="body">
              <h2>Write a public review</h2>
              <textarea
                rows="40"
                cols="40"
                placeholder="Write a public review"
                value={this.state.body}
                onChange={this.update('body')}
              />
            </div>

            <button>Review</button>

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
