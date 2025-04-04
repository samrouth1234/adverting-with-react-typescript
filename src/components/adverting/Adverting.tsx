import { useEffect, useState } from "react";

import ad1 from "../../assets/ads-1.png";
import ad2 from "../../assets/ads-2.png";
import ad3 from "../../assets/ads-3.png";

import { Ad } from "../../types/types";

const ads: Ad[] = [
  {
    id: 1,
    imageUrl: ad1,
    link: "https://example.com/ad1",
    altText: "Ad 1",
  },
  {
    id: 2,
    imageUrl: ad2,
    link: "https://example.com/ad2",
    altText: "Ad 2",
  },
  {
    id: 3,
    imageUrl: ad3,
    link: "https://example.com/ad3",
    altText: "Ad 3",
  },
];
const Adverting = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // Change ad every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentAdIndex]);

  const currentAd = ads[currentAdIndex];

  return (
    <div>
      <a href={currentAd.link} target="_blank" rel="noopener noreferrer">
        <img
          src={currentAd.imageUrl}
          alt={currentAd.altText}
          className="img-fluid rounded"
        />
      </a>
    </div>
  );
};

export default Adverting;
