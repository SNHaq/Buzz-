import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: true,
      speakerColor: 'gray',
      speakerIcon: 'volume-high-outline',
    };
  }

  async initiateTTS(title, author, story, fullDescription) {
    const current_color = this.state.speakerColor;
    this.setState({
      speakerColor: current_color === 'gray' ? 'black' : 'gray',
    });
    if (current_color === 'gray') {
      Speech.speak(`${title} by ${author}`);
      Speech.speak(story);
      Speech.speak(fullDescription);
    } else {
      Speech.stop();
    }
  }

  render() {
    if (!this.props.route.params) {
      this.props.navigation.navigate('Home');
    } else if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
          </View>
          <View style={styles.storyContainer}>
            <ScrollView style={styles.storyCard}>
              <Image
                source={require('../assets/penClipart.png')}
                style={styles.image}></Image>

              <View style={styles.dataContainer}>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.storyTitleText}>
                    {this.props.route.params.story.title}
                  </Text>
                  <Text style={styles.storyAuthorText}>
                    {this.props.route.params.story.author}
                  </Text>
                  <Text style={styles.storyAuthorText}>
                    {this.props.route.params.story.created_on}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.initiateTTS(
                        this.props.route.params.story.title,
                        this.props.route.params.story.author,
                        this.props.route.params.story.story,
                        this.props.route.params.story.fullDescription
                      )
                    }>
                    <Ionicons
                      name={this.state.speakerIcon}
                      size={RFValue(30)}
                      color={this.state.speakerColor}
                      style={{ margin: RFValue(15) }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.storyTextContainer}>
                <Text style={styles.storyText}>
                  {this.props.route.params.story.story}
                </Text>
                <Text style={styles.firstLine}>
                  {this.props.route.params.story.line1}
                </Text>
                <Text style={styles.poemText}>
                  {this.props.route.params.story.line2}
                </Text>
                <Text style={styles.poemText}>
                  {this.props.route.params.story.line3}
                </Text>
                <Text style={styles.poemText}>
                  {this.props.route.params.story.line4}
                </Text>
                <Text style={styles.poemText}>
                  {this.props.route.params.story.line5}
                </Text>
                <Text style={styles.poemText}>
                  {this.props.route.params.story.line6}
                </Text>
              
                <Text style={styles.descriptionText}>
                  Description: {this.props.route.params.story.fullDescription}
                </Text>
              </View>
              <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons
                    name={'heart'}
                    size={RFValue(30)}
                    color={'#ffb5b5'}
                  />
                  <Text style={styles.likeText}>15k</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '300%',
    height: '300%',
    resizeMode: 'contain',
    marginTop: 60,
    marginLeft: 270,
  },
  storyContainer: {
    flex: 1,
  },
  storyCard: {
    marginTop: 80,
    margin: RFValue(20),
    backgroundColor: '#ffeca3',
    borderRadius: RFValue(20),
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: 'contain',
  },
  dataContainer: {
    flexDirection: 'row',
    padding: RFValue(20),
  },
  titleTextContainer: {
    flex: 0.8,
  },
  storyTitleText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    color: 'black',
  },
  storyAuthorText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(18),
    color: 'black',
  },
  iconContainer: {
    flex: 0.2,
  },
  storyTextContainer: {
    padding: RFValue(20),
  },
  storyText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(15),
    color: 'black',
  },
  descriptionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(15),
    color: 'black',
    marginLeft: RFValue(0),
    marginTop: 15, 
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  firstLine: {
    fontFamily: 'cursive',
    fontSize: RFValue(17),
    marginTop: -10,
  },
  poemText: {
    fontFamily: 'cursive',
    fontSize: RFValue(17),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
