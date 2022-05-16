import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../utils/API';
import Post from '../components/Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then(({ data: posts }) => setPosts(posts.reverse()))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <h2>View Posts:</h2>
      {posts ? (
        <section className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      ) : (
        <section className="noPosts">
          <h2>
            There are no posts yet. You should{' '}
            <Link to="/add">go add one!</Link>{' '}
          </h2>
        </section>
      )}
    </main>
  );
};

export default Posts;
