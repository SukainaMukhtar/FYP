import React,{Component} from 'react';
import { ActivityIndicator, StyleSheet, Text, View,Alert,ImageBackground,Image,ToastAndroid} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Label,Button,Body,Title,Left,Toast,Root} from 'native-base';
import firebase from 'firebase';
import { TextInput } from 'react-native-paper';


class LoginScreen extends Component{


    constructor(props) {
        super(props);
    
        this.state=({
          email:'',
          password:'',
          authenticating:false
        })
      }    
      loginUser = (email,password) => {
          this.setState({authenticating:true});
          firebase.auth().signInWithEmailAndPassword(email.trim(),password).then(function(user){  
          ToastAndroid.show('Login Successfull !', ToastAndroid.LONG);
            this.props.navigation.navigate('DashboardScreen')
            console.log(user)
          }.bind(this)
          ).catch((error)=>{
          ToastAndroid.show(error.message, ToastAndroid.LONG);
          return;
             
        })
    
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
            <Label 
            style={styles.textContent}>Email</Label>
            <Input 
            style={styles.textContent}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email)=> this.setState({email})}
              />    
            </Item>

            <Item  
            rounded 
            style={styles.textBox} 
            floatingLabel >
            <Label 
            style={styles.textContent}>Password</Label>
            <Input  
            style={styles.textContent}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password)=> this.setState({password})}
           />       
            </Item>

            <Button 
            style={styles.btn}
            rounded
            bordered light
            onPress={()=>this.loginUser(this.state.email,this.state.password)}
            >
            <Text style={{color:'white'}}>LOGIN</Text>
            </Button>

            {/* <ActivityIndicator size='large'/> */}

            {/* <Button 
            hasText 
            transparent
            onPress={()=> this.props.navigation.navigate('Forgotpassword')}>
          <Text style={{color:'white'}}>Forget Password?</Text>
        </Button>        */}
  </ImageBackground>

  </Container>
  
      );
    }
  }

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo:{
      width: 100,
       height: 100
      },
      textBox:{
        marginTop:10,
        backgroundColor: "#B8B8B830",
        color:'#000000',
        width: 300, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      btn:{
        marginTop:30,
        width: 200,
         height: 50,
         backgroundColor: "#B8B8B8",
         alignContent:'center',
         justifyContent:'center'
        },
        textContent:{
          color:'white',
          marginLeft:30
        }

  });
 