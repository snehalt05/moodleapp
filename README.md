# meetcs_lms

#run command

npx ionic-app-scripts serve -b --devapp --address=0.0.0.0


#regenerating platforms

#android

1)cordova plugin save
2)cordova platform rm android
3)cordova platform add android
4)ionic cordova resources android --icon  
5)ionic cordova resources android --splash

6)ionic cordova prepare android

7)ionic cordova build android

        OR
        
7)ionic cordova build android  --aot --release

8) jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk Admission-2-Alumni

9) cd platforms/android/app/build/outputs/apk/release/

10) C:\Users\aprus\AppData\Local\Android\Sdk\build-tools\28.0.3\zipalign.exe -v 4 app-release-unsigned.apk Admission-2-Alumni.apk
#ios


1)cordova plugin save
2)cordova platform rm ios
3)cordova platform add ios
4)ionic cordova resources ios --icon  
5)ionic cordova resources ios --splash


#screeshot capturing 


# MainActivity .java code to be put in 

import android.view.WindowManager;



        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                           WindowManager.LayoutParams.FLAG_SECURE);
