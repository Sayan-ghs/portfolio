/**var typed = new Typed(".autowrite", {
    strings: ["Fronted Developer","Backend Developer", "Codder"],
    typespeed:150,
    backspeed:150,
    backDelay:1000,
    loop: true
  });*/
  const cosmicBackground = document.getElementById("cosmicBackground");
  const stars = [];
  const numberofstars = 100;
  // creat random stars 
  for(let i=0;i<numberofstars;i++){
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random()*3+1;//size between 1 and 4
    star.style.width=`${size}px`;
    star.style.height=`${size}px`;
    star.style.top=`${Math.random()*100}vh`;
    star.style.left=`${Math.random()*100}vw`;
    cosmicBackground.appendChild(star);
    stars.push(star);
  }
  //connect lines on mouse move 
  cosmicBackground.addEventListener('mousemove',(event)=>{
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    stars.forEach(star => {
      const rect = star.getBoundingClientRect();
      const starX = rect.left + rect.width /2 ;
      const starY = rect.top + rect.height /2 ;
      // creat a line if the mouse is near the star 
      if(Math.hypot(mouseX - starX , mouseY - starY) < 100){
        drawline(mouseX,mouseY,starX,starY);
      }
    });
  });

  function drawline(x1,y1,x2,y2){
    const line = document.createElement('div');
    line.className = 'line';
        const length = Math.hypot(x2 - x1, y2 - y1);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;

    cosmicBackground.appendChild(line);
    setTimeout(()=>{
      line.remove();
    },500);
  }
