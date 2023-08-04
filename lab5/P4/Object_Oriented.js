function Song(title,artist){
    this.title=title;
    this.artist=artist;
}

Song.prototype.play = function(){
  console.log(`Playing: ${this.title} by ${this.artist}`);
};

const song1 =new Song("Jeep","Whatcharawalee");
const song2 =new Song("ดูดี","Polycat");
song1.play(); 
song2.play();
