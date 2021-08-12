import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/error-boundary';
import { TemplateProvider } from './components/template/provider';
import { Navigation } from './navigation';

import './style.css';

const render = () => {
  ReactDOM.render(
    <ErrorBoundary>
      <TemplateProvider>
        <Navigation />
      </TemplateProvider>
    </ErrorBoundary>,
    document.getElementById('root'),
  );
};

render();
