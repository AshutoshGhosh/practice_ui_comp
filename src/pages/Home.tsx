import React from "react";
import SEO from "../components/SEO";
import Chatbot from "../components/Chatbot";
import SocialShareButtons from "../components/SocialShareButtons";
import PromotionalBanner from "../components/PromotionalBanner";
import EmailSubscriptionForm from "../components/EmailSubscriptionForm";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Home: React.FC = () => {
  // Example testimonials data
  const testimonialData = [
    {
      name: "Alice Johnson",
      message: "This product changed my life for the better!",
      image: "https://via.placeholder.com/60",
    },
    {
      name: "Bob Smith",
      message: "Amazing quality and fantastic customer service.",
      image: "https://via.placeholder.com/60",
    },
    {
      name: "Charlie Brown",
      message: "I highly recommend this to everyone!",
      image: "https://via.placeholder.com/60",
    },
    {
      name: "Diana Prince",
      message: "A truly wonderful experience from start to finish!",
      image: "https://via.placeholder.com/60"
    },
    {
      name: "Ethan Hunt",
      message: "Excellent support and a great product.",
      image: "https://via.placeholder.com/60"
    },
    {
      name: "Fiona Glenanne",
      message: "I can't imagine life without it now!",
      image: "https://via.placeholder.com/60"
    },
  ];

  return (
    <div>
      <SEO
        title="Home Page - My App"
        description="This is the homepage of my SEO-enhanced app."
        canonicalUrl="https://mywebsite.com/home"
        keywords="React, SEO, Vite, TypeScript"
        image="https://mywebsite.com/image.jpg" // Example image for social media
      />

      {/* Promotional Banner */}
      <PromotionalBanner
        message="Get 20% off your first purchase!"
        link="https://mywebsite.com/signup"
        buttonText="Sign Up Now"
      />

      {/* Social Share Buttons */}
      <SocialShareButtons
        title="Home Page - My App"
        url="https://mywebsite.com/home"
      />

      {/* Email Subscription Form */}
      <EmailSubscriptionForm />

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonialData} />

      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Start?"
        description="Join us today and experience the difference!"
        buttonText="Get Started"
        buttonLink="https://mywebsite.com/get-started"
      />
      <Chatbot />
    </div>
  );
};

export default Home;
