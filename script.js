const myActive = document.querySelector(".menu_burger");
if(myActive){
    const myUl = document.querySelector(".ul_cnt");
    const myMenu = document.querySelector(".menu");
    myActive.addEventListener('click', function(e){
      myActive.classList.toggle('active');
      document.body.classList.toggle('_lock')
      myUl.classList.toggle('active');
    });
}
