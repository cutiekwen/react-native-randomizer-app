# react-native-randomizer-app

This mobile application draws a result based on the user's inputs. 
This app uses react-native to make it accessible for Android and IOS.

# REQUIREMENTS:
* NodeJS 
* Expo
* Expo app (for android and iOS devices)

# Expo App
In Google Play (Android) or App Store (iOS) download the expo app. 
Just type expo client in search bar and click enter. 

### Install NodeJS from terminal:
```
sudo apt update
sudo apt install nodejs npm
```

To verify the installation execute the following command:
```
nodejs --version
```

### Install Expo from terminal: 
```
npm install -g expo-cli
```

IN YOUR TERMINAL GO TO THE LOCATION OF THE react-native-randomizer-app PROJECT
change directory to randomizer folder
then type "expo start"

SAMPLE:
```
kwen@cutiekwen:~/Documents/pastag/react-native-randomizer-app/randomizer$ expo start
```

your default browser will automatically load Metro Bundler on port 19001 and will run localhost at  http://localhost:19002/


### FOR ANDROID
A QR code will appear at the browser upon running expo start. 
Open your expo client app in your android phone and scan the QR code.  

### FOR IOS
Unfortunately, QR Code reader is not an available feature for iOS.
Instead, type expo send -s +areacode number and expo will send a message to your iOS phone where the link of the project will show.

Sample:
```
kwen@cutiekwen:~/Documents/pastag/react-native-randomizer-app/randomizer$ expo send -s +639123456789
```

### Possible Errors
Double check that your phone and the server belongs to the same wifi host to avoid errors in running the app.



