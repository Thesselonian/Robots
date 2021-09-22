var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        //variable for fight prompt
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if(promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight, Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney);
                break;
            }
            //if no (false), ask question again by running fight() again
            else {
                fight();
            }
        }
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtact the value of 'playerAttack' from the value of 'enemyHealth'
            enemyHealth = enemyHealth - playerAttack
            //Log a resulting message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                // Award player money for winning
                playerMoney = playerMoney + 20;
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            // Subtract the value of 'enemyAttack' fromt the value of 'playerHealth'
            playerHealth = playerHealth - enemyAttack;
            //log a resulting message to the console so we know that it worked.
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + "now has " + playerHealth + " health remaining."
            );
            //Check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            //If player chooses to skip
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
}
window.alert("welcome to Robot Gladiators!");
for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(enemyNames[i]);
};

// Game States
// "WIN" - player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less