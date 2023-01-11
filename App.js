
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, SafeAreaView, SectionList, StatusBar, ScrollView, Switch, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Fragment, useState } from 'react';
import { Grid, Col, Row } from 'react-native-easy-grid';


// M.Rajkaran
// 2109039
// DIT/FT/1B/02
import { Transaction } from './components/HomeRectangle';
import { Item } from './components/Item';
import { ManageBox } from './components/ManageTBox';
import { ExpButton } from './components/ExpenseButtons'
import SpoilerText from './components/SpoilerText'

// Pranjal Prathap Bavikai
// 2228396
// DIT/FT/1B/02
import { ProfileDetail } from './components/ProfileDetail';
import { RenewalDetail } from './components/RenewalDetail';
import { SubscriptionSummary } from './components/SubscriptionSummary';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

// M.Rajkaran
// 2109039
// DIT/FT/1B/02
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginTop: 80 }}>

        <View style={{ marginHorizontal: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "#313638" }}>Good Morning! ☀️</Text>
              <Text style={{ fontSize: 20, color: "#313638" }}>Pranjal</Text>
            </View>
            <TouchableOpacity style={{ width: "20%", justifyContent: "flex-end" }}>
              <MaterialCommunityIcons name="bell-badge-outline" style={[styles.iconShadow, { fontSize: 35, alignSelf: "center", paddingBottom: 15, color: "#313638" }]}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>


          <TouchableOpacity style={[styles.shadow, { backgroundColor: "#579BB1", marginTop: 40, padding: 8, height: 100, borderRadius: 20, flexDirection: "row" }]} onPress={() => { navigation.navigate('Upcoming Renewals') }}>
            <View style={{ width: "70%", justifyContent: "center",paddingHorizontal:8 }}>
              <Text style={{ fontSize: 23, color: "#EAE3D7", fontWeight: "600" }}>Upcoming Renewals</Text>
              <Text style={{ fontSize: 15, color: "#EAE3D7" }}>Click to manage</Text>
            </View>

            <View style={{ width: "30%", justifyContent: "center", flexDirection: "column" }}>
              <Grid>
                <Col style={{ paddingTop: 15 }}>
                  <MaterialCommunityIcons style={styles.iconShadow} name="netflix" size="45" color="#E50914"></MaterialCommunityIcons>
                </Col>
                <Col >
                  <Row >
                    <MaterialCommunityIcons style={styles.iconShadow} name="spotify" size="45" color="#1DB954"></MaterialCommunityIcons>
                  </Row>
                  <Row >
                    <MaterialCommunityIcons style={styles.iconShadow} name="youtube" size="45" color="#FF0000"></MaterialCommunityIcons>
                  </Row>
                </Col>
              </Grid>
            </View>
          </TouchableOpacity>

          <View style={[styles.shadow, { backgroundColor: "#579BB1", marginTop: 15, padding: 9, height: 100, borderRadius: 20, flexDirection: "row" }]}>
            <View style={{ width: "70%", justifyContent: "center",paddingHorizontal:8 }}>
              <Text style={{ fontSize: 23, color: "#EAE3D7", fontWeight: "600" }}>Monthly Budget</Text>
              <Text style={{ fontSize: 15, color: "#EAE3D7" }}>Click to manage</Text>
            </View>
            <View style={{ width: "30%" }}>
              <View style={{ backgroundColor: "#F58B51", borderRadius: 50, height: 80, width: 80 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <View style={{ backgroundColor: "#579BB1", borderRadius: 50, height: 60, width: 60 }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                      <Text style={{ fontSize: 20, color: "#EAE3D7", fontWeight: "bold" }}>75%</Text>
                    </View>
                  </View>
                </View>
              </View >
            </View>

          </View>
          <View>
            <Text style={{ fontSize: 25, marginTop: 35, fontWeight: "700", color: "#313638", marginBottom: 10 }}>Recent Activity</Text>
            <Transaction iconName="shopping-outline" iconColor="#47B6D4" category="Shopping" date="16/11/2022" amount="$544" />
            <Transaction iconName="food" iconColor="#4E61B6" category="Food & Drinks" date="13/11/2022" amount="$80.90" />
            <Transaction iconName="bus" iconColor="#EBA90D" category="Transport" date="10/11/2022" amount="$20.00" />
          </View>
        </View>
      </View>
    </ScrollView>


  );
}

function AddCategory({ navigation }) {
  return (

    <View style={{ marginTop: 70 }}>
      <View style={{ backgroundColor: "#579BB1", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
        <View style={{ flexDirection: "row", margin: 13 }}>
          <View style={{ justifyContent: "center", textAlign: "center" }}>
            <TouchableOpacity style={{}}>
              <MaterialIcons name="arrow-back-ios" style={{ color: "#313638" }} size={24} onPress={() => { navigation.navigate('Manage Transactions') }}></MaterialIcons>
            </TouchableOpacity>
          </View>

          <View style={{ width: "90%" }}>
            <Text style={{ textAlign: "center", fontSize: 25, color: "#313638", fontWeight: "500" }}>Add Category</Text>
          </View>
        </View>



        <View style={{ margin: 13 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, marginRight: 34 }}>
            <Text style={{ width: '50%', fontSize: 20, color: "#EAE3D7" }}>Name</Text>
            <TextInput
              style={{ textAlign: 'right', color: 'black', backgroundColor: "#D9D9D9", borderRadius: 8, height: 30, alignSelf: 'center', width: 200, paddingRight: 10 }}
              placeholder='Category Name'
              keyboardType='default'
            ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 17, height: 40 }}>
            <Text style={{ width: '50%', fontSize: 20, color: "#EAE3D7" }}>Icon</Text>
            <TouchableOpacity style={{ borderRadius: 50, width: 45, height: 45, backgroundColor: "#D9D9D9", alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="car-sport" color="black" style={{ fontSize: 20 }}></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 17, height: 40 }}>
            <Text style={{ width: '50%', fontSize: 20, color: "#EAE3D7" }}>Colour</Text>
            <TouchableOpacity style={{ borderRadius: 50, backgroundColor: "purple", width: 45, height: 45 }}>
              <Text style={{ alignSelf: 'center', color: "purple" }}>I</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={[styles.shadow, { width: 150, height: 500, alignSelf: 'center', marginTop: 40 }]}>
          <TouchableOpacity style={{ backgroundColor: "#F58B51", borderRadius: 15, height: 45, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ color: "#EAE3D7", fontSize: 20 }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>


  );
}


function ExpensesPage({ navigation }) {
  return (

    <View style={{ marginTop: 80 }}>

      <View style={{ flexDirection: "row", margin: 13 }}>
        <View style={{ justifyContent: "center", textAlign: "center" }}>
          <TouchableOpacity style={{}}>
            <MaterialIcons name="arrow-back-ios" style={{ color: "#313638" }} size={24} onPress={() => { navigation.navigate('Manage Transactions') }}></MaterialIcons>
          </TouchableOpacity>
        </View>

        <View style={{ width: "90%" }}>
          <Text style={{ textAlign: "center", fontSize: 25, color: "#313638", fontWeight: "500" }}>Entertainment</Text>
        </View>
      </View>





      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons name="movie-open-outline" style={[styles.iconShadow, { fontSize: 60, margin: 8, color: "#15616D" }]}></MaterialCommunityIcons>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 8, color: "#313638" }}>$351.80</Text>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "center" }}>
        <ExpButton iconPack={MaterialCommunityIcons} iconName="plus" bgColor="#336170" />
        <ExpButton iconPack={MaterialIcons} iconName="search" bgColor="#F58B51" />
        <ExpButton iconPack={MaterialCommunityIcons} iconName="filter-variant" bgColor="#EF6461" />
      </View>

      <View style={{ marginTop: 35 }}>
        <View>
          <Text style={{ marginLeft: 20, fontSize: 25, fontWeight: "bold", marginBottom: 5, color: "#313638" }}>Transactions</Text>
        </View>

        <View style={{ backgroundColor: "#579BB1", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <ScrollView style={{ margin: 10 }}>
            {[
              { id: 1, key: 'Movie', date: '16/11/2022', price: '$15.00', iconName: 'cash' },
              { id: 2, key: 'Arcade', date: '14/11/2022', price: '$30.00', iconName: 'cash' },
              { id: 3, key: 'Transaction', date: '11/11/2022', price: '$9.80', iconName: 'credit-card' },
              { id: 4, key: 'Museum', date: '09/11/2022', price: '$12.00', iconName: 'credit-card' },
              { id: 5, key: 'USS', date: '07/11/2022', price: '$55.00', iconName: 'cash' },
              { id: 6, key: 'Game', date: '05/11/2022', price: '$8.00', iconName: 'credit-card' },
              { id: 7, key: 'Karaoke', date: '01/11/2022', price: '$15.00', iconName: 'cash' },
              { id: 8, key: 'Bicycle Rental', date: '30/10/2022', price: '$17.00', iconName: 'cash' },
              { id: 9, key: 'Adventure Cove', date: '25/10/2022', price: '$50.00', iconName: 'cash' },
              { id: 10, key: 'National Museum', date: '20/10/2022', price: '$20.00', iconName: 'cash' },
              { id: 11, key: 'Snow City', date: '18/10/2022', price: '$25.00', iconName: 'credit-card' },
              { id: 12, key: 'Concert', date: '16/10/2022', price: '$95.00', iconName: 'cash' },
            ].map((item) => (
              <Item key={item.id} iconPack={MaterialCommunityIcons} iconName={item.iconName} title={item.key} date={item.date} price={item.price} />
            ))}
          </ScrollView>

        </View>
      </View>
    </View>


  );
}


