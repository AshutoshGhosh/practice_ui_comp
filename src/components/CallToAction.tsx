import React from 'react';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0e0e0', textAlign: 'center' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={buttonLink} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', textDecoration: 'none' }}>
        {buttonText}
      </a>
    </div>
  );
};

export default CallToAction;
