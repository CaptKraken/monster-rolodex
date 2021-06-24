import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>

        <SearchBox
          placeholder="search monsters..."
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
