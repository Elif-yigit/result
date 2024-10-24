
let total =0;

const summaryData = [
  {
    name: 'reactionScore',
    label: 'Reaction',
    icon: 'assets/image/flash.png',
    score: 80,
  },
  {
    name: 'memoryScore',
    label: 'Memory',
    icon: 'assets/image/brain.png',
    score: 92,
  },
  {
    name: 'verbalScore',
    label: 'Verbal',
    icon: 'assets/image/vector.png',
    score: 61,
  },
  {
    name: 'visualScore',
    label: 'Visual',
    icon: 'assets/image/eye.png',
    score: 73,
  },
];



for ( let i=0; i<summaryData.length; i++) {
    
  summary.innerHTML += ` <img src="${summaryData[i].icon} ">
   <li>${summaryData[i].label} - ${summaryData[i].score} /100</li>`;

 total += summaryData[i].score/4;
 

}
deger.innerHTML = Math.floor(total);



