/* eslint-disable */

import * as gifsLibrary from "./gifs.js";

// we need to take the text that was typed in the textbox
const textArea = document.querySelector("#tweetarea");
const tweets = [];
const feed = document.querySelector("#feed");
const btn = document.querySelector("#tweet");

function tweetNew() {
  const text = textArea.value;

  // then we need to create dynaically an object that looks like:
  // { text: this-value-comes-from-textarea }
  const newTweet = {
    text,
    avatar: "https://placem.at/places?w=50&h=50&txt=",
  };

  // then we can insert our object into our array called tweets
  tweets.push(newTweet);

  // clear field
  textArea.value = "";

  // then we render tweets array
  // once tweet button is clicked, then do the above steps, then render
  render();
}

function render() {
  feed.innerHTML = tweets
    .map(
      (tweet) => `
    <div class="tweet">
      <img src="${tweet.avatar}" />
        <p>
          ${tweet.text}
        </p>
    </div>
    <div class="imgGifPoll"></div>
    <div>
      <section class="bb">
        <div id="reactions" class="btn-group mr-2">
          <button type="button" class="btn btn-secondary mdi mdi-message-outline" aria-label="reply"></button>
          <button type="button" class="btn btn-secondary mdi mdi-twitter-retweet"
            aria-label="retweet"></button>
          <button type="button" class="btn btn-secondary mdi mdi-heart-outline" aria-label="like"
            style=""></button>
          <button type="button" class="btn btn-secondary mdi mdi-upload" aria-label="share"></button>
        </div>
      </section>
    </div>
    
    `
    )
    .join("");
}

btn.addEventListener("click", tweetNew);
