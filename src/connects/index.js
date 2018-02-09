import { connect } from "react-redux";
import * as actions from "../redux/actions";

/**
 * mapStateToProps
 * @param {*} state
 */
const mapStateToProps = state => ({
  // prop: state.prop
});

/**
 * mapDispatchToProps
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  dispatch1: () => {
    dispatch(actionCreator);
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
