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
        // this.checkTotal()
        return this.total
    }


    this.add = () => {
        if (this.multi > 1.2) {
            this.total = this.total + this.multi
        }
        else {
            this.total++
        }
        // return this.total
       


    // this.addTimed = () => {
    //     if (this.stopFlag === 0) {
    //         this.add()
    //         this.displayTotal()
    //         return setTimeout(this.addTimed, 1000)
    //     }
    //     else {
    //         this.stopFlag = 0;
    //     }
    //     // this.checkTotal()
    // }


    this.startAutoClicker = () => {
        this.aCounter++
        // return this.aCounter
    }


    this.clear = () => {
        // this.localStorage.removeItem('total')
        // this.localStorage.removeItem('aCounter')
        // this.localStorage.removeItem('multi')
        this.stopFlag = 1
        this.total = 0
        this.multi = 0
        this.aCounter = 0
        this.addVariable = 1;
        
        this.displayTotal()
    }


    // this.checkTotal = () => {
    //     if (total >= 100) {
    //         $('#auto_button').fadeIn(200)
    //     }
    //      else if(total >= 10 && total < 100)  {
    //         $('#multi_button').fadeIn(200)
    //         $('#auto_button').fadeOut(200)
    //      } else {
    //         $('#auto_button').fadeOut(200)
    //         $('#multi_button').fadeOut(200)
    //      }    
    // }

    // $(document).ready(() => { 

    //     if(totalCookie != null){
    //                 total = totalCookie //restoring the cookies
    //                 aCounter = aCounterCookie
    //                 multi = multiCookie
    //                 displayTotal(total)
    //             }

    this.add_button = () => {
        add()
        displayTotal()
    }


    this.multi_button = () => {

       
        this.multi = this.multi * this.multi        
        this.addVariable = this.multi
    }                      
        this.displayTotal()
    }

    // this.auto_button = () => {
    //     if (this.total < 100) {
    //         alert(this.errorMsg)
    //     } else {
    //         this.addTimed()
    //         this.startAutoClicker()
    //     }        
    //     if (this.total > 100) {
    //         this.total = total - 100
    //     }
    // }


    //     $("#reset").click(
    //                         (event) => {
    //                             clearTotal()
    //                         }
    //                     )

    //                     //Storing the cokkies
    //     localStorage.setItem('total',total)
    //     localStorage.setItem('aCounter', aCounter)
    //     localStorage.setItem('multi', multi)
    //     displayTotal(total)
    // })  
    localStorage.setItem('this.total',this.total)
    localStorage.setItem('this.aCounter', this.aCounter)
    localStorage.setItem('this.multi', this.multi)
    this.displayTotal()


}])
