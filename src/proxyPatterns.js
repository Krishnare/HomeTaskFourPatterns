
//ServiceInterface
class ServiceInterface {
  constructor (){
    this.data = []
  }
  async get (url){
      try {
        let response = await fetch(url);
        this.data = await response.json();
        throw new CustomError();
      } catch (error) {
        alert(error.message);
      }
  }
  post (req){

  }

  log(data){
      console.log(data);
  }
}

//Service
class WebService extends ServiceInterface{
  
}


//Proxy
class WebProxy {
  constructor (service){
    this.service = service
  }
  get (req){
    this.service.get(req)
  }
  post(req) {
    this.service.post(req)
  }
  
  log(){
    this.service.log()
  }
}

var PROXY = new WebProxy(new WebService());

PROXY.post({type:'post', context : 'post request 1'})
PROXY.post({type:'get', context : 'get request 1'})

PROXY.NewssourceSelectComponent(data);
