const { test, describe } = require('node:test');
const assert = require('node:assert');

const listHelper = require('../utils/list_helper');

const blog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
    likes: 5,
    __v: 0,
  },
];

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0,
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0,
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0,
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0,
  },
];

test('dummy returns one', () => {
  const result = listHelper.dummy([]);
  assert.strictEqual(result, 1);
});

describe('total likes', () => {
  test('of empty list is zero', () => {
    assert.strictEqual(listHelper.totalLikes([]), 0);
  });

  test('when list has only one blog equals the likes of that', () => {
    assert.strictEqual(listHelper.totalLikes(blog), blog[0].likes);
  });

  test('of a bigger list is calculated right', () => {
    assert.strictEqual(listHelper.totalLikes(blogs), 36);
  });
});

const oneBlogFavorite = {
  title: 'Go To Statement Considered Harmful',
  author: 'Edsger W. Dijkstra',
  likes: 5,
};

const favorite = {
  title: 'Canonical string reduction',
  author: 'Edsger W. Dijkstra',
  likes: 12,
};

describe('favorite', () => {
  test(`of empty list is zero`, () => {
    assert.deepStrictEqual(listHelper.favoriteBlog([]), 0);
  });

  test(`when list has only one blog equals to that blog`, () => {
    assert.deepStrictEqual(listHelper.favoriteBlog(blog), oneBlogFavorite);
  });

  test(`of a bigger list is calculated right`, () => {
    assert.deepStrictEqual(listHelper.favoriteBlog(blogs), favorite);
  });
});

const oneBlog = {
  author: 'Edsger W. Dijkstra',
  blogs: 1,
};

const mostBlogs = {
  author: 'Robert C. Martin',
  blogs: 3,
};

describe('most blogs', () => {
  test('of empty list is zero', () => {
    assert.strictEqual(listHelper.mostBlogs([]), 0);
  });

  test(`when list has only one blog equals to that blog`, () => {
    assert.deepStrictEqual(listHelper.mostBlogs(blog), oneBlog);
  });

  test(`of a bigger list is calculated right`, () => {
    assert.deepStrictEqual(listHelper.mostBlogs(blogs), mostBlogs);
  });
});

const oneBlogLikes = {
  author: 'Edsger W. Dijkstra',
  likes: 5,
};

const mostLikes = {
  author: 'Edsger W. Dijkstra',
  likes: 17,
};

describe('most likes', () => {
  test('of empty list is zero', () => {
    assert.strictEqual(listHelper.mostLikes([]), 0);
  });

  test(`when list has only one blog equals the likes of that`, () => {
    assert.deepStrictEqual(listHelper.mostLikes(blog), oneBlogLikes);
  });

  test(`of a bigger list is calculated right`, () => {
    assert.deepStrictEqual(listHelper.mostLikes(blogs), mostLikes);
  });
});
