
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
    icon: 'assets/image/Vector.png',
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
    
  summary.innerHTML += ` 
   <li class="listElement ${summaryData[i].name}">
   <div class="listItem"><img src="${summaryData[i].icon} "/>  ${summaryData[i].label} </div>
   <div class="lıstColor"> ${summaryData[i].score} <span> /100 </span></div>
   </li>`;

 total += summaryData[i].score/4;
 

}
deger.innerHTML = Math.floor(total);



