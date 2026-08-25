import './Lesson07Styles.css';

import { GetSinglePost } from './api';

export default function FetchOnClick() {
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={GetSinglePost}>
        Get post
      </button>
      <div className="content"></div>
    </div>
  );
}
