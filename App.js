import React, { useState } from 'react';
import ImageInputList from './app/components/ImageInputList';

import Screen from './app/components/Screen';

export default function App() {
  const [imageUris, SetImageUris] = useState([]);

  const handleAdd = (uri) => {
    SetImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    SetImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
