import React from "react";
import useEmailSubscription from "../hooks/useEmailSubscription"; 

const EmailSubscriptionForm: React.FC = () => {
  const { email, setEmail, subscribe, status } = useEmailSubscription();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe(); // Call the subscribe function from the hook
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "10px 20px" }}>
        Subscribe
      </button>

      {/* Display status messages */}
      {status === "subscribing" && <p>Subscribing...</p>}
      {status === "success" && <p>Subscribed successfully!</p>}
      {status === "error" && <p>Error occurred. Please try again.</p>}
    </form>
  );
};

export default EmailSubscriptionForm;
