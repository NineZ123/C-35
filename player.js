class Player{
    constructor(){

    }
getCount(){
var playerCountRef=database.ref("playerCount");
playerCountRef.on("value",function(data){
    playerCount=data.val();
})
}
updateCount(x){
    database.ref("/").update({
        playerCount:x
    });
}
updateName(y){
    var playerIndex="Player"+playerCount;
    database.ref(playerIndex).set({
        name:y
    });
}
}