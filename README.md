Impact
=========

Monitor your Arduino based system with Twitter using NodeJS.

License
-------

The MIT License (MIT)  

Copyright (c) 2014 Thomas Abot  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  


To Install
----------

I assume NodeJS and NPM are already installed on your computer.  
I have only tested it on Ubuntu, so if you succeeded on others platforms, I will be glad to credit your help.

#### (Debian/Ubuntu) Linux :

* Install [serialport](https://github.com/JayBeavers/Reflecta) module :  
```
	sudo apt-get install build-essential  
	npm install serialport
```
* Install [twit](https://github.com/ttezel/twit) module :  
```
	npm install twit
```
* Get TextDuino on your computer :  
```
	git clone https://github.com/triskell/Impact.git
```
* Configure ```src/impact-node/params.js``` to your preferences and Twitter account
* Load .ino part on your Arduino using Arduino IDE
* Launch the NodeJS part :   
```
	cd src/impact-node/ 
	node textduinode.js
```	
* Have fun !
