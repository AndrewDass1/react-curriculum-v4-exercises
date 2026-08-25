import { data } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './Lesson07Styles.css';

import { GetPosts } from './api';

export default function FetchOnRender() {
  return (
    <div className="root" id="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {/* <GetPosts getpostsData={GetPosts}/> */}

        <button type="button" onClick={GetPosts}>
          Get post
        </button>
      </div>
    </div>
  );
}
