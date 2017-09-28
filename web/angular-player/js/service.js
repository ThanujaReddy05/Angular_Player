angular.module('playerApp').service('service', [function () {


    this.total = 0;
    this.multi = 1.2;
    this.addVariable = 1;
    this.stopFlag = 0;
    this.errorMsg = "Bad"
    this.aCounter = 0
    this.totalCookie = localStorage.getItem('this.total')
    this.aCounterCookie = localStorage.getItem('this.aCounter')
    this.multiCookie = localStorage.getItem('this.multi')



    this.displayTotal = () => {
        return this.total
    }


    this.retrieveCookies = () => {
        if (this.totalCookie != null) {
            this.total = this.totalCookie //restoring the cookies
            this.aCounter = this.aCounterCookie
            this.multi = this.multiCookie
            this.displayTotal(this.total)
        }
    }

    this.add = () => {
        if (this.multi > 1.2) {
            this.total = this.total + this.multi
        }
        else {
            this.total++
        }


        this.startAutoClicker = () => {
            this.aCounter++
        }


        this.clear = () => {
            this.stopFlag = 1
            this.total = 0
            this.multi = 0
            this.aCounter = 0
            this.addVariable = 1;
            localStorage.clear();
            this.displayTotal()
        }


    }

    this.add_button = () => {
        add()
        displayTotal()
    }


    this.multi_button = () => {


        this.multi = this.multi * this.multi
        this.addVariable = this.multi

        this.displayTotal()
    }


    this.storeCookies = () => {
        localStorage.setItem('this.total', this.total)
        localStorage.setItem('this.aCounter', this.aCounter)
        localStorage.setItem('this.multi', this.multi)
        this.displayTotal()
    }


}])
