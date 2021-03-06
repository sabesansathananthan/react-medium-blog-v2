<h1 align='center'>React Medium Blog v2</h1>

<p align="center">
Aim of this project is embed Medium as a blog on your React website.
</p>
<img alt="UI" src="./docs/screenhot.png"  align='center'/>
<br />
<p align="center">
   <a href="https://github.com/sabesansathananthan/react-medium-blog-v2">
      <img alt="Framework: React" src="https://badges.aleen42.com/src/react.svg" />
    </a><a href="https://github.com/sabesansathananthan/react-medium-blog-v2/blob/main/.github/LICENSE">
      <img alt="licence" src="https://img.shields.io/github/license/sabesansathananthan/react-medium-blog-v2" />
    </a><a href="https://github.com/sabesansathananthan/react-medium-blog-v2">
      <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/sabesansathananthan/react-medium-blog-v2" />
    </a><a href="https://github.com/sabesansathananthan/react-medium-blog-v2">
      <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/sabesansathananthan/react-medium-blog-v2?color=ff69b4" />
    </a><a href="https://twitter.com/intent/tweet?text=Wow,%20I%20used%20React-medium-blog.%20That%20is%20excellent.%20Thank%20you%20@TheSabesan">
      <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTheSabesan" />
    </a>
      
</p>

## 🛠️ Built with

- [React JS](https://reactjs.org/) - Front-End JavaScript library
- [Material UI](https://material-ui.com/) - React UI Framework

## Installation

To setup the app for development on your local machine, please follow the instructions below:

1. Clone the repo to your machine

   ```bash
   git clone https://github.com/sabesansathananthan/react-medium-blog-v2.git
   cd React-Medium-Blog
   ```

2. Install packages

   If you use `npm`

   ```bash
   npm install
   ```

   or

   If you use `yarn`

   ```bash
   yarn
   ```

3. Change username

   Use your Medium username👤 instead of `Sabesan96`. in [App.js](./src/App.js)

   ```JavaScript
   const result = await axios(
        "https://advanced-medium-api.herokuapp.com/advanced/customized/user/sabesan96"
      );
   ```

4. Change active hours
   Active hours set as morning 5.00 am to night 8.00 pm. You could change the active hours in [card.js](./src/components/card.js). If your time zone is not Indian Standard Time IST Change the ISTOffset value.<br>
   Calculation for Finding Offset <br>
   For me it is IST. Therefore, +5:30. <br>
   Offset = +5 x 60 + 30

   ```JavaScript
   const ISTOffset = 330; // IST offset UTC +5:30 🕠
   const isOnline = ISTTime.getHours() >= 5 && ISTTime.getHours() <= 20;
   ```

5. Run the development server

   If you use `npm`

   ```bash
   npm start
   ```

   or

   If you use `yarn`

   ```bash
   yarn start
   ```

6. Visit <http://localhost:3000>
   <br />

## How does the category tag work?

**How can we choose a particular category tag among a medium post’s 5 category tags?**

I proposed a method for that. In a particular medium post which category tag was tagged the highest time in last 10 medium posts is suitable for that post.
<br />

## [Live Demo](https://react-medium-blog-v2.vercel.app/)

Don't forget to give a star :star: for this repo :slightly_smiling_face:

## Similar Projects

- [React-Medium-Blog](https://github.com/sabesansathananthan/React-Medium-Blog)
- [Material-UI-Medium-Blog](https://github.com/sabesansathananthan/material-ui-medium-blog)
- [React-Dev.to-Blog](https://github.com/sabesansathananthan/react-dev.to-blog)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./.github/LICENSE) file for details
