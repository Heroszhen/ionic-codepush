#! /bin/bash
#build

rm -Rf android/
ionic build --prod
ionic capacitor add android
ionic capacitor open android