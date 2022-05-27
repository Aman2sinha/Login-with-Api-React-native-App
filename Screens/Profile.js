import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Logout } from '../src/store/actions';
import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Profile = ({ navigation }) => {

  const token = useSelector(state => state.Reducers.authToken);

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  const Loginbtn=()=>{
    return(
        <View>

<TouchableOpacity  onPress={() => navigation.navigate("LoginScreen") }  style={{marginTop:100 ,width:'80%',backgroundColor:'lightblue',height:'22%',borderWidth:1,borderRadius:18,justifyContent: 'center',marginHorizontal:30,}}>
      <Text style={{fontSize:25,fontWeight: 'bold',color: 'grey',marginLeft:110}}>LOGIN</Text>
    </TouchableOpacity>
        </View>
    );
  }
  

  const Logoutbtn=()=>{

    return(
        <View>
    <TouchableOpacity   onPress={submit} style={{marginBottom:70,width:'80%',backgroundColor:'lightblue',height:'22%',borderWidth:1,borderRadius:18,justifyContent: 'center',marginHorizontal:30,}}>
      <Text style={{fontSize:25,fontWeight: 'bold',color: 'grey',marginLeft:110}}>Logout</Text>
    </TouchableOpacity>
        </View>
    );
  }

  return (

    <View>

    <View style={{flexDirection:'row',justifyContent:'space-around',margin:15,}}>      
      <Image  source={require('../assests/image/images.png')} style={{width: 160, height: 190, borderRadius:28,borderWidth:1}}  />
      <Text style={{marginVertical:55,fontSize:18,fontWeight: 'bold',color: 'black'}}>  
      { token === null ?   'Mr. xxxxxxxx':'Mr. Aman' }  {'\n'} {'\n'}{ token === null ?'+91 xxxxxxxx':'+91 2345698765' } {'\n'} {'\n'}{ token === null ?   'xxxxx@xxx.com':'aman@mail.com' }</Text>
     
    </View>
    {
        token === null ? <Loginbtn />:<Logoutbtn />
        
    }
   
       </View>

)
  }

export default Profile