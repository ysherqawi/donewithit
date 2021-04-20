import React, { useState } from 'react';
import ImageInput from './app/components/ImageInput';

import Screen from './app/components/Screen';

export default function App() {
  const [imageUri, SetImageUri] = useState();

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => SetImageUri(uri)}
      />
    </Screen>
  );
}
