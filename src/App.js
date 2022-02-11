import React, { Component } from "react";
import { connect } from "react-redux";
import {
  dodajSlovo,
  oduzmiSlovo,
  resetiraj,
  osvjeziFilmove,
} from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.podaci = [];
  }

  fetchaj = async () => {
    this.podaci = await fetch("https://api.tvmaze.com/search/shows?q=star")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return data;
      });
    this.props.osvjeziFilmove(this.podaci);
  };

  render() {
    return (
      <div>
        {this.props.rijec}
        <br />
        <button onClick={this.props.oduzmiSlovo}>oduzmi slovo</button>{" "}
        <button onClick={this.props.resetiraj}>resetiraj riječ</button>{" "}
        <button onClick={this.props.dodajSlovo}>dodaj slovo</button> <br />
        <hr />
        <button onClick={this.fetchaj}>Osviježi filmove</button>
        <ul>
          {this.props.filmovi.map((element) => {
            return (
              <li key={element.show.url}>
                <a href={element.show.url}>{element.show.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rijec: state.rijec,
    filmovi: state.filmovi,
  };
}

const mapDispatchToProps = {
  dodajSlovo,
  oduzmiSlovo,
  resetiraj,
  osvjeziFilmove,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
