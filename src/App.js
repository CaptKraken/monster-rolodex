import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "sup mane",
      clicks: 0,
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.getMonster();
  }

  async getMonster() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const monsters = await res.json();
    this.setState({ monsters: monsters });
    // console.log(this.state.monsters);
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <p>{this.state.clicks}</p>
        <button
          onClick={() => this.setState({ clicks: this.state.clicks + 1 })}
        >
          change text
        </button> */}
        <input
          type="search"
          placeholder="search monsters..."
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
