import { Drawer } from 'expo-router/drawer';
import { useColorScheme, Text, View, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useThemeColor } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({ light: '#fff', dark: '#000' }, 'background');
  const textColor = useThemeColor({ light: '#000', dark: '#fff' }, 'text');

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000A26",
        },
        headerTintColor: "white",
        drawerStyle: {
          width: 280,
          backgroundColor: "#A6C6DB",
        },
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {
          fontFamily: 'JosefinSans-Regular',
          fontSize: 16,
        },
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
          <DrawerItemList {...props} />
          <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>
            <TouchableOpacity  activeOpacity={0.8}
              onPress={() => props.navigation.navigate('PrivacyPolicy')}
              style={{
                backgroundColor: '#000A26',
                padding: 12,
                borderRadius: 6,
              }}
            >
              <Text style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'JosefinSans-Regular'
              }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: '',
          headerRight: () => (
            <Text style={{
              marginRight: 20,
              fontWeight: '600',
              fontSize: 16,
              color: "white",
              fontFamily: 'JosefinSans-Regular',
            }}>
              MotoRep
            </Text>
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="repair"
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="(authotp)/otp"
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="UserProfileDetails/UserProfile"
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="UserProfileDetails/UserProfile2"
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="UserProfileDetails/UserProfile3"
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="PrivacyPolicy"
        options={{
          drawerItemStyle: { display: 'none' },
          headerTitle: 'Privacy Policy',
        }}
      />

<Drawer.Screen
  name="Payment/Payment"
  options={{
    drawerItemStyle: { display: 'none' },
    headerShown: true, // Ensure the header is shown
    headerTitle: '', // Remove the title from the header
  }}
/>

    </Drawer>
  );
}
