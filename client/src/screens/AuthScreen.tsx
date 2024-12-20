import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for navigation
type AuthScreenNavigationProp = StackNavigationProp<any, 'Auth'>;

interface AuthScreenProps {
  navigation: AuthScreenNavigationProp;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Redirecting to Google Login...');
  };

  const handleEmailLogin = () => {
    navigation.navigate('EmailLogin'); // Placeholder for email screen
  };

  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Redirecting to Facebook Login...');
  };

  const handleLoginNavigation = () => {
    navigation.navigate('Login'); // Placeholder for login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome to{'\n'}
        <Text style={styles.headerHighlight}>Sellit</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleEmailLogin}>
        <Text style={styles.buttonText}>Continue with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.hyperlink} onPress={handleLoginNavigation}>
            Login
          </Text>
        </Text>
        <Text style={styles.termsText}>By continuing, you agree to our Terms and Conditions.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000', // Background color set to black
  },
  headerText: {
    fontSize: 52, // Increased font size
    fontWeight: 'bold',
    color: '#fff', // Text color set to white
    marginBottom: 30,
    textAlign: 'center',
  },
  headerHighlight: {
    color: '#00D4B5', // Mint Green for "Welcome to"
    fontSize: 52, // Slightly larger for emphasis
    fontFamily: 'Brush Script MT',
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#333', // Greyish background for buttons
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Text color set to white
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 20, // Ensure it's at the bottom of the screen
    left: 0,
    right: 0,
    alignItems: 'center',
    marginTop: 30,
  },
  loginText: {
    color: '#fff', // White color for the "Already have an account?" text
    fontSize: 14,
  },
  hyperlink: {
    color: '#4285F4', // Blue for hyperlink effect
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Adds the underline for hyperlink appearance
  },
  termsText: {
    marginTop: 10,
    fontSize: 12,
    color: '#aaa', // Light grey for subtle terms text
    textAlign: 'center',
  },
});

export default AuthScreen;
