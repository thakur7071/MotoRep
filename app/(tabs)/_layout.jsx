import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000A26' },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontFamily: 'JosefinSans-Regular',
        },
        tabBarHideOnKeyboard: true, // ✅ Prevent tab bar from hiding on keyboard open
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyBikes"
        options={{
          title: "MyBikes",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bicycle" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Bookings"
        options={{
          title: "Bookings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="clipboard" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
