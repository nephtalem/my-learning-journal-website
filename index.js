viewMoreEl = document.getElementById('view-more')
let count = 0

viewMoreEl.addEventListener('click', function(e){
    count ++
   const wideCard = document.querySelectorAll('.wide-card')
  
  if(count % 2 != 0){
      for(let widecard of wideCard){
      widecard.style.display = 'block'
      viewMoreEl.textContent = 'view less'
   }
  }
  else{
      for(let widecard of wideCard){
          widecard.style.display = 'none'
          viewMoreEl.textContent = 'view More'
      }
  }
   
})