function MangTrans({ navigation }) {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 90 }}>

      <View style={{ flexDirection: "row", marginHorizontal: 5, justifyContent: "center", marginBottom: 20 }}>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#313638"></MaterialIcons>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, color: "#313638" }}>November</Text>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#313638"></MaterialIcons>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }} >
        <Text style={{ fontSize: 30, fontWeight: "500", marginBottom: 10, color: "#313638" }}>Total Expenses</Text>
        {/* <Text style={{ fontSize: 40, fontWeight: "bold",color:"#313638" }}>$503.80</Text> */}
        <SpoilerText text="$503.80" />
      </View>


      <View style={[styles.shadow, { marginTop: 40, backgroundColor: "#579BB1", borderRadius: 10, padding: 10 }]}>
        <ManageBox iconPack={MaterialCommunityIcons} iconColor="#EBA90D" iconName="bus" title="Transportation" price="$24.00" />
        <ManageBox iconPack={MaterialCommunityIcons} iconColor="#4E61B6" iconName="food" title="Food & Drinks" price="$30.00" />
        <ManageBox iconPack={MaterialCommunityIcons} iconColor="#AF0404" iconName="movie-open-outline" title="Entertainment" price="$351.80" onPress={() => navigation.navigate('Expenses')} />
        <ManageBox iconPack={MaterialIcons} iconColor="#E76F51" iconName="family-restroom" title="Family Expenses" price="$14.00" />
        <ManageBox iconPack={MaterialCommunityIcons} iconColor="#D03E47" iconName="lightning-bolt-outline" title="Subscriptions" price="$84.00" />
      </View>
      <View style={[styles.shadow, { alignItems: "flex-end", marginTop: 40 }]}>
        <TouchableOpacity onPress={() => navigation.navigate('Add Category')} style={{ borderRadius: 50, backgroundColor: "#F58B51", height: 60, width: 60, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialCommunityIcons name='plus' style={{ color: "white", fontSize: 45 }}></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
    </View>


  );
}


