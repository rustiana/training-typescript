let w: unknown = 1;
w = "String";

w = {
    runANonExistentMethod: () =>{
        console.log("I think therefore I am");
        
    }
} as { runANonExistentMethod: () => void}

if(typeof w === 'object' && w !== null){
    (w as {runANonExistentMethod: Function}).runANonExistentMethod();
}