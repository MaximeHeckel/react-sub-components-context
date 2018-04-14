// @flow
import * as React from 'react'
import type { Node } from 'react';

// This creates the "Article Context" i.e. an object containing a Provider and a Consumer component
// $FlowFixMe
const ArticleContext = React.createContext();

// We use classes here instead of functional components for our sub-components
// so we can define a type for each one of them

// This is the Title sub-component, which is a consumer of the Article Context
class Title extends React.Component<{}> {
  render() {
    return (
      <ArticleContext.Consumer>
        {({ title, subtitle }) => (
          <div style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
            <div style={{ color: '#ccc' }}>
              <h3>{subtitle}</h3>
            </div>
          </div>
        )}
      </ArticleContext.Consumer>
    );
  }
};

class Metadata extends React.Component<{}> {
  render() {
    return (
      <ArticleContext.Consumer>
        {({ author, date }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {author}
            {date}
          </div>
        )}
      </ArticleContext.Consumer>
    );
  }
};

class Content extends React.Component<{}> {
  render () {
    return (
      <ArticleContext.Consumer>
        {({ content }) => (
          <div style={{ width: '500px', margin: '0 auto' }}>{content}</div>
        )}
      </ArticleContext.Consumer>
    );
  }
};

// The ArticleSubComponent type is either of type Title, Metadata or Content
// any other type is not supported by this component, and will result in an
// error in flow if use as a child of Article
type ArticleSubComponents = typeof Title  | typeof Metadata | typeof Content;

type Property = string | Node;

type ArticleObject = {
  title: Property,
  subtitle: Property,
  author: Property,
  date: Property,
  content: Property,
};

// Here we type the props of our Article component
type Props = {
  // We assign the children prop its type: either an array of React elements of
  // type ArticleSubComponents (if Article has 2 or more children) 
  // or just a React element of type ArticleSubComponents (if Article
  // only has 1 child)
  value: ArticleObject,
  children: Array<React.Element<ArticleSubComponents>> | React.Element<ArticleSubComponents>, 
};

// This is our main Article components, which is a provider of the Article Context
const Article = (props: Props) => {
  return (
    <ArticleContext.Provider {...props}>
      {props.children}
    </ArticleContext.Provider>
  );
};

Article.Title = Title;
Article.Metadata = Metadata;
Article.Content = Content;

export default Article;
