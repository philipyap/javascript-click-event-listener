const lunchMenu = document.querySelector('.lunch-menu')
const lunchTitle = document.querySelector('.lunch-title')


// add event listener
lunchTitle.addEventListener('click', () => {
    // if statement
    // if the lunch menu is close while lunch title is shown
    // lunch menu would be actived
    // lunch title would be removed if lunch menu shows
    //   if (lunchMenu.classList.contains('lunch-menu')) {
        lunchMenu.classList.add('active')
        lunchTitle.classList.remove('active')
    //   }
})

lunchMenu.addEventListener('click', () => {
    // if statement
    // if the lunch title is close while lunch menu is shown
    // lunch title would be actived
    // lunch menu would be removed if lunch title shows
    //  if (lunchTitle.classList.contains('lunch-title')){
        lunchTitle.classList.add('active')
        lunchMenu.classList.remove('active')

    //  }
 })   

