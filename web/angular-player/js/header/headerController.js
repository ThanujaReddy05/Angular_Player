angular.module('playerApp').controller('headerController', ['service', function(service) {
    
        this.service = service
       
        this.clear = () => {
            
                service.clear();
                
                
            }

        //     this.displayTotal = () => {
        //             service.displayTotal()
        //     }
    
    }])