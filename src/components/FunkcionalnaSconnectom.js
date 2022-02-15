import React from "react";
import { connect } from "react-redux";
import { oduzmiSlovo } from "../redux/actions";
import { useState } from "react";

const FunkcionalnaSconnectom = ({ rijec, oduzmiSlovo }) => {
  const [broj, setBroj] = useState();

  return (
    <div>
      {rijec} <button onClick={oduzmiSlovo}>Oduzmi slovo</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    rijec: state.rijec,
  };
}

const mapDispatchToProps = {
  oduzmiSlovo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunkcionalnaSconnectom);
