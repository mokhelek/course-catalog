
describe("Testing The Course Cost Function", function (){
    it("Status should be 'Invalid code' if non-existing code is provided",function(){
        let courseCode = "p3";
        let startDateStr = "2015-03-15"


        let coarse = courseCost(courseCode, startDateStr)


        assert.equal("Invalid code", coarse.status) 
    })
    it("Status should be 'Invalid day' if an incorrect date is provided",function(){
        let courseCode = "p2";
        let startDateStr = "2015-25-15"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal("Invalid day", coarse.status) 
    })
    it("Status should be 'success' if both the code and the date are valid",function(){
        let courseCode = "p2";
        let startDateStr = "2018-12-15"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal("success", coarse.status) 
    })

})

describe("Testing for the normal prices of each course",function(){
    it("Cost should be 5675 for the Ruby on Rails intro course",function(){
        let courseCode = "r1";
        let startDateStr = "2018-12-15"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(5675,coarse.cost)
    })
    it("Cost should be 7850 for the  Python course",function(){
        let courseCode = "p1";
        let startDateStr = "2018-12-15"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(7850,coarse.cost)
    })
    it("Cost should be 8990 for the  Intro to PHP course",function(){
        let courseCode = "p2";
        let startDateStr = "2018-12-15"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(8990,coarse.cost)
    })
} )

describe("Testing for the discounts amount",function(){
    it("Should return a 20% discount amount of 1570 for the Python Course",function(){
        let courseCode = "p1";
        let startDateStr = "2018-10-13"

        
        let coarse = courseCost(courseCode, startDateStr)

        assert.equal(1570,coarse.discount)
    })
    it("Should return a 20% discount amount of 1798 for the Intro to PHP Course",function(){
        let courseCode = "p2";
        let startDateStr = "2018-10-14"

        
        let coarse = courseCost(courseCode, startDateStr)

        assert.equal(1798,coarse.discount)
    })
    it("Should return a 20% discount amount of 1135 for the Ruby on Rails Course",function(){
        let courseCode = "r1";
        let startDateStr = "2018-10-10"

        
        let coarse = courseCost(courseCode, startDateStr)

        assert.equal(1135,coarse.discount)
    })


    it("Should return a 40% discount amount of 3140 for the Python Course",function(){
        let courseCode = "p1";
        let startDateStr = "2018-10-20"

        
        let coarse = courseCost(courseCode, startDateStr)

        assert.equal(3140,coarse.discount)
    })
    it("Should return a 40% discount amount of 3596 for the Intro to PHP Course",function(){
        let courseCode = "p2";
        let startDateStr = "2018-10-23"

        
        let coarse = courseCost(courseCode, startDateStr)

        assert.equal(3596,coarse.discount)
    })
    it("Should return a 40% discount amount of 2270 for the Ruby on Rails Course",function(){
        let courseCode = "r1";
        let startDateStr = "2018-10-24"

        
        let coarse = courseCost(courseCode, startDateStr)

        assert.equal(2270,coarse.discount)
    })
})



describe("Testing for the amounts due after discount",function(){
    it("Should return an amount of 6280 after the 20% discount is applied on the Python Course",function(){
        let courseCode = "p1";
        let startDateStr = "2018-10-13"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(6280,coarse.amountDue)
    })
    it("Should return an amount of 7192 after the 20% discount is applied on the Intro to PHP Course",function(){
        let courseCode = "p2";
        let startDateStr = "2018-10-14"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(7192,coarse.amountDue)
    })
    it("Should return an amount of 4540 after the 20% discount is applied on the Ruby on Rails Intro Course",function(){
        let courseCode = "r1";
        let startDateStr = "2018-10-10"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(4540,coarse.amountDue)
    })


    it("Should return an amount of 4710 after the 40% discount is applied on the Python Course",function(){
        let courseCode = "p1";
        let startDateStr = "2018-10-20"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(4710,coarse.amountDue)
    })
    it("Should return an amount of 5394 after the 40% discount is applied on the Intro to PHP Course",function(){
        let courseCode = "p2";
        let startDateStr = "2018-10-23"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(5394,coarse.amountDue)
    })
    it("Should return an amount of 3405 after the 20% discount is applied on the Ruby on Rail intro course",function(){
        let courseCode = "r1";
        let startDateStr = "2018-10-24"

        
        let coarse = courseCost(courseCode, startDateStr)


        assert.equal(3405,coarse.amountDue)
    })
})
