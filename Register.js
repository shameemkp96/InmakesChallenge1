import React,{Component} from "react";

import{
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  


}from 'react-native'

class RegisterContent extends Component{
  render(){
    return(
      <View>
        <Text style={styles.contentStyle}>Hello {this.props.name}</Text>
      </View>
    )
  }
}

export default class Register extends Component{
  
  
  
  constructor(props){
    super(props);
    this.state= {
      main_text:'Welcome to Our Society',
      name: null
    }
  }



  updateValue(username){
    // console.log(username)
    this.setState({name:username})
  }

  updatePage(){
    this.setState({
      main_text:"Registered Successfully"
    })
  }

  componentDidMount(){
    console.log(this.props.route.params.username)
  }
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./Assets/bg.jpg')}
          style={styles.backgroundImg}>

            <Image source={require('./Assets/logo.png')}
              style={styles.logo}>

            </Image>
                <Text style={styles.text}>{this.state.main_text} </Text>
                <TextInput style={styles.inputView}
                placeholder='Full Name'
                placeholderTextColor='white'
                maxLength={16}>
                

                </TextInput>
                <TextInput style={styles.inputView}
                placeholder='username'
                placeholderTextColor='#fff'
                onChangeText={(username)=>this.updateValue(username)}>
                    
                </TextInput>
                <View style={styles.container2}>
                <TextInput style={styles.countryCode}
                placeholder="+91"
                placeholderTextColor="#fff">

                </TextInput>
                <TextInput style={styles.mob}
                placeholder='Mobile'
                placeholderTextColor='#fff'
                keyboardType='numeric'>

                </TextInput>

                </View>
      
                
                <TextInput
                style={styles.inputView}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={true}>

                </TextInput>
                <TouchableHighlight style={styles.button}
                onPress={()=>this.props.navigation.navigate('login',{username: this.state.name})}
                underlayColor='transparent'>
                  <Text style={styles.buttonText}>REGISTER</Text>

                </TouchableHighlight>
                <RegisterContent  name='shameeem'>

                </RegisterContent>
                

                
                
                
                

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    //backgroundColor:'red',
  },
  backgroundImg:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  logo:{
    height:200,
    width:200,
    //marginBottom:,
    alignItems:'center',
    justifyContent:'center',

  },
  text:{
    fontSize:26,
    fontWeight:'bold',
   // backgroundColor:'black',
    color:'white',
    marginBottom:25,

  },
  inputView:{
    width:'60%',
    height:55,
    backgroundColor:'#870505',
    marginBottom:10,
    marginTop:10,
    paddingLeft:100,
    fontWeight:'bold',
    borderRadius:15,
    justifyContent:'center',
    
    
  },
  countryCode:{
    width:'14%',
    height:55,
    backgroundColor:'#870505',
    fontWeight:'bold',
    borderRadius:5,
    paddingLeft:10,
    marginTop:10,
    marginBottom:10,
    marginRight:10
  },
  button:{
    height:35,
    width:'30%',
    backgroundColor:'#fff',
    borderWidth:1,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  buttonText:{
    fontSize:22,
    fontWeight:'bold',
    color:'#000'
  },
  container2:{
    flexDirection:'row',
  },
  mob:{
    width:'40%',
    height:55,
    backgroundColor:'#870505',
    paddingLeft:60,
    fontWeight:'bold',
    borderRadius:15,
    marginTop:10,

  },
  contentStyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginTop:5,
  }
  
})