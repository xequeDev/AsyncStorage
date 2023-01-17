var AsyncStorage = function(){
    this.local = function(method,type,name,value){
        if(method == "sync"){
            if(type == "add" || type == "set"){
                localStorage.setItem(name,value);
            }else if(type == "get" || type == "read"){
                return localStorage.getItem(name);
            }else if(type == "remove" || type == "delete"){
                localStorage.removeItem(name);
            }else if(type == "clear"){
                localStorage.clear();
            }
        }else if(method == "async"){
            return new Promise(function(resolve,reject){
                if(type == "add" || type == "set"){
                    localStorage.setItem(name,value);
                }else if(type == "get" || type == "read"){
                    resolve(localStorage.getItem(name));
                }else if(type == "remove" || type == "delete"){
                    localStorage.removeItem(name);
                }else if(type == "clear"){
                    localStorage.clear();
                }
            });
        }
    }
    this.session = function(method,type,name,value){
        if(method == "sync"){
            if(type == "add" || type == "set"){
                sessionStorage.setItem(name,value);
            }else if(type == "get" || type == "read"){
                return sessionStorage.getItem(name);
            }else if(type == "remove" || type == "delete"){
                sessionStorage.removeItem(name);
            }else if(type == "clear"){
                sessionStorage.clear();
            }
        }else if(method == "async"){
            return new Promise(function(resolve,reject){
                if(type == "add" || type == "set"){
                    sessionStorage.setItem(name,value);
                }else if(type == "get" || type == "read"){
                    resolve(sessionStorage.getItem(name));
                }else if(type == "remove" || type == "delete"){
                    sessionStorage.removeItem(name);
                }else if(type == "clear"){
                    sessionStorage.clear();
                }
            });
        }
    }
}