// Pranjal Prathap Bavikai
// 2228396
// DIT/FT/1B/02
function RenewalScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, paddingTop: 50, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20, }}>
        <TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Home')}>
          <Ionicons name='ios-chevron-back' style={{ color: '#181D27', fontSize: 35, }} ></Ionicons>
        </TouchableOpacity>
        <Text style={{ fontSize: 25, paddingLeft: 25, }}>Upcoming Renewals</Text>
      </View>
      <View style={{ backgroundColor: "#2c698d", height: 120, borderRadius: 20, margin: 20 }}>
        <View style={{ alignItems: 'center', paddingTop: 10 }}>
          <Text style={{ color: "#EAE3D7", fontSize: 20 }}>Total Monthly Expenses</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: "center" }}>
          <Text style={[styles.shadow, { color: "#EAE3D7", fontSize: 30, paddingLeft: 71 }]}>$503.80</Text>
          <View style={{ paddingLeft: 25 }}>
            <View style={{ backgroundColor: "#282323", display: 'flex', height: 40, alignItems: "center", flexDirection: 'row', borderRadius: 20, }}>
              <TouchableOpacity onPress={() => navigation.navigate('Manage Transactions')}>
                <Text style={{ fontSize: 15, color: '#EAE3D7', paddingLeft: 15 }}>Break Down</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Manage Transactions')}>
                <Ionicons name="ios-chevron-forward" style={{ color: '#EAE3D7', fontSize: 25 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 20, paddingLeft: 20 }}>Upcoming Renewals</Text>
      {/* main content */}
      <View style={{ flex: 1, margin: 20, }}>
        <RenewalDetail
          icon={<MaterialCommunityIcons name='spotify' style={[styles.iconShadow, { color: '#1DB954', fontSize: 50, }]}></MaterialCommunityIcons>}
          title="Spotify"
          description="16/11/2022"
          manage={<TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Subscription Detail', { name: 'Spotify', logo: 'spotify', color: '#1DB954', date: '16/11/2022' })}>
            <Ionicons name='ios-chevron-forward' style={{ color: '#EAE3D7', fontSize: 35, }}></Ionicons>
          </TouchableOpacity>}
        />
        <RenewalDetail
          icon={<MaterialCommunityIcons name='netflix' style={[styles.iconShadow, { color: '#E50914', fontSize: 50, }]}></MaterialCommunityIcons>}
          title="Netflix"
          description="13/11/2022"
          manage={<TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Subscription Detail', { name: 'Netflix', logo: 'netflix', color: '#E50914', date: '13/11/2022' })}>
            <Ionicons name='ios-chevron-forward' style={{ color: '#EAE3D7', fontSize: 35, }}></Ionicons>
          </TouchableOpacity>} />
        <RenewalDetail
          icon={<MaterialCommunityIcons name='discord' style={[styles.iconShadow, { color: '#7289d9', fontSize: 50, }]}></MaterialCommunityIcons>}
          title="Discord"
          description="14/11/2022"
          manage={<TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Subscription Detail', { name: 'Discord', logo: 'discord', color: '#7289d9', date: '14/11/2022' })}>
            <Ionicons name='ios-chevron-forward' style={{ color: '#EAE3D7', fontSize: 35, }}></Ionicons>
          </TouchableOpacity>} />
        <RenewalDetail
          icon={<MaterialCommunityIcons name='linkedin' style={[styles.iconShadow, { color: '#0077b5', fontSize: 50, }]}></MaterialCommunityIcons>}
          title="LinkedIn Premium"
          description="10/11/2022"
          manage={<TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Subscription Detail', { name: 'LinkedIn Premium', logo: 'linkedin', color: '#0077b5', date: '10/11/2022' })}>
            <Ionicons name='ios-chevron-forward' style={{ color: '#EAE3D7', fontSize: 35, }}></Ionicons>
          </TouchableOpacity>} />
        <View style={{ marginBottom: 30 }}>
          <RenewalDetail
            icon={<MaterialCommunityIcons name='patreon' style={[styles.iconShadow, { color: '#f96854', fontSize: 50, }]}></MaterialCommunityIcons>}
            title="Patreon"
            description="5/11/2022"
            manage={<TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Subscription Detail', { name: 'Patreon', logo: 'patreon', color: '#f96854', date: '5/11/2022' })}>
              <Ionicons name='ios-chevron-forward' style={{ color: '#EAE3D7', fontSize: 35, }}></Ionicons>
            </TouchableOpacity>} />
        </View>
      </View>
    </ScrollView >
  );
}

