angular.module('playerApp').controller('rightController', ['$interval', 'service', function ($interval, service) {

    this.service = service

    this.auto_button = () => {
        if (service.total < 100) {
            alert(service.errorMsg)
        } else {

            this.addTimed()
            service.startAutoClicker()
        }

        if (service.total >= 100) {
            service.total = service.total - 100
        }
    }

    this.addTimed = () => {
        if (service.stopFlag === 0) {

            service.displayTotal()
            $interval(() => {
                if (service.multi > 1.2) {
                    service.total = service.total + service.multi
                }
                else {
                    service.total++
                }
            }, 1000)
        }
        else {
            service.stopFlag = 0;
        }
        service.storeCookies()
    }



}])