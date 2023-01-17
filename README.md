# AsyncStorage
A simple library for use local/sessionStorage

## Get the library
```
var data = new AsyncStorage();
```

## Use the library
```
data.local("async","set","name","value");   //LocalStorage
data.session("async","set","name","value"); //SessionStorage
//["sync","async"]
//["set" or "add","get" or "read","remove" or "delete","clear"]
//["name"]
//["value"]
```
