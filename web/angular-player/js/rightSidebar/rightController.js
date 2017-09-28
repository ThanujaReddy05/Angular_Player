angular.module('playerApp').controller('rightController', ['$interval','service',function ($interval,service) {

    this.service = service

    this.auto_button = () => {
        if (service.total < 100) {
            alert(service.errorMsg)
        } else {
            // alert("in autobutton")
            this.addTimed()
            service.startAutoClicker()
        }
        // $('#autoClickerCount').html('AutoClickerCount : '  + aCounter)
        if (service.total >= 100) {
            service.total = service.total - 100
        }
        // service.auto_button()
    }

    this.addTimed = () => {
        if (service.stopFlag === 0) {
            
            service.displayTotal()
            $interval( () =>{
                // alert("in interval")
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
        // this.checkTotal()
    }


}])