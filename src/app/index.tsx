import React, { useState } from 'react';
import { View, Text, Button, Modal, Image } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={{ padding: 20 }}>
          <Text>This is a modal window.</Text>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'
            }}
            style={{ width: 300, height: 200 }}
            resizeMode="contain"
          />

          <Button
            title="Close Modal"
            onPress={() => setVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
