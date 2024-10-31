import { useState } from 'react';

const useEmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribing' | 'success' | 'error'>('idle');

  const subscribe = async () => {
    setStatus('subscribing');
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      // Reset email after subscription
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return {
    email,
    setEmail,
    subscribe,
    status,
  };
};

export default useEmailSubscription;
