var worst_breed = function find_breed() {
  name = document.getElementById("user_name").value;
  var maxCount = 99;
  var maxI = 0;
  var out = 1;
  var i = 1;

  //search for vowels
  if (name.length > 0) {
    if (name[0] == "A" || "E" || "I" || "O" || "U" || "a" || "e" || "i" || "o" || "u") {
      for (i; i < breeds.length; i++) {
        out = distanceH(name, breeds[i]);
        if (out < maxCount) {
          maxCount = out;
          maxI = i;
        }
      }
    } else {
      for (var i = 1; i < breeds.length; i++) {
        out = distanceL(name, breeds[i]);
        if (out < maxCount) {
          maxCount = out;
          maxI = i;
        }
      }
    }
  } else {
    document.getElementById("breed_text").innerHTML = "That's not a name. Try again.";
  }

  //Print breed
  console.log(maxI);
  console.log(maxCount);
  document.getElementById("breed_text").innerHTML = 'You\'re a ' + breeds[maxI];

  //Show breed image.
  fetch('https://dog.ceo/api/breed/' + breeds[maxI] + '/images/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(retJson) {
      dog_img = retJson.message;
      document.getElementById("breed_image").innerHTML = '<img src=' + dog_img + '></img>';
  });
}

var breeds;
var name;

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(retJson => {
        breeds = Object.keys(retJson.message);
        button.addEventListener("click", worst_breed);
});
