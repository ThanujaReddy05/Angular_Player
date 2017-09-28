angular.module('playerApp').controller('centerController', ['service',  function(service) {
    
    this.service = service
        
    this.add = () => {
        service.add()
        service.displayTotal()
        
    } 
        
    
    
    }])

