class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }}


const app = new Vue({
  el: '#app',
  data: {
    search: '',
    postList: [
    new Post(
    'UniType',
    'https://unitype.vercel.app/',
    '@BotzC',
    './unitype.png'),
	
	new Post(
    'Elect Dis',
    './404/404.html',
    '@BotzC',
    './soon.png'),
	
	new Post(
    'Net_Drive',
    'https://netdrive.vercel.app/',
    '@BotzC',
    'https://github.com/BotzC/onedrive-vercel-indexpro/blob/main/public/icons/128.png?raw=true'),

    new Post(
    'VMware',
    'https://softwareupdate.vmware.com/cds/vmw-desktop/ws/',
    '@BotzC',
    './images/vm.jpg'),
	
	new Post(
    'React.js',
    'https://facebook.github.io/react/',
    '@BotzC',
    './soon.png'),
	
		new Post(
    'React.js',
    'https://facebook.github.io/react/',
    '@BotzC',
    './soon.png'),
	
		new Post(
    'React.js',
    'https://facebook.github.io/react/',
    '@BotzC',
    './soon.png'),

    new Post(
    'React.js',
    'https://facebook.github.io/react/',
    '@BotzC',
    './soon.png')] },



  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    } } });