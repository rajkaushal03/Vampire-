const Blockcontainer = document.querySelector('.Blockcontainer')

for(var i = 0; i<=100;i++)
{
    const blocks=document.createElement('div')
    blocks.classList.add('block');
    Blockcontainer.appendChild(blocks);
}

function animateBlocks()
{
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-1000,1000);
        },
        translateY: function () {
            return anime.random(-500,500);
        },
        scale: function () {
            return anime.random(1,5);
        },

        easing: 'linear',
        duration:3000,
        delay:anime.stagger(10),
        complete:animateBlocks,
    })
}

animateBlocks()



function animateBlocks()
{
  anime({
      targets: '.block',
      translateX: function(){
          return anime.random(-900,900);
      },
      translateY: function () {
          return anime.random(-300,300);
      },
      scale: function () {
          return anime.random(1,5);
      },

      easing: 'linear',
      duration:3000,
      delay:anime.stagger(10),
      complete:animateBlocks,
  })
}

animateBlocks()