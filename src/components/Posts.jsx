const Posts = ({loading, posts}) => {
  if (loading) return <h3>Loading ...</h3>;

  return (
    <>
      <h3>Posts</h3>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.id} - {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
