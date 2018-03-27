import React, { Component } from "react";
import Article from "./Article";

const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

class App extends Component {
  render() {
    const content = {
      title: <h1>React sub-components with</h1>,
      subtitle: (
        <div>Let's make simpler and more flexible React components</div>
      ),
      author: "Maxime Heckel",
      date: <i>April 2018</i>,
      content: <p>{text}</p>
    };

    return (
      <Article value={content}>
        <Article.Title />
        {/* here we can see that wrapping the metadata sub-component is now possible thanks to contexts*/}
        <div style={{ width: "500px", margin: "80px auto" }}>
          <Article.Metadata />
        </div>
        <Article.Content />
      </Article>
    );
  }
}

export default App;
