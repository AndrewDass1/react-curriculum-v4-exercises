const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const response = await fetch(POSTS_ENDPOINT);
  const data = await response.json();

  return data;
}

export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const response = await fetch(`${POSTS_ENDPOINT}${postId}`);
  const data = await response.json();

  return data;
}
