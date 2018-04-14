// @flow
import React, { Component } from 'react';
import Article from './Article';

const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

type Props = {};

class App extends Component<Props> {
  render() {
    const content = {
      title: <h1>React sub-components with Context</h1>,
      subtitle: (
        <div>Let's make simpler and more flexible React components</div>
      ),
      author: 'Maxime Heckel - @MaximeHeckel',
      date: <i>April 2018</i>,
      content: <p>{text}</p>
    };

    return (
      <Article value={content}>
        <Article.Title />
        <Article.Metadata />
        <Article.Content />
        {/* The following div will render with this pattern, using static typing makes sure
         this is caught on CI. If you run `yarn flow` with the following child, it will fail
        with an error */}
        <div>Hello</div>
      </Article>
    );
  }
}

export default App;
