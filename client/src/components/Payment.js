import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  navButton: {
    color: "#FFF5D1",
    margin: "0 10px",
  },
}));

function loadScript(src) {
  return new Promise((resolve) => {
    // New Script tag created
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    // Script tag added to the body
    document.body.appendChild(script);
  });
}

function Payment(props) {
  const classes = useStyles();

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    // Logic For checking whether SDK loaded or not
    if (!res) {
      alert("RazorSDK failed to load. are you Online?");
      return;
    }
    const data = await fetch("api/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data, "data here");

    var options = {
      key: data.keyId,
      currency: data.currency, //Sent from order response
      amount: data.amount.toString(), //Sent from order response
      order_id: data.id, //Sent from order response
      name: "Wizer Academy",
      description: "Tution Fees",
      image: "/api/logo.jpg",
      // commented handler for future use
      // handler: function (response) {
      //   alert(response.razorpay_payment_id);
      //   alert(response.razorpay_order_id);
      //   alert(response.razorpay_signature);
      // },
    };
    // New Razorpay window Created
    var paymentObject = new window.Razorpay(options);
    // Razorpay window opened
    paymentObject.open();
  }

  const renderPayment = () => {
    console.log(props, "from Payment");
    switch (props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className={classes.navButton}
            onClick={displayRazorpay}
          >
            Payment
          </Button>
        );
    }
  };
  return (
    <div>
      <Grid item>{renderPayment()}</Grid>
    </div>
  );
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Payment);
