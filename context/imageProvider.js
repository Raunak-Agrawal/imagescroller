import React, {createContext, useState} from 'react';

export const ImageContext = createContext({
  images: [],
  uploadImages: () => {},
});

const ImageProvider = ({children}) => {
  const [images, setImages] = useState([]);
  const uploadImages = img => setImages(images ? images.concat(img) : []);

  return (
    <ImageContext.Provider
      value={{
        images,
        uploadImages,
      }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
