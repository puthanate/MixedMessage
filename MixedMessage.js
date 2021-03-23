const randomNum = Math.floor(Math.random() * 6);
const name = [];
const randomName = (num,array) => {
    switch(num){
        case 0:
            array.push("Disguised Toast");
            break;
        case 1: 
            array.push("Scarra");
            break;
        case 2: 
            array.push("NoctisAK47");
            break;
        case 3: 
            array.push("HeartRocker");
            break;
        case 4: 
            array.push("I");
            break;
        case 5:
            array.push("You");
            break;
        default: 
            console.log("Error, There is a problem with our code");
            break;
    }
};
randomName(randomNum,name);
const randomMessage = (num,name) => {
    switch(num){
        case 1:
            console.log(`${name} said "I will focus on almighty god first, then work on myself. After that, I will trust in him to guide me along my path."`);
            break;
        case 2:
            console.log(`${name} said "Karen shouldn't exist in this world LMFAO."`);
            break;
        case 3:
            console.log(`${name} said "don't be engineer you will die."`);
            break;
        case 4:
            console.log(`${name} said "don't be a pussy and take a drink"`);
            break;
        case 5:
            console.log(`${name} said "only nerd reads."`);
            break;
        case 6:
            console.log(`${name} said "Stop being a pussy"`);
            break;
        default: 
            console.log("Error, There is a problem with our code");
            break;
    }
};
randomMessage(randomNum,name);
