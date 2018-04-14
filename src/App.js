import React, { Component } from 'react';

const findByType = (children, component) => {
  const result = [];
  /* This is the array of result since Article can have multiple times the same sub-component */
  const type = [component.displayName] || [component.name];
  /* We can store the actual name of the component through the displayName or name property of our sub-component */
  React.Children.forEach(children, child => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });
  /* Then we go through each React children, if one of matches the name of the sub-component we’re looking for we put it in the result array */
  return result[0];
};

const Title = () => null;
Title.displayName = 'Title';

class Article extends Component {
  renderTitle() {
    const { children } = this.props;
    const title = findByType(children, Title);
    if (!title) {
      return null;
    }
    return <h1>{title.props.children}</h1>;
  }

  render() {
    return <div>{this.renderTitle()}</div>;
  }
}

Article.Title = Title;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article>
          <Article.Title>React sub-components without context</Article.Title>
          {/* The following div will not render with this sub-component pattern
          thanks to the findByType util */}
          <div> Hello </div>
        </Article>
      </div>
    );
  }
}

export default App;
