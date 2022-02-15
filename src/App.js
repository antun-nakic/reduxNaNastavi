import React, { Component } from "react";
import { connect } from "react-redux";
import SpojiSeNaStanje from "./components/SpojiSeNaStanje";
import FunkcionalnaSconnectom from "./components/FunkcionalnaSconnectom";
import UnosimStore from "./components/UnosimStore";
import {
  dodajSlovo,
  oduzmiSlovo,
  resetiraj,
  osvjeziFilmove,
} from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { krumpir: "mladi" };
  }

  render() {
    return (
      <div>
        {this.props.rijec}
        <br />
        <button onClick={this.props.oduzmiSlovo}>oduzmi slovo</button>{" "}
        <button onClick={this.props.resetiraj}>resetiraj riječ</button>{" "}
        <button onClick={this.props.dodajSlovo}>dodaj slovo</button> <br />
        <hr />
        <SpojiSeNaStanje />
        <hr />
        <FunkcionalnaSconnectom />
        <hr />
        Krumir je {this.state.krumpir}{" "}
        <button onClick={() => this.setState({ krumpir: "stari" })}>
          Promijeni Krumpir
        </button>
        <hr />
        <UnosimStore />
        <hr />
        <button onClick={this.props.osvjeziFilmove}>Osviježi filmove</button>
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
