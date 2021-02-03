import React from "react";
import Header from "./Components/Header";
import ImgCharacters from "./Components/ImgCharacters";
import ListCharacters from "./Components/ListCharacters";
import "./App.css";
import ajax from "./services/sw-service";

export default class App extends React.Component {
  state = {
    url: "https://swapi.dev/api",
    name: " ",
    gender: " ",
    birth_year: " ",
    eye_color: " ",
    path: 1,
    dataHeader: "people",
  };

  componentDidMount() {
    this.getData();
  }
  // так как setState - ассинхронная функция, нужно
  // использовать в setState callback, который получает
  // как аргумент прошлое состояние state:
  counterPathUp = () => {
    this.setState((prevState) => {
      return {
        path: prevState.path + 1,
      };
    });
  };

  handleClick = async () => {
    await this.counterPathUp();
    this.getData();
  };

  getData = async () => {
    const data = await ajax(this.state);

    if (!data) {
      console.log("picture not found");
    }
    const { dataHeader } = this.state;

    if (dataHeader === "people") {
      // деструктуризация объекта
      const { name, gender, eye_color, birth_year } = data;
      this.setState({ name, gender, eye_color, birth_year });
    } else if (dataHeader === "planets") {
      const { diameter, climate, population, name } = data;
      this.setState({ diameter, climate, population, name });
    } else {
      const { model, length, passengers, name } = data;
      this.setState({ model, length, passengers, name });
    }
  };

  updateData = (value) => {
    this.setState({ dataHeader: value });
  };

  render() {
    return (
      <div className="App">
        <Header updateData={this.updateData} />
        <ImgCharacters mainState={this.state} />
        <button className="button" onClick={this.handleClick}>
          NEXT
        </button>
        <h3>{this.state.name}</h3>
        <ListCharacters mainState={this.state} />
      </div>
    );
  }
}