const ProfileScreen = React.memo(() => {
  const [switchValue, setSwitchValue] = useState(false); // initial switch value is false
  return (
    <ScrollView style={{ flex: 1, paddingTop: 60 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 30, paddingLeft: 25 }}>Profile</Text>
        <View style={{ position: 'absolute', right: 0, paddingRight: 25 }}>
          <MaterialIcons name='edit' style={{ color: 'black', fontSize: 35, }} ></MaterialIcons>
        </View>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <MaterialIcons name='account-circle' style={{ color: 'black', fontSize: 80, }} ></MaterialIcons>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#181D27', fontSize: 16, zIndex: 1 }}>Pranjal Prathap</Text>
        <Text style={{ color: '#ABABAB', fontSize: 15, zIndex: 1 }}>pranjal@yahoo.com</Text>
      </View>
      {/* main content */}
      <View style={{ flex: 1, margin: 20, }}>
        <ProfileDetail
          icon={<MaterialCommunityIcons name='account' style={[styles.shadow, { color: '#FDFDFD', fontSize: 30, }]}></MaterialCommunityIcons>}
          title="My Account"
          description="Make changes to your account"
        />
        <ProfileDetail
          icon={<SimpleLineIcons name='settings' style={[styles.shadow, { color: '#FDFDFD', fontSize: 30, }]}></SimpleLineIcons>}
          title="Settings"
          description="Manage app settings"
        />
        <ProfileDetail
          icon={<MaterialIcons name='lock' style={[styles.shadow, { color: '#FDFDFD', fontSize: 30, }]}></MaterialIcons>}
          title="Face ID/ Touch ID"
          description="Manage device security"
          switch={<Switch ios_backgroundColor="red"
            trackColor={{ false: "red" }}
            value={switchValue} // current switch value
            onValueChange={(value) => setSwitchValue(value)} // function to update switch value
          />}
        />
        <ProfileDetail
          icon={<MaterialCommunityIcons name='logout' style={[styles.shadow, { color: '#FDFDFD', fontSize: 30, }]}></MaterialCommunityIcons>}
          title="Log out"
          description="Further secure your account"
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginBottom: 15 }}>More</Text>
        <View style={{ backgroundColor: "#579BB1", display: 'flex', flexDirection: 'row', height: 80, alignItems: "center", marginTop: 5, marginBottom: 5, borderRadius: 20 }}>
          <View>
            <MaterialIcons name='help-outline' style={[styles.shadow, { color: '#FDFDFD', fontSize: 30, paddingLeft: 20 }]}></MaterialIcons>
          </View>
          <View style={{ paddingLeft: 40 }}>
            <Text style={{ color: "#EAE3D7", fontSize: 18, fontWeight: "bold" }}>Help & Support</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
});

