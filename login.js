import React,{Component} from "react";



import{
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    Image,
    Text,
    TouchableHighlight,

}from 'react-native'




export default class Login extends Component{
    render(){
        return(
            <View style={styles.conainer}>
                <ImageBackground source={require('./Assets/loginBg.jpeg')}
                    style={styles.BackgroundImg}>
                      <Image style={styles.logo}
                      source={require('./Assets/icon.jpeg')}>

                      </Image>
                      <TextInput style={styles.inputView}
                      placeholder='Username'
                      placeholderTextColor='#fff'
                      maxLength={16}>

                      </TextInput>
                      <TextInput style={styles.inputView}
                      placeholder="Password"
                      placeholderTextColor='white'
                      secureTextEntry={true}>

                      </TextInput>

                      <TouchableHighlight style={styles.button}
                      underlayColor='red'
                      onPress={()=>this.updatePage()}>
                          <Text style={styles.buttonText}>
                              LOGIN
                          </Text>
                      </TouchableHighlight>

                     
                        

                </ImageBackground>

            </View>
        )
        
        
    }
}

const styles=StyleSheet.create({

    conainer:{
        height:'100%',
        width:'100%',
        backgroundColor:'red',
    },
    BackgroundImg:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',

    },
    inputView:{
        height:50,
        width:"50%",
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:70,
        backgroundColor:'#404307',
        fontWeight:'bold',
        marginTop:20
        
        
    },
    logo:{
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
       
    },
    button:{
        borderRadius:10,
        backgroundColor:'#a1e3f2',
        width:100,
        paddingLeft:30,
        marginTop:20,
    },buttonText:{
        color:'#000',
        alignItems:'center',
        justifyContent:'center'
        
    }
})