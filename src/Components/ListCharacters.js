import React from "react";

export default class ListCharacters extends React.Component {
  createElem() {
    // забираем из props нужную информацию
    if (this.props.mainState.dataHeader === "people") {
      const { gender, birth_year, eye_color } = this.props.mainState;
      // создаю новый объект на этой основе
      return Object.assign({}, { gender, birth_year, eye_color });
    } else if (this.props.mainState.dataHeader === "planets") {
      const { diameter, climate, population } = this.props.mainState;
      // создаю новый объект на этой основе
      return Object.assign({}, { diameter, climate, population });
    } else {
      const { model, length, passengers } = this.props.mainState;
      // создаю новый объект на этой основе
      return Object.assign({}, { model, length, passengers });
    }
  }

  render() {
    // делаю массив данных ключь-значение для работы в цикле
    const data = Object.entries(this.createElem());
    // обрабатываем в цикле где
    // elem[0] - ключ из data;
    // elem[1] - значеник ключа
    const items = data.map((elem) => (
      <li key={elem[0]}>
        {elem[0]}: {elem[1]}
      </li>
    ));

    return <ul className="list">{items}</ul>;
  }
}
