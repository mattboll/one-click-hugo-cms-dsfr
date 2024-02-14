import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return <div>
      <h1 className="fr-h1">
        {title}
      </h1>
      <h2 className="fr-h2">
        {subtitle}
      </h2>
    </div>
      ;
  }
}
