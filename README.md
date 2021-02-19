

##### This is just a quick and simple Javascript project. It literally just uses click event listener to switch to different images

##### User experience: 
###### 1. User is able to click on the Lunch title and it would open the Lunch Menu
###### 2. User is able to return back to Lunch title after the second click
###### 3. User is able to click back and ford on the images

###### Note:

###### I could be wrong but i found it works without if statement

###### first w if statement:
###### ```app.js```
```

const lunchMenu = document.querySelector('.lunch-menu')
const lunchTitle = document.querySelector('.lunch-title')


// add event listener
lunchTitle.addEventListener('click', () => {
    // if statement
    // if the lunch menu is close while lunch title is shown
    // lunch menu would be actived
    // lunch title would be removed if lunch menu shows
      if (lunchMenu.classList.contains('lunch-menu')) {
        lunchMenu.classList.add('active')
        lunchTitle.classList.remove('active')
      }
})

lunchMenu.addEventListener('click', () => {
    // if statement
    // if the lunch title is close while lunch menu is shown
    // lunch title would be actived
    // lunch menu would be removed if lunch title shows
     if (lunchTitle.classList.contains('lunch-title')){
        lunchTitle.classList.add('active')
        lunchMenu.classList.remove('active')

     }
 })   

```

###### second w/o is statement:

```
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

```

![picture](images/f1bda3f46e82dbca0049ce9526203f14.png)

![picture](images/NEW-LUNCH-MENU.revised-01.png)