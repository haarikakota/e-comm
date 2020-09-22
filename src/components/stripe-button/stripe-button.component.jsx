import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HUJF2IXnPy1y20TRXk4vE69d1Gv6hA4FwemUlS8bQsz3vtiNSTMZ9SeDby4LFoF163yrmrhrkfBUJKm3z4MMQH100GE9Fn6Ux';

const onToken = token => {
    console.log(token);
    alert('payment Successful');
}

    return (
        <StripeCheckout
            label= 'Pay Now'
            name='E-Comm Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;