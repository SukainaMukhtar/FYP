import React,{Component} from 'react';
import {} from 'react-native';
import {} from 'react-navigation';
import { StyleSheet, Text, View,Alert,ImageBackground,Image,ToastAndroid} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import {Container,Content,Header,Form,Input,Item,Label,Button,Toast,Root} from 'native-base';

console.disableYellowBox=true;

class SignupScreen extends Component {
  constructor(props) {
    
    super(props);
  

    this.state={
      firstName: '',
      email:'',
      password:'',
 
       
     };
   }
 
   HandleSetFirstNameState=(firstName)=>{
     this.setState({   //Text Will be updated everytime user types something in firstName Field
       firstName,
     });
   }
 
   HandleSetEmailState=(email)=>{
     this.setState({
       email,
     });
   }
 
   HandleSetPasswordState=(password)=>{
     this.setState({
       password,
     });
   }

   HandleSetConfPasswordState=(confirmpassword)=>{
    this.setState({
      confirmpassword,
    });
  }
 
  HandleUserRegistration=()=>{
    //const email=this.state.email; //Short form for this is
    const {firstName,email,password,confirmpassword} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((userCredential) =>{
        const fbRootFS = firebase.firestore();
        
        //const userID = firebase.auth().currentUser.uid;
        var userData = userCredential.user;
        const UserID=userData.uid;
        if(password === confirmpassword){
        //Alert.alert(UserID);
        const userRef=fbRootFS.collection("users").doc(UserID);
        userRef.set({
          email,
          password,
          firstName,
        });

        ToastAndroid.showWithGravityAndOffset('Account Created!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      ); 

        this.props.navigation.navigate('LoginScreen')}
        else{
    //      Alert.alert('Mismatch!','Your Password is not same as the confirm password',
    //      [  
    //          {text: 'OK', onPress: () => console.log('OK Pressed')},  
    //      ],
    //      {cancelable: false}, //Cannot be canceled by clicking on the screen
    //  ); 
    //  ToastAndroid.show(, ToastAndroid.LONG);
     ToastAndroid.showWithGravityAndOffset('Password Mismatch!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return;

        }

        
      }).catch((error)=>{
        console.log(error.message);

        ToastAndroid.showWithGravityAndOffset(error.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return;
      });


  }
 

  render(){
  return (
    
    <Container>
      <ImageBackground 
      style={styles.container} 
      source={require('./Images/bk.jpg')}>
          
        <Image
          style={styles.logo}
          source={require('./Images/logo.jpg')}
          />

            <Item 
              rounded 
              floatingLabel 
              style={styles.textBox}>
              <Label style={styles.textContent}>First Name</Label>
              <Input  style={styles.textContent}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={this.HandleSetFirstNameState}
              />
          </Item>
        
      
          <Item 
            rounded 
            floatingLabel
            style={styles.textBox}>
            <Label style={styles.textContent}>Email</Label>
            <Input  style={styles.textContent}
            autoCorrect={false}
            autoCapitalize="none"
            // onChangeText={(email)=> this.setState({email})}
            onChangeText={this.HandleSetEmailState}
              />
          </Item>

          <Item 
            rounded 
            floatingLabel
            style={styles.textBox}>
            <Label style={styles.textContent}>Password</Label>
            <Input  style={styles.textContent}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={this.HandleSetPasswordState}
            />
          </Item>

          <Item 
            rounded 
            floatingLabel
            style={styles.textBox}>
            <Label style={styles.textContent}>Confirm Password</Label>
            <Input  style={styles.textContent}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={this.HandleSetConfPasswordState}
            />
          </Item>
         

          <Button style={styles.btn}
                  rounded
                  bordered light
          
          onPress={this.HandleUserRegistration}
          >
            <Text style={{color:'white'}}>SIGN UP</Text>
          </Button>   
      </ImageBackground>
    </Container>
   
  );
  }
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    //justifyContent: 'center',
  
  },

  textBox:{
    marginTop:10,
    backgroundColor: "#B8B8B830",  
    color:'#000000',
    width: 300, 
    height: 50,
    alignItems: 'center'
    //,justifyContent: 'center'
  },
  logo:{
    width: 70, 
    height:70,
    marginTop:30,
    marginBottom:10,
    alignItems:'center'
  },
  textContent:{
    color:'white',
    marginLeft:30
  },
  btn:{
    marginTop:20,
    width: 200,
     height: 45,
     marginTop:30,
     backgroundColor: "#B8B8B8",
     alignContent: 'center',
     justifyContent: 'center'
  }

});
