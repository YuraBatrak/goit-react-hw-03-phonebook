import { Component } from 'react';
import { PropTypes } from 'prop-types';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleInputChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filterInputHandler = event => {
    const { onFilter } = this.props;
    this.handleInputChange(event);
    onFilter(event.target.value);
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="search contact"
          name="filter"
          value={filter}
          onChange={this.filterInputHandler}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
