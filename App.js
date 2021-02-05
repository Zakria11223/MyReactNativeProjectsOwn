// Main APP
// ============================================================================================
import React, { useState } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  form,
  Image,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MainHeader from'./Components/MainHeader';
// or any pure javascript modules available in npm

// import {MapView,Permissons} from 'expo';

import { createStackNavigator } from "@react-navigation/stack";
import SliderText from "react-native-slider-text";
import AppIntroSlider from "react-native-app-intro-slider";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-navigation";
import * as firebase from "firebase";
// import Login from './Components/Login';

import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';

// Your web app's Firebase configuration
var 
firebaseConfig = {
  apiKey: "AIzaSyCZG8AjlgNqV8ikkj-XxSJY-2wB7JzjL3c",
  authDomain: "ambulancedatabase.firebaseapp.com",
  databaseURL: "https://ambulancedatabase.firebaseio.com",
  projectId: "ambulancedatabase",
  storageBucket: "ambulancedatabase.appspot.com",
  messagingSenderId: "820980051959",
  appId: "1:820980051959:web:8a17df5f64e8749d8048f2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.database().ref.set(
//   {
//     name:"zakria",
//     age:22
//   }
// );
// ======================================================================================
const SplashScreen = ({ navigation }) => {
  return (
    <View>
      {/* <View>
          // <MapView style = {{}}></MapView>
          </View> */}
      <Image
        style={styles.tinyLogo}
        source={require("./assets/simple_amb.jpg")}
      />

      <Text style={styles.header_s}>Ambulances</Text>

      <Text
        style={{
          color: "red",
          fontWeight: "bold",
          marginLeft: 170,
          marginTop: 0,
        }}
      >
        Rescue 1122
      </Text>
      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.btntxt}>Signup</Text>
      </TouchableOpacity>

      {/* onPress={()=>this.props.navigation.navigate('RegForm')} */}
      <Text style={{ color: "red", marginLeft: 170, marginTop: 50 }}>
        Donot have an account yet?
      </Text>
      <TouchableOpacity
        style={styles.buttonsignin}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.btntxtsignin}>Signin</Text>
      </TouchableOpacity>
    </View> // view ended
  ); // return ended
}; // render method
// class ended

// ======================================================================================
// return(
//   <MapView style={{ width:200,height:500,marginLeft:80}} />
//     );

const GoogleScreen = ({ navigation }) => {

  return(
    <View style= {styles.MainHeaderStyle}>
      <MainHeader/>
      </View>

  )


  // const [showRealApp, setShowRealApp] = useState(false);

  // const onDone = () => {
  //   setShowRealApp(true);
  // };
  // const onSkip = () => {
  //   setShowRealApp(true);
  // };

  // const RenderItem = ({ item }) => {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: item.backgroundColor,
  //         alignItems: "center",
  //         justifyContent: "space-around",
  //         paddingBottom: 100,
  //       }}
  //     >
  //       <Text style={styles.introTitleStyle}>{item.title}</Text>
  //       <Image style={styles.introImageStyle} source={item.image} />
  //       <Text style={styles.introTextStyle}>{item.text}</Text>
  //     </View>
  //   );
  // };


  // // componentDidMount()
  // //  {

  // //   firebase.auth().onAuthStateChanged(user=>{
    
  // //     if(user)
  // //     {
  // //       email:user.email;
  // //     }
  // //     else{
  // //       navigation.navigate("SignIn")
  // //     }
  // //   })
    
  // // }
  
  

  // return (
  //   <>
  //     {showRealApp ? (
  //       <SafeAreaView style={styles.container}>
  //         <View style={styles.container}>
  //           <Text style={styles.titleStyle}>
  //             React Native App Intro Slider using AppIntroSlider
  //           </Text>
  //           <Text style={styles.paragraphStyle}>
  //             This will be your screen when you click Skip from any slide or
  //             Done button at last
  //           </Text>
  //           <Button
  //             title="Show Intro Slider again"
  //             onPress={() => setShowRealApp(false)}
  //           />
  //         </View>
  //       </SafeAreaView>
  //     ) : (
  //       <AppIntroSlider
  //         data={slides}
  //         renderItem={RenderItem}
  //         onDone={onDone}
  //         showSkipButton={true}
  //         onSkip={onSkip}
  //       />
  //     )}
  //   </>

    
  // );
};
// =============================================================================================
// =============================================================================================
const SignUpScreen = ({ navigation }) => {
  const [textInputName, setTextInputName] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputPassword, setTextInputPassword] = useState("");
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textInputName.trim()) {
      alert("Please Enter Name");
      return;
    }
    //Check for the Email TextInput
    if (!textInputEmail.trim()) {
      alert("Please Enter Email");
      return;
    }
    //Check for the Password TextInput
    if (!textInputPassword.trim()) {
      alert("Please Enter Passwordl");
      return;
    }
    //Checked Successfully
    //Do whatever you want
    alert("Success");
    {
      navigation.navigate("SignIn");
    }
  };

