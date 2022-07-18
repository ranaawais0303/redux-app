import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { withdrawMoney } from "../state/action-creators";
import { actionCreators } from "../state/index";
function Shop(props) {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);

  //with bind actions
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const decrementHandler = () => withdrawMoney(100);
  const incrementHandler = () => depositMoney(100);
  // const decrementHandler = () => {
  //   dispatch(actionCreators.withdrawMoney(100));
  // };
  // const incrementHandler = () => {
  //   dispatch(actionCreators.depositMoney(100));
  // };
  // actionCreators.depositMoney(dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={decrementHandler}>
        -
      </button>
      Update Balance({balance})
      <button className="btn btn-primary mx-2" onClick={incrementHandler}>
        +
      </button>
    </div>
  );
}
export default Shop;
