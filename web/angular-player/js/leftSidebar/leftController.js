angular.module('playerApp').controller('leftController', ['service', function (service) {

    this.service = service

    this.multi_button = () => {
        if (service.total < 10) {
            alert(service.errorMsg)
        } else {                 
            
            service.total = service.total - 10
            service.multi_button()
        }
        service.storeCookies()
    }
}])