var w = 1;
w = "String";
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
