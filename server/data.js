const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const postsPath = path.resolve(__dirname, '../public/posts');
const isDirectory = source => fs.lstatSync(source).isDirectory();
const rubrics = fs.readdirSync(postsPath).map(name => {
    return {
        name,
        path: path.join(postsPath, name)
    };
}).filter(obj => {
    return isDirectory(obj.path);
}).sort(a => a.name !== 'dancer');

const rubricsData = rubrics.map(rubric => {
    const postFiles = fs.readdirSync(rubric.path);
    const slides = [];
    let slidePosts = [];
    const posts = postFiles.map(name => {
        const postPath = path.resolve(rubric.path, name);
        let doc;

        try {
            doc = yaml.safeLoad(fs.readFileSync(postPath, 'utf8'));
        } catch (e) {
            console.log(e);
        }

        return doc;
    });

    posts.forEach((post, index) => {
        slidePosts.push(post);

        const nextPost = posts[index + 1];
        const hasTypeChanged = nextPost && nextPost.type !== post.type;
        const isLast = index === posts.length - 1;
        const isFullLast = post.type === 'full';
        const isQuarterLast = post.type === 'quarter' && slidePosts.length === 4;
        const isHalfLast = (post.type === 'half-vertical' || post.type === 'half-horizontal') && slidePosts === 2;

        if (hasTypeChanged || isLast || isFullLast || isQuarterLast || isHalfLast) {
            slides.push(slidePosts);
            slidePosts = [];
        }
    });

    return {
        ...rubric,
        slides,
    };
});

module.exports = {
    rubrics: rubricsData
};