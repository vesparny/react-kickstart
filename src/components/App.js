import React, {PropTypes} from 'react';

const App = React.createClass({

  propTypes: typeof __DEV__ && {
    children: PropTypes.object.isRequired
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default App;
