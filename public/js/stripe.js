/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51KJk9EAlk7kGGinRo0UZCC2O9aHthR5pAgVreZLVG4dGVXNqbVvKyIEqUGAtvLRVmQQPJcNqRmLYPjyPKW9icJtk00Mrs5BsGw'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (e) {
    console.log(e);
    showAlert('error', e);
  }
};