// =============================================================================================
// =============================================================================================  
  const userSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textInputEmail, textInputPassword)
      .then(() => {
        {
          navigation.navigate("SignIn");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/simple_amb.jpg")}
      />

      <Text style={styles.header}>SiGN UP</Text>
      {/* epo sta */}

      <Text
        style={{
          marginLeft: 150,
          fontWeight: "bold",
          fontSize: 20,
          color: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        NICE TO MEET YOU
      </Text>
      <View style={styles.SectionStyle}>
        <Image
          source={require("./assets/tiny_user.png")}
          style={styles.tiny_email}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your Name"
          autoCompleteType="username"
          onChangeText={(textInputName) => setTextInputName(textInputName)}
          underlineColorAndroid={"transparent"}
        />
      </View>
      {/* <Text>{Name}</Text> */}

      <View style={styles.SectionStyle}>
        <Image
          source={require("./assets/email_icon1.png")}
          style={styles.tiny_email}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your Email"
          onChangeText={(textInputEmail) => setTextInputEmail(textInputEmail)}
          underlineColorAndroid={"transparent"}
        />
      </View>

      <View style={styles.SectionStyle}>
        <Image
          source={require("./assets/tiny_password1.png")}
          style={styles.tiny_email}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your Password"
          onChangeText={(textInputPassword) =>
            setTextInputPassword(textInputPassword)
          }
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        />
        {/* ()=>navigation.navigate('Google') */}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={userSignup}
        // onPress = {()=>navigation.navigate('SignIn')
      >
        <Text style={styles.btntxt}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
// ======================================================================================

// ======================================================================================
const SignInScreen = ({ navigation }) => {
  function showAlert() {
    return <MapView style={{ width: 80, height: 80 }} />;
  }

  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputPassword, setTextInputPassword] = useState("");
  const checkTextInput = () => {
    //Check for the Name TextInput

    //Check for the Email TextInput
    if (!textInputEmail.trim()) {
      alert("Please Enter Email");
      return;
    }
    //Check for the Password TextInput
    if (!textInputPassword.trim()) {
      alert("Please Enter Passwordl");
      return;
    }
    //Checked Successfully
    //Do whatever you want
    alert("Success");

    {
      navigation.navigate("Google");
    }
  };
  const userSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textInputEmail, textInputPassword)
      .then(() => {
        {
          navigation.navigate("Google");
        }
      })
      .catch(error=> {
        alert(error.message);
      });
  };


  // const userSignin = ()=>
  // {
      
  //     firebase
  //     .auth
  //     .signInWithEmailAndPassword(textInputEmail,textInputPassword)
  //     .then(() => {
  //       {
  //         navigation.navigate("Google");
  //       }
  //     })
  //     .catch((error)=>{
  //       alert(errot.message);
  //     });
  // };
  return (
    <View style={styles.loginform}>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/simple_amb.jpg")}
      />

      {/* <Image style = {styles.tinyLogo} source={require('./simple_amb.jpg')} /> */}
      <Text
        style={{
          fontWeight: "bold",
          marginLeft: 85,
          color: "red",
          fontSize: 30,
        }}
      >
        Welcome To Ambulance
      </Text>
      {/* <Image  style = {styles.logo} 
    source= {require('./Components/ambulancelogo1.jpg')}  */}

      <Text style={styles.header}>Loginn</Text>

      {/* onChangeText={(value)=>this.setState({userpassword:value})} */}
      {/* onChangeText={(value)=>p.setState({useremail:value})} */}
      {/* ===============================================================================*/}
      {/* <form onSubmit = {onSubmit}> */}
      <View style={styles.SectionStyle}>
        <Image
          source={require("./assets/email_icon1.png")}
          style={styles.tiny_email}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your Email"
          onChangeText={(textInputEmail) => setTextInputEmail(textInputEmail)}
          underlineColorAndroid={"transparent"}
          screenTextEntry={true}
          //  onChangeText = { (e)=>{setEmail(e.target.value)} }
          //  ()=>{console.warn("it working fine")}
        />
        {/* {Object.keys(EmailErr).map((key)=>{
        return <Text style = {{color:'red'}}>{EmailErr[key]}</Text>

      })} */}
      </View>
      <View style={styles.SectionStyle}>
        <Image
          source={require("./assets/tiny_password1.png")}
          style={styles.tiny_password}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your Passwordss"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
          onChangeText={(textInputPassword) =>
            setTextInputPassword(textInputPassword)
          }
          // onChangeText = { (e)=>{setData(e.target.value)} }
        />
      </View>
      {/* <Text>{Data}</Text> */}
      {/* onPress = {()=>setData(8)} */}
      {/* onPress = {Test} */}
      {/* ===============================================================================*/}
      <TouchableOpacity style={styles.button} onPress={userSignin}>
        <Text style={styles.btntxt}>login</Text>
      </TouchableOpacity>
      {/* </form> */}
      {/* <Text>{Data}</Text> */}

      {/* <Validate message = "you are login"/> */}
    </View> // view ended
  ); // return ended
}; // render method

// // ======================================================================================

// For styling
const styles = StyleSheet.create({

  MainHeaderStyle:
  {
    flex:1,
    backgroundColor:'#fff',



  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },

  // ======================================================================================
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },

  splash: {
    backgroundColor: "#fff",
  },
  header_s: {
    color: "red",
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 170,
    fontWeight: "bold",
    //borderBottomWidth:1,
    //borderBottomColor:'#cb6359',
  },

  buttonsignin: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 40,
  },
  btntxt: {
    fontWeight: "bold",
    color: "#fff",
  },
  btntxtsignin: {
    fontWeight: "bold",
    color: "red",
  },

  // ======================================================================================
  regform: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginform: {
    backgroundColor: "#fff",
  },
  header: {
    color: "red",
    fontSize: 30,
    paddingBottom: 10,
    marginBottom: 40,
    marginTop: 44,
    marginLeft: 170,
  },
  tinyLogo: {
    marginLeft: 170,
    width: 120,
    height: 120,
  },
  textinput: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
    marginLeft: 20,
  },
  button: {
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 40,
    fontSize: 40,
    color: "red",
    backgroundColor: "red",
  },
  btntxt: {
    fontWeight: "bold",
    color: "#fff",
  },
  tiny_email: {
    padding: 10,
    marginBottom: 0,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    marginLeft: 0,
  },
  tiny_password: {
    padding: 10,
    marginBottom: 0,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },

  // ======================================================================================
});

