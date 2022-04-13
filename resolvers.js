const posts = require('./DB');
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      posts: () => posts,
    },
    Mutation: {
        addPost: (_, { title, description, image, author }) => {  
                const newPost = {
                    id: posts.length + 1,
                    title: title,
                    description: description,
                    image: image,
                    author: author,
                    likes: 0,
                    createdAt: new Date().toISOString()
                };
                posts.push(newPost);
                return newPost;
        },
        deletePost: (_, { id }) => {
            const index = posts.findIndex(post => post.id === id);
            if (index === -1) {
                return false;
            }
            posts.splice(index, 1);
            return true;
        },
        likePost: (_, { id }) => {
            const index = posts.findIndex(post => post.id === id);
            if (index === -1) {
                return false;
            }
            posts[index].likes++;
            return true;
        }
    }
  };

    module.exports = resolvers;