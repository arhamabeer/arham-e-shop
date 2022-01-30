import React from "react";
import { connect } from "react-redux";
import { Elements, StripeProvider } from "react-stripe-elements";

import Loader from "./components/Loader";
import MessageBox from "./components/MessageBox";
import categoryActions from "./redux/category/action";
import Router from "./config/router";


function App(props) {
  props.fetchAllCategories();

  return (
    <StripeProvider apiKey="pk_test_51KNJpMJJG1HyJ8x2VCwq2uVVPohIq1NffTWcQSbcE87Ax2ZfWmOZfexrjZZXEkS6vOv0f7iZwc115U1lLdBL5pMU00UA51IZP7">
      <div id="outside-router">
        <Elements>
          <Router />
        </Elements>
        {props.loading && <Loader />}
        {props.message && (
          <MessageBox
            type={props.message.type}
            message={props.message.message}
          />
        )}
      </div>
    </StripeProvider>
  );
}

const mapStateToProps = state => ({
  loading: state.loading.loading,
  message: state.messageBox.message
});

const mapDispatchToProps = {
  fetchAllCategories: categoryActions.fetchAllCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
