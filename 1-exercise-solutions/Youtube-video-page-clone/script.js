const headerBtn = document.getElementById('js-header-menu');
const sidebarbtn = document.getElementById('js-aside-menu');
const sidebar = document.getElementsByClassName('aside-container')[0];
const body = document.querySelector('body');
const overlay = document.createElement('div'); 

headerBtn.addEventListener('click', () => {
  sidebar.style.display = 'block';
  body.style.overflow = 'hidden';
  overlay.classList.add('overlay'); 
  body.appendChild(overlay);
});

body.addEventListener('click', (event) => {
  if (sidebar.classList.contains('open')) {
    event.preventDefault(); 
  }
});

sidebarbtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
  body.style.overflow = 'auto';
  overlay.classList.remove('overlay');
});

// comment section JS

const commentInput = document.getElementById('js-comment-input');
const commentButton = document.getElementById('Comment');

commentInput.addEventListener('keydown', (e) => {
  commentButton.style.backgroundColor = '#065fd4';
  commentButton.style.color = 'white';
  
}); 

commentInput.addEventListener('keyup', (e) => {
  if (commentInput.value === '') {
    commentButton.style.backgroundColor = 'var(--hover-color)';
    commentButton.style.color = 'black';
  } 
});

// comment expand more/less

const expandLess = document.getElementById('js-expand-less');
const expandLessText = document.getElementById('js-expand-less-text');
const repliedComment = document.getElementById('js-replied-comment');

expandLessText.addEventListener('click', () => {
  if (expandLess.innerText === 'expand_more') {
    expandLess.innerText = 'expand_less';
    repliedComment.style.display = 'block';
  } else {
    repliedComment.style.display = 'none';
    expandLess.innerText = 'expand_more';
  }
});


expandLess.addEventListener('click', () => {
  if (expandLess.innerText === 'expand_more') {
    expandLess.innerText = 'expand_less';
    repliedComment.style.display = 'block';
  } else {
    repliedComment.style.display = 'none';
    expandLess.innerText = 'expand_more';
  }
});

// add-remove-likes

const likesSpan = document.getElementsByClassName('comment-likes-count')[0];
let likesCount = document.getElementsByClassName('comment-likes-count')[0];
const likedBtn = document.getElementById('js-comment-liked');
const dislikedBtn = document.getElementById('js-comment-disliked');

let likesDislikes = 0;

likedBtn.addEventListener('click', () => {
    likesDislikes++;
    likesCount.innerText = likesDislikes;
});

dislikedBtn.addEventListener('click', () => {
    if (likesDislikes <= 0) {
      likesCount.innerText = ' ';
      return;
    } else {
      likesDislikes--;
      likesCount.innerText = likesDislikes;
    }
    
});


// add a comment 

const commentsContainer = document.getElementsByClassName('comments-container')[0];
const newComment = document.createElement('div');

commentButton.addEventListener('click', () => {

  if (commentInput.value === '') {
    return;
  }

  newComment.innerHTML =  `<div class="comment-block">
<div class="comment-owner-pfp">
  <img src="images/pfp.jpg" alt="">
</div>
<div class="comment-contents">
  <div class="author-and-time">
    <div>@LoremIpsum</div>
    <div>${Date()}</div>
  </div>
  <div class="comment-text">
    ${commentInput.value}
  </div>
  <div class="comment-actions">
    <button class="like-comment" id="js-comment-liked">
      <span class="material-icons-sharp">thumb_up</span>
      <span class="comment-likes-count"></span>
    </button>
    
    <button class="dislike-comment" id="js-comment-disliked">
      <span class="material-icons-sharp">thumb_down</span>
    </button>
    
    <div class="reply-comment">
      <a href="">Reply</a>
    </div>
  </div>
  
</div>
</div>`;

  commentsContainer.appendChild(newComment);
});

// description show less prompt

const showLess = document.getElementById('description-show-less');

const LowerSection = document.getElementsByClassName('video-desctiprion-lower-section')[0];

showLess.addEventListener('click', () => {
  if (showLess.innerText === 'Show less') {
    LowerSection.style.display = 'none';
    showLess.innerText = 'Show more';
  } else {
    LowerSection.style.display = 'block';
    showLess.innerText = 'Show less';
  }
  
});