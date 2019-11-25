import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

// import {images} from './data/imageData';
import {ImageContext} from '../context/imageProvider';
const {width, height} = Dimensions.get('window');

const BackgroundCarousel = ({onPressAddImage, ...otherProps}) => {
  const {images} = useContext(ImageContext);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled>
        {images.length > 0 ? (
          images.map((img, index) => {
            return (
              <View key={index}>
                <View style={{width: width, height: 0.7 * height}}>
                  <Image
                    source={{uri: img.image}}
                    style={styles.imgStyle}
                    resizeMode="cover"
                  />
                </View>

                <ScrollView
                  contentContainerStyle={{
                    paddingVertical: 10,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    marginHorizontal: 10,
                    // height: 30,
                    //
                  }}>
                  <Text style={{color: '#000', maxWidth: width * 0.9}}>
                    {img.caption}
                  </Text>
                </ScrollView>
              </View>
            );
          })
        ) : (
          <Text
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
              paddingHorizontal: width / 3,
            }}>
            Please add images
          </Text>
        )}
      </ScrollView>
      <View
        style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => otherProps.navigation.navigate('AddImage')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonStyle}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  contentContainerStyle: {
    // height: '100%',
  },
  buttonContainer: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#146af5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    color: '#fff',
    fontSize: 40,
  },
});

export default BackgroundCarousel;
