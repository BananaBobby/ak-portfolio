const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const names = ['dancer', 'choreographer', 'model'];
const postsPath = path.resolve(__dirname, '../public/posts');
const rubrics = names.map(name => {
  return {
    name,
    path: path.join(postsPath, name)
  };
});

const rubricsData = rubrics.map(rubric => {
  const postFiles = fs.readdirSync(rubric.path);
  const slides = [];
  let slidePosts = [];
  const posts = postFiles.map(name => {
    const postPath = path.resolve(rubric.path, name);
    let doc;

    if (!name.includes('yaml')) return null;

    try {
      doc = yaml.load(fs.readFileSync(postPath, 'utf8'));
    } catch (e) {
      console.log(e);
    }

    return doc;
  }).filter(Boolean);

  posts.forEach((post, index) => {
    slidePosts.push(post);

    const nextPost = posts[index + 1];
    const hasTypeChanged = nextPost && nextPost.type !== post.type;
    const isLast = index === posts.length - 1;
    const isFullLast = post.type === 'full';
    const isQuarterLast = post.type === 'quarter' && slidePosts.length === 4;
    const isHalfLast = (post.type === 'half-vertical' || post.type === 'half-horizontal') && slidePosts.length === 2;

    if (hasTypeChanged || isLast || isFullLast || isQuarterLast || isHalfLast) {
      slides.push({ posts: slidePosts, type: post.type });
      slidePosts = [];
    }
  });

  return {
    ...rubric,
    slides,
    previews: posts.slice(0, 2).map(post => ({ ...post, previewSmall: post.previewSmall || post.preview })),
  };
});

fs.writeFileSync(path.resolve(__dirname, '../data.json'), JSON.stringify({ rubrics: rubricsData }));