function SubscriptionDetail({ route, navigation }) {
  // Passing parameters to routes
  const { name } = route.params;
  const { logo } = route.params;
  const { color } = route.params;
  const { date } = route.params;
  return (
    <ScrollView style={{ flex: 1, paddingTop: 60 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20, }}>
        <TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Upcoming Renewals')}>
          <Ionicons name='ios-chevron-back' style={{ color: '#181D27', fontSize: 35, }}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', paddingTop: 60 }}>
        <MaterialCommunityIcons name={logo} color={color} style={[styles.iconShadow, { fontSize: 70, }]}></MaterialCommunityIcons>
        <Text>{name}</Text>
      </View>
      <View style={{ paddingTop: 25 }}>
        <View style={{ backgroundColor: "#264653", display: 'flex', flexDirection: 'column', height: 487, alignItems: "center", marginTop: 5, borderRadius: 20, justifyContent: 'center' }}>
          <SubscriptionSummary
            icon={<MaterialCommunityIcons name='clock-outline' style={[styles.shadow, { color: '#EAE3D7', fontSize: 30, }]}></MaterialCommunityIcons>}
            title="Payment Due On"
            description={
              <View style={{ paddingLeft: 40 }}>
                <Text style={{ color: "#EAE3D7", fontSize: 16 }}>{date}</Text>
              </View>}
          />
          <SubscriptionSummary
            icon={<Ionicons name='ios-calendar' style={[styles.shadow, { color: '#EAE3D7', fontSize: 30, }]}></Ionicons>}
            title="Ends On"
            description={
              <View style={{ paddingLeft: 106 }}>
                <Text style={{ color: "#EAE3D7", fontSize: 16 }}>{date}</Text>
              </View>}
          />
          <SubscriptionSummary
            icon={<Ionicons name='ios-receipt' style={[styles.shadow, { color: '#EAE3D7', fontSize: 30, }]}></Ionicons>}
            title="Billed"
            description={
              <View style={{ paddingLeft: 126 }}>
                <Text style={{ color: "#EAE3D7", fontSize: 16 }}>Monthly</Text>
              </View>}
          />
          <View style={{ alignSelf: 'flex-start', paddingLeft: 20 }}>
            <Text style={{ fontSize: 20, marginTop: 15, color: '#FDFDFD' }}>Payment Method</Text>
            <SubscriptionSummary
              icon={<Ionicons name='ios-card' style={[styles.shadow, { color: '#EAE3D7', fontSize: 30, }]}></Ionicons>}
              title="DBS Card"
              description={
                <View style={{ paddingLeft: 55 }}>
                  <Text style={{ color: "#EAE3D7", fontSize: 16 }}>xxxx xxxx 0203</Text>
                </View>}
            />
          </View>
        </View>
      </View>
    </ScrollView >
  )
}

