### Navbar

Final thing to do before we finish this lesson and get into the project, is do a quick tutorial on how to make a basic floating header.

Almost every website you go to has a header, they provide the name of the site as well as navigational links to take you to other places on the site. The best headers are the ones that follow you as you scroll down the page. 

```html
    <!-- START LIBRARY IMPORTS -->
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js"></script> 
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=css"></script> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> 
    <!-- END LIBRARY IMPORTS -->
     
    <!-- START CCC IMPORTS -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/mm909/CCC@master/js/CCC.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mm909/CCC@master/css/CCC.css">
    <!-- END CCC IMPORTS -->
```

```html
<!DOCTYPE html>
<html>
  <head>
  <link rel="stylesheet" type="text/css" href="stylesheet/stylesheet.css">
    <meta charset="utf-8">
    <title>My Website!</title>
  </head>
  <body>

    <div class="navbar">
      <a href="#">Home</a>
      <a href="#">News</a>
      <a href="#">Contact</a>
    </div>

    <div class="main">
      <h1>Fixed Top Menu</h1>
      <h2>Scroll this page to see the effect</h2>
      <h3>The navagation bar will start at the
             top of the page while scrolling</h3>

      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
      <p>Some text Some text Some text Some text ...</p>
    </div>

  </body>
</html>
```

```css
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background: #ddd;
  color: black;
}

.main {
  padding: 16px;
  margin-top: 30px;
  height: 1500px;
}
```
