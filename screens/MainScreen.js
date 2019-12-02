import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator,ImageBackground,Image} from 'react-native';
import firebase from 'firebase';
import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Toast} from 'native-base';

class MainScreen extends Component{
  static navigationOptions = {
    header: null}

   /* componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn= () => {
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.props.navigation.navigate('DashboardScreen')
            }
            else{
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }*/

    render(){
        return(
        
          <Container> 
          <ImageBackground style={styles.container} source={require('./Images/bcgd.jpg')}>
            
            <Image
              style={{width: 100, height: 100}}
              source={require('./Images/logo.jpg')}
            />
            <Button style={styles.btn}
            
            rounded
            bordered light
            onPress={()=> this.props.navigation.navigate('LoginScreen')}
            >
              <Text style={{color:'white',fontWeight: "bold"}}>LOG IN</Text>
            </Button>
    
            
            <Button style={styles.btn}
            
            rounded
            bordered light
            onPress={()=> this.props.navigation.navigate('SignupScreen')}
            >
              <Text style={{color:'white',fontWeight: "bold"}}>SIGN UP</Text>
            </Button>

            
    
           
           </ImageBackground>
         
           </Container> 
           
           );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    btn:{
      marginTop:30 ,
      width: 200, 
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

