import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import PropTypes from 'prop-types';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: moment()
          .tz(String(this.props.timezone))
          .format('MMMM Do YYYY, h:mm:ss a')
      };
    }
    componentDidMount() {
      setInterval(() => {
        this.setState({
          time: moment().tz(String(this.props.timezone)).format('MMMM Do YYYY, h:mm:ss a')
        });
      }, 1000);
    }
    render() {
      let flag= `https://www.countryflags.io/${this.props.country}/flat/64.png`
      return ( 
      <div className="clock">
        <img src={flag} alt=""></img>
        <p>{this.props.city}</p>
        <p className="time">{this.state.time}</p>
      </div> 
    )
  }
}

Clock.propTypes = {
  timezone: PropTypes.object.isRequired,
};

Clock.defaultProps = {
  timezone: 'Europe/Stockholm',
};

export default Clock;