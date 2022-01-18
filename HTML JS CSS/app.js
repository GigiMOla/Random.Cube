var Player = document.getElementById('player');
var Score = document.getElementById('score');
var Timer = document.getElementById('timer')
var RealTimer = 20;
var RealScore = 0;
var IntervalCounter = 800;
var Sound = new Audio();
Sound.src = '/HTML JS CSS/Audio/pop.wav'

var WinAudio = new Audio()
WinAudio.src = '/HTML JS CSS/Audio/Win.wav'

var Lose = new Audio()
Lose.src = '/HTML JS CSS/Audio/lose.mp3'


var Interval = setInterval(StartTimer, IntervalCounter)

Player.addEventListener('click', function() {
    Sound.play()
    RealScore++;
    Score.textContent = 'Score' + ' ' + RealScore;
    var RandomPosX = Math.floor(Math.random() * 500);
    var RandomPosY = Math.floor(Math.random() * 600);
    var RandomScale = Math.floor(Math.random() * 100);


    if (RandomScale < 10) {
        RandomScale = 20;
        Player.style.width = RandomScale + 'px';
        Player.style.height = RandomScale + 'px';
    }

    Player.style.marginLeft = RandomPosX + 'px';
    Player.style.marginTop = RandomPosY + 'px';
    Player.style.width = RandomScale + 'px';
    Player.style.height = RandomScale + 'px';
})

function StartTimer() {
    RealTimer--;
    Timer.textContent = 'Timer' + ' ' + RealTimer;

    if (RealTimer <1) {
        Lose.play()
        EndGame()
        Win()
    }
}

function StopTimer() {

}
function EndGame() {
    clearInterval(Interval)
}
function Win() {
    if (RealScore > 20) {
        WinAudio.play()
        Swal.fire(
            'Good job!',
            'You Win, Your score is' + ' ' + RealScore,
            'success'
          )
        EndGame()
    } else {
        Lose.play()
        Swal.fire('Sorry, you lose game')
    }
} 
