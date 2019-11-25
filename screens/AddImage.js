import React, {useContext} from 'react';
import {
  View,
  Text,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import ImagePickerComponent from '../components/ImagePicker';
import TextInputComponent from '../components/TextInputComponent';
import Button from '../components/Button';
import {ImageContext} from '../context/imageProvider';
const {width, height} = Dimensions.get('window');

const AddImage = props => {
  const {images, uploadImages} = useContext(ImageContext);
  const [value, onChangeText] = React.useState('');
  const [currentImage, setCurrentImage] = React.useState('');
  console.log(images, uploadImages, 's');
  const addImageToState = img => {
    setCurrentImage(img.uri);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={{flex: 1, marginLeft: 'auto', marginRight: 'auto'}}>
          <View style={{width: 0.8 * width, height: height / 3}}>
            <ImagePickerComponent
              addImageToContext={addImageToState}
              currentImage={currentImage}
            />
          </View>

          <View style={{marginTop: 70, width: 0.8 * width}}>
            <TextInputComponent
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder="Photo Caption"
            />
          </View>
          <View
            style={{
              width: 0.6 * width,
              marginTop: 30,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Button
              buttonText="Submit"
              onPress={() => {
                if (currentImage === '') {
                  alert('please add image');
                } else if (!value) {
                  alert('please add a caption');
                } else {
                  uploadImages({
                    image: currentImage,
                    caption: value,
                  });
                  alert('Image uploaded..');
                  setCurrentImage('');
                  onChangeText('');
                }
              }}
            />
            <View style={{height: 20}} />
            <Button
              buttonText="Go to Images"
              onPress={() => props.navigation.navigate('BackgroundCarousel')}
              moreStyles={{backgroundColor: '#485569'}}
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default AddImage;
