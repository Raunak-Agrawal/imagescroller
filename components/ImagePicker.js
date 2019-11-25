// import ImagePicker from 'react-native-image-picker';

// // More info on all the options is below in the API Reference... just some common use cases shown here
// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

// /**
//  * The first arg is the options object for customization (it can also be null or omitted for default options),
//  * The second arg is the callback which sends object: response (more info in the API Reference)
//  */
// ImagePicker.showImagePicker(options, (response) => {
//   console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else if (response.customButton) {
//     console.log('User tapped custom button: ', response.customButton);
//   } else {
//     const source = { uri: response.uri };

//     // You can also display the image using data:
//     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//     this.setState({
//       avatarSource: source,
//     });
//   }
// });

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const ImagePickerComponent = ({addImageToContext, currentImage}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = {uri: response.uri};
            // alert('source');
            addImageToContext(source);
          }
        });
      }}>
      <View style={styles.imagePickerBackground}>
        <Text>Touch to add Image</Text>
        {currentImage ? (
          <View style={{paddingTop: 40, width: 150, height: 150}}>
            <Image
              source={{uri: currentImage}}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagePickerBackground: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ImagePickerComponent;
