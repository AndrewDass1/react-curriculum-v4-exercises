const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

/**
 * Instructions:
 * The `POSTS_ENDPOINT` url returns a list of post objects
 * from the JSONPlaceholder API.
 * Your task is to finish implementing the two functions in this file
 * so that they fetch data from the API and return the results as JSON.
 * Then, you will use that data in `<FetchOnRender>` and `<FetchOnClick>`.
 *
 * TIP: A request to `https://jsonplaceholder.typicode.com/posts/`
 * returns an array of posts.
 * A request to `https://jsonplaceholder.typicode.com/posts/1`
 * returns a single post object with an `id` of 1.
 * Try pasting those URLs into your browser to see the results!
 */

/**
 * Should return an array of posts with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export function GetPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = POSTS_ENDPOINT;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data)
      // console.log((data[0]))
      // console.log(data[0].userId)
      // console.log(data[0].id)
      // console.log(data[0].title)
      // console.log(data[0].body)
      // console.log(data.length)
      // console.log(typeof(data[0].body))

      // go through all elements 0-100 and save them into a string then print them out on the page

      let dataFromJSON;
      let userIdEntry;
      let idEntry;
      let titleEntry;
      let bodyEntry;

      let entries;

      for (let i = 0; i < data.length; i++) {
        userIdEntry = 'userId: ' + data[i].userId + ' ';
        idEntry = 'id: ' + data[i].id + ' ';
        titleEntry = 'title: ' + data[i].title + ' ';
        bodyEntry = 'body: ' + data[i].body + ' ';

        entries = userIdEntry + idEntry + titleEntry + bodyEntry + '\n';

        dataFromJSON += entries;
      }

      return dataFromJSON;
    });
}

/**
 * Should return a single post object with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export function GetSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  // TODO: use this `url` const to fetch the single post
  // and return some JSON data.
  // You may delete this comment once you've finished the implementation.
  // eslint-disable-next-line no-unused-vars
  let randomNumberEntry = Math.floor(Math.random() * 100);

  const url = `${POSTS_ENDPOINT}${randomNumberEntry}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((singlePostData) => {
      console.log(singlePostData);

      return singlePostData;
    });
}