// ======================================================================================
const Stack = createStackNavigator();
const App = () => {

  // console.log(useDimenshion());
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home Screen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Google" component={GoogleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const slides = [
//   {
//     key: "s1",
//     text: "Emergency Call",
//     title: "You can call by 1122",
//     Button: "click me",
//     image: {
//       uri:
//         "https://2.bp.blogspot.com/-0n-wrBRhtcg/WC3e9CH7cMI/AAAAAAAAOXg/WL---KLV0hgN3CPL1QcQIr9e0Q_lGD37gCLcB/s1600/Police%2BRescue%2BEmergency%2BHelpline.jpg",
//     },

//     backgroundColor: "white",
//   },
//   {
//     key: "s2",
//     title: "About Us",
//     text: "Upto 25% off on Domestic Flights",
//     image: {
//       uri:
//         "data:image/jpeg;base64,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",
//     },
//     backgroundColor: "#febe29",
//   },
//   {
//     key: "s3",
//     title: "Great Offers",
//     text: "Enjoy Great offers on our all services",
//     image: {
//       uri:
//         "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png",
//     },
//     backgroundColor: "#22bcb5",
//   },
//   {
//     key: "s4",
//     title: "Best Deals",
//     text: " Best Deals on all our services",
//     image: {
//       uri:
//         "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png",
//     },
//     backgroundColor: "#3395ff",
//   },
//   {
//     key: "s5",
//     title: "Ambulance Driver",
//     text: "",
//     image: {
//       uri:
//         "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png",
//     },
//     backgroundColor: "#f6437b",
//   },
//   {
//     key: "s6",
//     title: "Find Guide us",
//     text: " 10% off on first Train booking",
//     image: {
//       uri:
//         "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png",
//     },
//     backgroundColor: "#febe29",
//   },
// ];

export default App;
// const [sliderValue, setSliderValue] = useState(0);
    // return (
    //  <View style={styles.container}>
    //    <Text style={styles.title}>
    //      Little interest or pleasure in doing things?
    //    </Text>
    //    <SliderText
    //      minimumTrackTintColor="#000"
    //      thumbTintColor="#000"
    //      maximumTrackTintColor="#099"
    //      maximumValue={5}
    //      stepValue={1}
    //      minimumValueLabel="Never"
    //      maximumValueLabel="Always"
    //      onValueChange={(id) => setSliderValue(id)}
    //      sliderValue={sliderValue}
    //    />
    //  </View>