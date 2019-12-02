import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator,ImageBackground,Image } from 'react-native';

import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Toast} from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { Dimensions } from "react-native";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};


const pieData = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];
class DashboardScreen extends Component{

    render(){
        return(
      //       <Container>
      // <ImageBackground style={styles.container} source={require('./Images/bk.jpg')}>
          
      //     <Text style={{color:'white',fontSize:30}}>
      //      Welcome To Dashboard !
      //     </Text>
          
      //     <Image
      //         style={{width: 200, height:200}}
      //         source={require('./Images/BarGraph.png')}
      //       />

      //           <Button 
      //           style={styles.btn}
      //           rounded
      //           bordered light
      //           onPress={()=> this.props.navigation.navigate('MainScreen')}
      //           >
      //           <Text style={{color:'white'}}>LOG OUT</Text>
      //           </Button>
      //        </ImageBackground>
      //     </Container>
      
        <Container>
        <ImageBackground style={styles.container} source={require('./Images/bk.jpg')}>
                  <Text>Bezier Line Chart</Text>
                  <LineChart
                    data={{
                      labels: ["January", "February", "March", "April", "May", "June"],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                          ]
                        }
                      ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel={"$"}
                    yAxisSuffix={"k"}
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fb8c00",
                      backgroundGradientTo: "#ffa726",
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16
                      },
                      propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16
                    }}
                  />

                <PieChart
                      data={pieData}
                      width={Dimensions.get("window").width}
                      height={220}
                      chartConfig={chartConfig}
                      accessor="population"
                      backgroundColor="transparent"
                      paddingLeft="15"
                      absolute
                    />
    </ImageBackground>
    </Container>

    
    

        );
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
      marginTop:30,
      width: 100,
       height: 50,
       backgroundColor: "#B8B8B8",
       alignContent:'center',
       paddingLeft:27
       //alignItems:'center'
      
      }
     
  });