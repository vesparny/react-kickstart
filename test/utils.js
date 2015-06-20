import React, { PropTypes, Component } from 'react/addons';

const { TestUtils } = React.addons;

export function getRenderOutput (Component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(Component);
  return shallowRenderer.getRenderOutput();
}
