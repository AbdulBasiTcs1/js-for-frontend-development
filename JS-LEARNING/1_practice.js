function evenOddCheck(...param){
    for (let i=0;i<param.length;i++){
        if(param[0]%2==0){
            console.log(param[0],"is even")
        }else{
            console.log(param[0],"is odd")
        }
    }
}

evenOddCheck(2,3,4,5)