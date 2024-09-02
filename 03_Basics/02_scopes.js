// let a = 300;
// var c = 300;
  
// if(true){
//     let a = 10;
//     console.log(a);  //10
//     const b = 20;
//     console.log(b);  //20
//     var c = 1000;
//     console.log(c);  // 1000
// }

// console.log(a);     // 300
// // console.log(b);     //NOT DEFINED
// console.log(c);   // 1000



// NESTED FUNCTIONS SCOPE

function one(){
    const username = "Abhay"

    two()
    function two(){
        const website = "youtube"
        console.log("VARIABLE OF PARENT FUNCTION WHEN ACCESSED FROM CHILD FUNTION : ",username)
    }
    // console.log("VARIABLE OF CHILD FUNTION WHEN TRIED TO ACCESSED FROM SCOPE OF PARENT FUNCTION(OUT OF CHILD FUNCTION BLOCK): ", website)
}

one()
 