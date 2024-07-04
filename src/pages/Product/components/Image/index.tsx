import React, { useState } from "react";

const ProductImage = ({ productId, title }: any) => {
  const [mainImage, setMainImage] = useState(
    `https://picsum.photos/1000/980?random=${productId}`
  );
  const handleImageHover = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  const imageUrls = Array.from(
    { length: 4 },
    (_, index) => `https://picsum.photos/1000/980?random=${productId}+${index}`
  );
  
  return (
    <div>
      <div className="image">
        <img src={mainImage} alt={title} />
      </div>
      <div className="sub-images">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={title}
            className={mainImage === url ? "!opacity-100 !scale-105" : ""}
            onMouseEnter={() => handleImageHover(url)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