function BreakDown({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, paddingTop: 60 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20, }}>
        <TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 20 }} onPress={() => navigation.navigate('Manage Transactions')}>
          <Ionicons name='ios-chevron-back' style={{ color: '#181D27', fontSize: 35, }}></Ionicons>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}




const ExpensesStack = createNativeStackNavigator();

function ExpensesStackScreen() {
  return (
    <ExpensesStack.Navigator>
      <ExpensesStack.Screen name="Manage Transactions" component={MangTrans} options={{ headerShown: false }}></ExpensesStack.Screen>
      <ExpensesStack.Screen name="Expenses" component={ExpensesPage} options={{ headerShown: false }}></ExpensesStack.Screen>
      <ExpensesStack.Screen name="Add Category" component={AddCategory} options={{ headerShown: false }}></ExpensesStack.Screen>
      <ExpensesStack.Screen name="Upcoming Renewals" component={RenewalScreen} options={{ headerShown: false }}></ExpensesStack.Screen>
      <ExpensesStack.Screen name="Break Down" component={BreakDown} options={{ headerShown: false }}></ExpensesStack.Screen>
      <ExpensesStack.Screen name="Subscription Detail" component={SubscriptionDetail} options={{ headerShown: false }}></ExpensesStack.Screen>
    </ExpensesStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Fragment >
      <StatusBar barStyle="dark-content" />
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Manage':
                  iconName = focused ? 'ios-wallet' : 'ios-wallet-outline';
                  break;
                case 'Profile':
                  iconName = focused ? 'person' : 'person-outline';
                  break;
                default:
                  iconName = 'help-circle';
              }
              return (
                <Ionicons name={iconName} size={size} color={color}></Ionicons>

              );
            },
            tabBarActiveTintColor: '#579BB1',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Manage" component={ExpensesStackScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>

      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  iconShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }

});
