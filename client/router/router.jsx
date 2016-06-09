import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Layouts
import Container from '../../import/layouts/Container.jsx';

// Components
import Dashboard from '../../import/pages/Dashboard.jsx';
import Overview from '../../import/pages/Overview.jsx';

const mainRouter = FlowRouter.group({
  name: 'mainpage',
});

mainRouter.route('/', {
  name: 'dashboard',
  action() {
    mount(Container, {
      content: <Dashboard />,
    });
  },
});

mainRouter.route('/overview', {
  name: 'overview',
  action() {
    mount(Container, {
      content: <Overview />,
    });
  },
});
