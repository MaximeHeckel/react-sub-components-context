import React from "react";

// This creates the "Article Context" i.e. an object containing a Provider and a Consumer component
const ArticleContext = React.createContext();

// This is the Title sub-component, which is a consumer of the Article Context
const Title = () => {
  return (
    <ArticleContext.Consumer>
      {({ title, subtitle }) => (
        <div style={{ textAlign: "center" }}>
          <h2>{title}</h2>
          <div style={{ color: "#ccc" }}>
            <h3>{subtitle}</h3>
          </div>
        </div>
      )}
    </ArticleContext.Consumer>
  );
};

const Metadata = () => {
  return (
    <ArticleContext.Consumer>
      {({ author, date }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {author}
          {date}
        </div>
      )}
    </ArticleContext.Consumer>
  );
};

const Content = () => {
  return (
    <ArticleContext.Consumer>
      {({ content }) => (
        <div style={{ width: "500px", margin: "0 auto" }}>{content}</div>
      )}
    </ArticleContext.Consumer>
  );
};

// This is our main Article components, which is a provider of the Article Context
const Article = props => {
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
