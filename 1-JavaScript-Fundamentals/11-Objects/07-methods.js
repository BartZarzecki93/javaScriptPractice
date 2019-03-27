let obj = {
    //the given input becomes name
    capitalize: function(name) {
        let newName = ""; //newName is a blank string where the letters from name will be entered
        for (let i = 0; i < name.length; i++) {
            if (i == 0) {
                newName += name[0].toUpperCase(); //the first letter of name is capitalized, then added to the string newName
            } else {
                newName += name[i].toLowerCase(); //each subsequent letter is made lowercase, then added the string newName
            }
        }
        console.log(newName);
    } 
}

obj.capitalize('aaron');

let obj1 =
{

    multiply: function (number)

    {

        let newNumber;

        if(number == 0)
        {
            console.log(number *0 + " Its zero")
        }
        else{
            console.log(number *2);
        }

    }

}
obj1.multiply(0);



let obj2 = {
    //the given input becomes name
    capitalize: function(name) {
        let newName = ""; //newName is a blank string where the letters from name will be entered
        for (let i = 0; i < name.length; i++) {
            if (i == 0) {
                newName += name[0].toUpperCase(); //the first letter of name is capitalized, then added to the string newName
            }
            
           
            else {
                newName += name[i-1].toLowerCase(); //each subsequent letter is made lowercase, then added the string newName
                
            }
            
            
        }
        console.log(newName);
    } 
}

obj2.capitalize('aaron');




let objPrint =
{

    print: function (number)

    {

        let newNumber;

        if(number == 0)
        {
            console.log(number + " Its zero")
        }
        else{

            for(i=1;i<=number;i++)
            {
            console.log(i);
            }
            for(i=number;i>0;i--)
            {
            console.log(i);
            }

        }

    }

}
objPrint.print(20);

