const weatherConfigs = {
  0: {
    text: 'Clear Sky',
    dayIcon: 'https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png',
    nightIcon: 'https://static.vecteezy.com/system/resources/previews/021/126/824/non_2x/yellow-moon-sticker-free-png.png',
    dayBg: 'https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148623068.jpg',
    nightBg: 'https://i.pinimg.com/736x/2c/5d/7a/2c5d7ab4ab48a6194afc6cb11dc3772e.jpg'
  },
  1: {
    text: 'Mainly Clear',
    dayIcon: 'https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png',
    nightIcon: 'https://static.vecteezy.com/system/resources/previews/021/126/824/non_2x/yellow-moon-sticker-free-png.png',
    dayBg: 'https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148623068.jpg',
    nightBg: 'https://i.pinimg.com/736x/2c/5d/7a/2c5d7ab4ab48a6194afc6cb11dc3772e.jpg'
  },
  2: {
    text: 'Partly Cloudy',
    dayIcon: 'https://static.vecteezy.com/system/resources/thumbnails/010/989/785/small_2x/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png',
    nightIcon: 'https://cdn3d.iconscout.com/3d/premium/thumb/clear-night-with-moon-10878340-8786773.png?f=webp',
    dayBg: 'https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148623068.jpg',
    nightBg: 'https://i.pinimg.com/736x/2c/5d/7a/2c5d7ab4ab48a6194afc6cb11dc3772e.jpg'
  },
  3: {
    text: 'Overcast',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Weather-overcast.svg/768px-Weather-overcast.svg.png',
    dayBg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZ7N_DZjIIv5qH0AJht-Jm7eLhFBJl1GvTg&s',
    nightBg: 'https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/cloudy-1869753_1920.jpg?w=900'
  },
  45: {
    text: 'Fog',
    dayIcon: 'https://assets.streamlinehq.com/image/private/w_200,h_200,ar_1/f_auto/v1/icons/6/sun-behind-small-cloud-color-hjx9b37wdd7d5iscssz1h6.png/sun-behind-small-cloud-color-rziop65fdqhdpaguqst5wv.png?_a=DAJFJtWIZAA0',
    nightIcon: 'https://img.freepik.com/premium-photo/yellow-moon-with-eyes-pink-heart-face_593294-22887.jpg',
    dayBg: 'https://media.istockphoto.com/id/1055906130/photo/foggy-rural-asphalt-highway-perspective-with-white-line-misty-road-road-with-traffic-and.webp?b=1&s=612x612&w=0&k=20&c=wMiUVSyfLzGa2jNG2uLc9ilc3oMfSmCUjDbPBf7hPsw=',
    nightBg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbACxuKS_QXqMehgS3lTHxx78tGqnxk7b7qA&s'
  },
  48: {
    text: 'Fog',
    dayIcon: 'https://assets.streamlinehq.com/image/private/w_200,h_200,ar_1/f_auto/v1/icons/6/sun-behind-small-cloud-color-hjx9b37wdd7d5iscssz1h6.png/sun-behind-small-cloud-color-rziop65fdqhdpaguqst5wv.png?_a=DAJFJtWIZAA0',
    nightIcon: 'https://img.freepik.com/premium-photo/yellow-moon-with-eyes-pink-heart-face_593294-22887.jpg',
    dayBg: 'https://media.istockphoto.com/id/1055906130/photo/foggy-rural-asphalt-highway-perspective-with-white-line-misty-road-road-with-traffic-and.webp?b=1&s=612x612&w=0&k=20&c=wMiUVSyfLzGa2jNG2uLc9ilc3oMfSmCUjDbPBf7hPsw=',
    nightBg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbACxuKS_QXqMehgS3lTHxx78tGqnxk7b7qA&s'
  },
  61: {
    text: 'Moderate Rain',
    dayIcon: 'https://static.vecteezy.com/system/resources/thumbnails/010/989/526/small_2x/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png',
    nightIcon: 'https://static.vecteezy.com/system/resources/previews/024/984/145/original/3d-weather-forecast-icons-night-with-moon-and-clouds-on-a-rainy-day-3d-illustration-png.png',
    dayBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg',
    nightBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg'
  },
  63: {
    text: 'Sight Rain',
    dayIcon: 'https://static.vecteezy.com/system/resources/thumbnails/010/989/526/small_2x/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png',
    nightIcon: 'https://static.vecteezy.com/system/resources/previews/024/984/145/original/3d-weather-forecast-icons-night-with-moon-and-clouds-on-a-rainy-day-3d-illustration-png.png',
    dayBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg',
    nightBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg'
  },
  65: {
    text: 'Heavy Rain',
    icon: 'https://cdn-icons-png.flaticon.com/512/4851/4851869.png',
    dayBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg',
    nightBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg'
  },
  71: {
    text: 'Snow Fall',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/015/271/859/small/3d-cloud-grey-3d-snow-weather-element-png.png',
    dayBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg',
    nightBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg'
  },
  72: {
    text: 'Snow Fall',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/015/271/859/small/3d-cloud-grey-3d-snow-weather-element-png.png',
    dayBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg',
    nightBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg'
  },
  75: {
    text: 'Snow Fall',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/015/271/859/small/3d-cloud-grey-3d-snow-weather-element-png.png',
    dayBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg',
    nightBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg'
  },
  77: {
    text: 'Snow Fall',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/015/271/859/small/3d-cloud-grey-3d-snow-weather-element-png.png',
    dayBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg',
    nightBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg'
  },
  85: {
    text: 'Snow Fall',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/015/271/859/small/3d-cloud-grey-3d-snow-weather-element-png.png',
    dayBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg',
    nightBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg'
  },
  86: {
    text: 'Snow Fall',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/015/271/859/small/3d-cloud-grey-3d-snow-weather-element-png.png',
    dayBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg',
    nightBg: 'https://static.vecteezy.com/system/resources/thumbnails/004/845/056/original/snow-falling-with-snowman-christmas-background-free-video.jpg'
  },
  95: {
    text: 'Heavy Rain',
    icon: 'https://cdn-icons-png.flaticon.com/512/4851/4851869.png',
    dayBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg',
    nightBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg'
  },
  96: {
    text: 'Heavy Rain',
    icon: 'https://cdn-icons-png.flaticon.com/512/4851/4851869.png',
    dayBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg',
    nightBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg'
  },
  99: {
    text: 'Heavy Rain',
    icon: 'https://cdn-icons-png.flaticon.com/512/4851/4851869.png',
    dayBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg',
    nightBg: 'https://img.freepik.com/free-vector/realistic-background-monsoon-season_23-2150428848.jpg'
  },
  11: {
    text: 'City not found',
    icon: 'https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-illustration-download-in-svg-png-gif-file-formats--zoom-logo-404-error-empty-pack-design-development-illustrations-6632131.png?f=webp',
    dayBg: 'https://www.shutterstock.com/image-vector/abstract-teal-background-blurred-turquoise-600nw-519613468.jpg',
    nightBg: 'https://www.shutterstock.com/image-vector/abstract-teal-background-blurred-turquoise-600nw-519613468.jpg'
  }
};

export const getWeatherInfo = (current) => {
  const config = weatherConfigs[current.weather_code] || weatherConfigs[0];
  const isDay = current.is_day === 1;

  return {
    weatherText: config.text,
    icon: config.icon || (isDay ? config.dayIcon : config.nightIcon),
    background: isDay ? config.dayBg : config.nightBg
  };
};
