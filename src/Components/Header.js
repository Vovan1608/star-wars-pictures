import React from "react";

export default class Header extends React.Component {
  state = { dataHeader: "people" };

  handlerClick = async (e) => {
    if (e.target.tagName === "BUTTON") {
      await this.setState({ dataHeader: e.target.innerText });
    }
    await this.props.updateData(this.state.dataHeader);
  };

  render() {
    const headers = ["people", "planets", "starships"];
    const items = headers.map((elem) => <button key={elem}>{elem}</button>);

    return (
      <div className="header" onClick={this.handlerClick}>
        {items}
      </div>
    );
  }
}
