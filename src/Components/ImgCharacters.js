import React from "react";

export default class ImgCharacters extends React.Component {
  state = {
    url: "https://starwars-visualguide.com/assets/img",
  };

  render() {
    const { path, name, dataHeader } = this.props.mainState;
    let imgPath = "characters";
    if (dataHeader === "people") {
      imgPath = "characters";
    } else if (dataHeader === "planets") {
      imgPath = "planets";
    } else {
      imgPath = "starships";
    }

    return (
      <img
        className="img"
        src={`${this.state.url}/${imgPath}/${path}.jpg`}
        alt={name}
      />
    );
  }
}
