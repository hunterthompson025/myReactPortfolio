const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Timber Time - JavaScript',
      imageUrl: './assets/images/timberTime.jpg',
      link: 'https://hunterthompson025.github.io/M4homework-JavaScript-BlogSite/',
      gitHubLink: 'https://github.com/hunterthompson025/M4homework-JavaScript-BlogSite'
    },
    {
      title: 'Weather Dashboard - API, JavaScript',
      imageUrl: './assets/images/weatherAPI.jpg',
      link: 'https://hunterthompson025.github.io/Module6homework-WeatherDashboard-API/',
      gitHubLink: 'https://github.com/hunterthompson025/Module6homework-WeatherDashboard-API'
    },
    {
      title: 'PWA Quill - IndexedDB, MongoDB',
      imageUrl: './assets/images/pwaQuill.jpg',
      link: 'https://pwa-quill-indexeddb-texteditor.onrender.com',
      gitHubLink: 'https://github.com/hunterthompson025/PWA_Quill-IndexedDB-TextEditor'
    },
    {
      title: 'mixologyGenie - JavaScript',
      imageUrl: './assets/images/mixologyGenie.jpg',
      link: 'https://bmist41.github.io/Mixology-Genie/',
      gitHubLink: 'https://github.com/bmist41/Mixology-Genie'
    },
    {
      title: 'From A To B - Express, Node.js',
      imageUrl: './assets/images/fromAToB.jpg',
      link: 'https://github.com/hunterthompson025/From_A_to_B',
      gitHubLink: 'https://github.com/hunterthompson025/From_A_to_B'
    },
    {
      title: 'Sawdust Social - NoSQL, MongoDB',
      imageUrl: './assets/images/sawdustSocial.jpg',
      link: 'https://github.com/hunterthompson025/SawdustSocial-NoSQL-MongoDB',
      gitHubLink: 'https://github.com/hunterthompson025/SawdustSocial-NoSQL-MongoDB'
    }
  ];

  return (
    <div className="portfolio-container">
      {portfolioItems.map((item, index) => (
        <div key={index} className="portfolio-item">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
            <h3 className="portfolio-title">{item.title}</h3>
          </a>
          <a href={item.gitHubLink}><h3 className="portfolio-title">GitHub Repository</h3></a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
