import React from "react";

interface PromotionalBannerProps {
  message: string;
  link: string;
  coverImage?: string;
  buttonText: string;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  message,
  link,
  coverImage = "https://img.freepik.com/premium-photo/abstract-blurred-backdrop-cover-modern-illustration-soft-beige-gradient-background-neutral-liquid-wallpaper-texture-great-banners-flyers-presentations_1257429-32934.jpg",
  buttonText,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "whitesmoke",
        backgroundImage: `url(${coverImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "5px",
        textAlign: "center",
        height: "25vh",
      }}
    >
      <h2>{message}</h2>
      <a
        href={link}
        style={{
          padding: "10px 20px",
          border: "1px solid #007bff",
          boxShadow: "2px 3px 5px 0 grey",
          background: "whitesmoke",
          color: "#007bff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PromotionalBanner;
