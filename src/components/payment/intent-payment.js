import Stripe from "stripe";

const stripe = new Stripe( process.env.NEXT_STRIPE_API_KEY);

export default async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100, // Replace with the amount you want to charge in cents
    currency: "inr",
  });

  res.json({ client_secret: paymentIntent.client_secret });
};