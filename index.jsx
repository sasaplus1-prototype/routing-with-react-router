import React from 'react';
import { Redirect, Router, Route, Link } from 'react-router';

// HTML5 pushState
import { history } from 'react-router/lib/BrowserHistory';
// HTML hashchange
//import { history } from 'react-router/lib/HashHistory';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>please open console.</p>
        <ul>
          <li><Link to="/component1">Component1</Link></li>
          <li><Link to="/component2">Component2</Link></li>
          <li><Link to="/component3">Component3</Link></li>
          <li><Link to={`/page/${Math.random() * 100 >> 0}`}>Random Page</Link></li>
          <li><Link to="/unknown">unknown</Link></li>
        </ul>
        <ul>
          <li><Link to="/c1">Redirect to Component1</Link></li>
          <li><Link to="/c2">Redirect to Component2</Link></li>
          <li><Link to="/c3">Redirect to Component3</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class Component1 extends React.Component {
  render() {
    return (<div>Component1</div>);
  }
}
class Component2 extends React.Component {
  render() {
    return (<div>Component2</div>);
  }
}
class Component3 extends React.Component {
  render() {
    return (<div>Component3</div>);
  }
}

class Page extends React.Component {
  render() {
    return (<div>{this.props.params.page}</div>);
  }
}

class NoMatch extends React.Component {
  render() {
    return (<div>No Match</div>);
  }
}

function onEnter() {
  console.log('onEnter');
  console.log(arguments);
}

function onLeave() {
  console.log('onLeave');
  console.log(arguments);
}

React.render(
  (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="component1" component={Component1} onEnter={onEnter} onLeave={onLeave}/>
        <Route path="component2" component={Component2} onEnter={onEnter} onLeave={onLeave}/>
        <Route path="component3" component={Component3} onEnter={onEnter} onLeave={onLeave}/>
        <Route path="/page/:page" component={Page}/>
        <Redirect from="/c1" to="/component1"/>
        <Redirect from="/c2" to="/component2"/>
        <Redirect from="/c3" to="/component3"/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  )
, document.getElementById('app'));
