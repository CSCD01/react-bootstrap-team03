import React from 'react';
import { mount } from 'enzyme';

import TabPane from '../src/TabPane';

describe('<TabPane>', () => {
  it('Should have class', () => {
    mount(<TabPane>Item content</TabPane>)
      .assertSingle('div.tab-pane[aria-hidden=true][role="tabpanel"]')
      .assertNone('.active');
  });

  it('Should add active class', () => {
    mount(<TabPane active>Item content</TabPane>).assertSingle(
      'div.tab-pane.active[aria-hidden=false]',
    );
  });

  it('should retain transition if unmountOnExit is true', () => {
    mount(<TabPane unmountOnExit>Item content</TabPane>).assertSingle(
      'div.tab-pane.unmountOnExit[aria-hidden=true]',
    );
  });
});
