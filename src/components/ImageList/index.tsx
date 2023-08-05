import fs from 'fs';
const path = '../../../public/images/'

export function getImages(): string[] {
  const publicPath = './public/images';
  const imageFiles = fs.readdirSync(publicPath);
  const imageNames = imageFiles.filter((file) => /\.(png|jpe?g)$/i.test(file));
  return imageNames;
}

import React, { useEffect } from 'react';

export const ImageList: React.FC = () => {
  const imageNames = getImages();

  return (
    <div>
      <h2>Lista de Imagens:</h2>
      <ul>
        {imageNames.map((imageName, index) => (
          <div key={index} >
            <img src={`${path}/${imageName}`} alt=""/>
            <p>{imageName}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};