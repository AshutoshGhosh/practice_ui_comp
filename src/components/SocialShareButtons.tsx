import React from "react";

interface SocialShareButtonsProps {
  title: string;
  url: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  title,
  url,
}) => {
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  return (
    <div>
      <a href={twitterShare} target="_blank" rel="noopener noreferrer">
        Share on Twitter
      </a>
      <a href={facebookShare} target="_blank" rel="noopener noreferrer">
        Share on Facebook
      </a>
      <a href={linkedInShare} target="_blank" rel="noopener noreferrer">
        Share on LinkedIn
      </a>
    </div>
  );
};

export default SocialShareButtons;
