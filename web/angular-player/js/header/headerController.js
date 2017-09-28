angular.module('playerApp').controller('headerController', ['service', function (service) {

        this.service = service
        service.retrieveCookies()

        this.clear = () => {
                service.clear();
        }

}])