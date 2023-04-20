function tutorWageCalculator( timeSheet,level){
    let timeSheetList = timeSheet.split("-");
    let wage = 0;
    
    let timeSheetListLength = timeSheetList.length


    console.log(timeSheetListLength)

    if( !(timeSheetListLength > 7 || timeSheetListLength <5)   ){

        for(let i =0 ; i < timeSheetList.length ; i++){
            switch(level){
                case 1:
                    wage += timeSheetList[i]*75;
                    break;
                case 2:
                    wage += timeSheetList[i]*90;
                    break;
                case 3:
                    wage += timeSheetList[i]*105;
                    break;
                default:
                    wage = 0
                    break; 
            }
        }
    }else{
        return wage;
    }
    return wage;
}
