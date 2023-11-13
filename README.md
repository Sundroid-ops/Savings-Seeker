# Savings-Seeker's: Price Tracker bot🤖

Savings-seeker is a telegram bot who tracks user registered products on amazon and flipkart products. Use it to track your favourite products and get alerts for their price drop.

# Interface

![UI1](/assets/Interface(1).png)![UI2](/assets/Interface(2).png)



# Tech Stack(Backend)💻
![Express](https://camo.githubusercontent.com/ac7388d978891bfd6b5a6f594e506a61eaea7b335374fb5d1b0c0ceecd6080ed/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765)
![Mongodb](https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465)
![NodeJS](https://camo.githubusercontent.com/7a1f367d440cda34c18b31394e9c4aa5288c9f2cf0ca5f36e16c63f169327d40/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d2532333433383533442e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)
![Github](https://camo.githubusercontent.com/eefb62c383c56e3e8ef67aa5e2775008308b5ba6232e00edd535f451b7264cf3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465)

# Setting up the project locally⚙️

We are using `npm` as the package manager. So make sure you have it installed in your system.

## Installing Dependencies⏳

- Open the terminal and navigate to `Savings-Seeker` directory.
- type `npm install` to install all dependencies.
- Once the installation is done, you can start the bot by typing `npm start`.
- Projects uses `nodemon` for hot reloading.
- This should have made the **bot online** now.

## Setting up `.env`📃

You must create a `.env` file similar to **[.env.example](.env.example)** 

### Setting up `Telegram API` for `.env`

- Head to Telegram and search for `BotFather`.
- Follow around the instructions to get your API keys.

![BotFather](https://botifi.me/help/media/image_upload/2021/08/04/2021-08-04-234331.png)

### Setting up `Mongodb URL`

- Head to **[MongoDB Atlas](https://account.mongodb.com/account/login?n=%2Fv2&nextHash=%23org%2F651fa1030302051bf2d22712%2Fprojects)** and signup for cloud access for mongoDB cloud account.

- Create a `project` for your account.

- After creating a project, you must create a database to store data for this project. 

![cloud DB](https://www.freecodecamp.org/news/content/images/2022/05/image-120.png)

- Enter all your credentials for the project as required.

- After creating your database, you database should look like this after proper setup(Note this is just an example database).

![DB setup](https://www.mongodb.com/docs/atlas/images/atlas-ui-dbs-collections.png)

# Test Cases
Using `jest` to handle unit tests for the project. Run `npm test` to run unit tests.

# Need Help?
Contact me on [Twitter](https://twitter.com/lipundani05) or [Linkedin](https://www.linkedin.com/in/lipun-dani-5b8625236/).