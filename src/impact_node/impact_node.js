/*
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
*/

var cfg = require('./config');
var SerialPort = require("node-serialport").SerialPort;
var Twit = require('twit');

//launch Twitter connection
var T = new Twit({
    consumer_key: cfg.consumer_key ,
    consumer_secret: cfg.consumer_secret ,
    access_token: cfg.access_token ,
    access_token_secret: cfg.access_token_secret 
  });
console.log('[INFO] Twitter variables initialized.');



// Launch serial connection.
var exctractData = '';
serialHandler();


function serialHandler()
{
    var receivedData = "";
    serialPort = new SerialPort(cfg.serial_port, {
        //Set up the default serial communication for Arduino :
        //(Read node-serialport documentation to modify)
        baudrate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: 'none',
        flowControl: false
    });
 
    serialPort.on("open", function () {
      console.log('[INFO] Serial connection started on port : ' + cfg.serial_port);
        serialPort.on('data', function(data) {
            receivedData += data.toString();
            /*
				Start character : {
				End character : }
            */
          	if (receivedData.indexOf('{') >= 0 && receivedData.indexOf('}') >= 0) {
           		exctractData = receivedData.substring(receivedData.indexOf('{') + 1, receivedData.indexOf('}'));
           		receivedData = '';
           		console.log('[DEBUG] Extracted data : ' + exctractData);
           		sendTweet(exctractData);
         	}
      	});  
    });  
}


function sendTweet(message)
{
  T.post('statuses/update', { status: message }, function(err, reply) {
    if(!err){
      console.log('[INFO] Tweet sent successfully :\n' + message);
    }
    else {
      console.log('[ERR] Could not send Tweet. ' + err);
    }
  })
}