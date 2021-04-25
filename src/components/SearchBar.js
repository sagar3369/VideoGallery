import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onTextChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label>Search Videos</label>
            <input
              type="text"
              placeholder="type here"
              value={this.state.term}
              onChange={this.onTextChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
