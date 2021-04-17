var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');
var topicContainer = document.querySelector('#repos-container');
var topics = [];

function searchGifs(search){
fetch('https://api.giphy.com/v1/gifs/search?api_key=PmG46fdKvnTm1OTlRRcJPeGyyPTGF7kg&q=' + search)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
};

var formSubmitHandler = function (event) {
    event.preventDefault();

    var username = nameInputEl.value.trim();

    if (topics.includes(username)){
        return;
    } else if (username === ''){
        return;
    }else{
        topics.push(nameInputEl.value);
        console.log(topics);
        createTopicBtn();
    };
};

function createTopicBtn(){
    topicContainer.innerHTML = '';
    for (i=0; i<topics.length; i++){
      var button = document.createElement('button');
      button.id = topics[i];
      var t = document.createTextNode(topics[i]);
      button.appendChild(t);
      document.body.children[1].children[1].children[1].appendChild(button);
    };
};

// if (username === '') {
//     return;
// }else{
//     searchGifs(username);
// };

//topicContainer.on('click', '.repos-container', searchGifs);
userFormEl.addEventListener('submit', formSubmitHandler);


