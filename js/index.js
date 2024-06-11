const addToCartButtons = document.querySelectorAll('.game-card button');

// 添加事件监听器，在按钮被点击时执行函数
addToCartButtons.forEach(button => {
  // 检查按钮是否有 "已加入购物车" 的类名
  if (!button.classList.contains('added-to-cart')) {
    button.addEventListener('click', addToCart);
  }
});

// 加入购物车函数
function addToCart(event) {
  // 获取按钮上的数据属性
  const gameId = event.target.dataset.gameId;
  const gameName = event.target.dataset.gameName;
  const gamePrice = event.target.dataset.gamePrice;

  // 从 localStorage 获取购物车信息
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // 检查游戏是否已在购物车中
  let existingGame = cart.find(item => item.id === gameId);

  if (existingGame) {
    // 如果游戏已存在，直接返回
    alert(`${gameName} is already in your cart.  Do not add it again.`);
    return; // 直接返回，不再执行后面的代码
  } else {
    // 如果游戏不存在，添加到购物车
    cart.push({
      id: gameId,
      name: gameName,
      price: gamePrice,
      quantity: 1
    });
  }

  // 将购物车信息存储到 localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // 将按钮添加 "已加入购物车" 的类名，并修改文本
  event.target.classList.add('added-to-cart');
  event.target.textContent = 'Is adding your cart';

  // 显示提示信息
  alert(`${gameName} is adding your cart！`);
}


const gameCards = document.querySelectorAll('.game-card');



gameCards.forEach(gameCard => {
    gameCard.addEventListener('click', function(event) {
        const targetElement = event.target;

        if (targetElement.tagName === 'H3' || targetElement.tagName === 'IMG') {
            const gameId = this.dataset.gameId;

            // 使用 JavaScript 对象存储 YAML 数据
            const games = [
                {
                    id: 1,
                    name: 'Destiny 2',
                    description: "Destiny 2 is a free-to-play, massive multiplayer online action game set in an evolving world. You can play with your friends anytime, anywhere. Explore a vast solar system, master unique weapons and abilities, and become a legend in a world of action and adventure.",
                    image: "images/game/destiny2.png",
                    genre: "Action, MMO",
                    platforms: ["PC", "Xbox", "PlayStation"],
                    releaseDate: "2017-09-06",
                    developer: "Bungie"
                },
                {
                    "id": 2,
                    "name": "Monster Hunter: World",
                    "description": "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement. Track, fight, and carve your way to victory in a vast and vibrant ecosystem.",
                    "price": "29.99",
                    "image": "images/game/MonsterHunterWorld.png",
                    "genre": "Action, RPG",
                    "platforms": ["PC", "Xbox", "PlayStation"],
                    "releaseDate": "2018-01-26",
                    "developer": "Capcom"
                },
                {
                    "id": 3,
                    "name": "Red Dead Redemption 2",
                    "description": "Red Dead Redemption 2 is a sprawling epic tale of life in America’s unforgiving heartland. In a world on the brink of change, Arthur Morgan and the Van der Linde gang must survive in a rapidly shrinking space. Experience a rich and immersive world with captivating characters, breathtaking scenery, and a gripping story.",
                    "price": "39.99",
                    "image": "images/game/RedDeadRedemption2.png",
                    "genre": "Action, Adventure",
                    "platforms": ["PC", "Xbox", "PlayStation"],
                    "releaseDate": "2018-10-26",
                    "developer": "Rockstar Games"
                },
                {
                    "id": 4,
                    "name": "The Witcher 3: Wild Hunt",
                    "description": "Geralt of Rivia, a professional monster slayer, is caught in the crossfire of a war raging across the Northern Kingdoms. With vast open worlds to explore, you'll encounter powerful enemies and make choices that will forever shape the fate of the world. Immerse yourself in a rich and detailed world with captivating characters, thrilling quests, and a deep and engaging story.",
                    "price": "19.99",
                    "image": "images/game/TheWitcher3.png",
                    "genre": "RPG, Adventure",
                    "platforms": ["PC", "Xbox", "PlayStation", "Switch"],
                    "releaseDate": "2015-05-19",
                    "developer": "CD Projekt Red"
                },
                {
                    "id": 5,
                    "name": "Elden Ring",
                    "description": "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game is set in the Lands Between, a vast and interconnected world.  Explore a world filled with danger and wonder, and rise to become the Elden Lord in this challenging and rewarding experience.",
                    "price": "59.99",
                    "image": "images/game/EldenRing.png",
                    "genre": "Action, RPG",
                    "platforms": ["PC", "Xbox", "PlayStation"],
                    "releaseDate": "2022-02-25",
                    "developer": "FromSoftware"
                },
                {
                    "id": 6,
                    "name": "God of War",
                    "description": "God of War is an action-adventure game developed by Sony Santa Monica Studio and published by Sony Interactive Entertainment. The game is set in Norse mythology and follows the story of Kratos, the Greek god of war, as he attempts to atone for his past sins. Experience a brutal and emotional journey in a stunningly beautiful world.",
                    "price": "19.99",
                    "image": "images/game/GodOfWar.png",
                    "genre": "Action, Adventure",
                    "platforms": ["PlayStation"],
                    "releaseDate": "2018-04-20",
                    "developer": "Sony Santa Monica Studio"
                },
                {
                    "id": 7,
                    "name": "Horizon Zero Dawn",
                    "description": "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The game is set in a post-apocalyptic world where humanity has been overthrown by machines. Embark on an epic adventure to unravel the mysteries of a world overrun by mechanical beasts.",
                    "price": "29.99",
                    "image": "images/game/HorizonZeroDawn.png",
                    "genre": "Action, RPG",
                    "platforms": ["PlayStation"],
                    "releaseDate": "2017-02-28",
                    "developer": "Guerrilla Games"
                },
                {
                    "id": 8,
                    "name": "Grand Theft Auto V",
                    "description": "Grand Theft Auto V is an action-adventure game developed by Rockstar North and published by Rockstar Games. The game is set in the fictional state of San Andreas, based on Southern California. Experience a sprawling open world, a compelling story, and endless possibilities in this iconic action game.",
                    "price": "29.99",
                    "image": "images/game/GrandTheftAutoV.png",
                    "genre": "Action, Adventure",
                    "platforms": ["PC", "Xbox", "PlayStation"],
                    "releaseDate": "2013-09-17",
                    "developer": "Rockstar North"
                },
                {
                    "id": 9,
                    "name": "Cyberpunk 2077",
                    "description": "Cyberpunk 2077 is an action role-playing game developed and published by CD Projekt Red. The game is set in Night City, a fictional metropolis in the state of California. Immerse yourself in a neon-lit world of crime, technology, and human augmentation.",
                    "price": "39.99",
                    "image": "images/game/Cyberpunk2077.png",
                    "genre": "Action, RPG",
                    "platforms": ["PC", "Xbox", "PlayStation", "Stadia"],
                    "releaseDate": "2020-12-10",
                    "developer": "CD Projekt Red"
                },
                {
                    "id": 10,
                    "name": "Marvel’s Spider-Man Remastered",
                    "description": "Marvel’s Spider-Man Remastered is a superhero action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. The game is set in the Marvel Universe. Swing through the streets of New York City as the web-slinger in this critically acclaimed action game.",
                    "price": "19.99",
                    "image": "images/game/SpiderMan.png",
                    "genre": "Action, Adventure",
                    "platforms": ["PlayStation"],
                    "releaseDate": "2020-09-18",
                    "developer": "Insomniac Games"
                },
                {
                    "id": 11,
                    "name": "Ghost of Tsushima",
                    "description": "Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. The game is set on the Japanese island of Tsushima during the Mongol invasion of Japan. Choose your path: the honorable way of the samurai, or the stealthy way of the ghost.",
                    "price": "49.99",
                    "image": "images/game/GhostOfTsushima.png",
                    "genre": "Action, Adventure",
                    "platforms": ["PlayStation"],
                    "releaseDate": "2020-07-17",
                    "developer": "Sucker Punch Productions"
                },
                {
                    "id": 12,
                    "name": "Death Stranding",
                    "description": "Death Stranding is an action game developed and published by Kojima Productions. The game is set in a post-apocalyptic world where the United States has been divided into isolated regions. Connect the world one step at a time in this unique and unforgettable experience.",
                    "price": "39.99",
                    "image": "images/game/DeathStranding.png",
                    "genre": "Action, Adventure",
                    "platforms": ["PC", "PlayStation"],
                    "releaseDate": "2019-11-08",
                    "developer": "Kojima Productions"
                },
                {
                    "id": 13,
                    "name": "Stardew Valley",
                    "description": "Stardew Valley is a farming simulation video game developed by ConcernedApe. The game is set in a small town called Pelican Town, where the player inherits a run-down farm. Escape the hustle and bustle of city life and build a farm of your dreams in this charming and relaxing game.",
                    "price": "14.99",
                    "image": "images/game/StardewValley.png",
                    "genre": "Simulation, RPG",
                    "platforms": ["PC", "Xbox", "PlayStation", "Switch", "Mobile"],
                    "releaseDate": "2016-02-26",
                    "developer": "ConcernedApe"
                },
                {
                    "id": 14,
                    "name": "Hades",
                    "description": "Hades is a roguelike dungeon crawler developed and published by Supergiant Games. The game is set in the Underworld, where the player controls Zagreus, the son of Hades. Escape the Underworld and ascend to Mount Olympus in this challenging and rewarding roguelike.",
                    "price": "24.99",
                    "image": "images/game/Hades.png",
                    "genre": "Roguelike, Action",
                    "platforms": ["PC", "Switch", "Xbox", "PlayStation"],
                    "releaseDate": "2020-09-17",
                    "developer": "Supergiant Games"
                },
                {
                    "id": 15,
                    "name": "Hollow Knight",
                    "description": "Hollow Knight is a Metroidvania video game developed and published by Team Cherry. The game is set in the kingdom of Hallownest, which is being plagued by a mysterious infection. Explore a vast and interconnected world, fight challenging bosses, and uncover the secrets of Hallownest.",
                    "price": "14.99",
                    "image": "images/game/HollowKnight.png",
                    "genre": "Metroidvania, Action",
                    "platforms": ["PC", "Xbox", "PlayStation", "Switch"],
                    "releaseDate": "2017-06-24",
                    "developer": "Team Cherry"
                },
                {
                    "id": 16,
                    "name": "Celeste",
                    "description": "Celeste is a platformer video game developed by Matt Thorson and Noel Berry and published by Extremely OK Games. The game follows the story of Madeline, a young woman who is struggling to climb Mount Celeste.  Challenge yourself with difficult platforming levels and uncover a heartwarming story of overcoming challenges.",
                    "price": "19.99",
                    "image": "images/game/Celeste.png",
                    "genre": "Platformer, Indie",
                    "platforms": ["PC", "Xbox", "PlayStation", "Switch", "Mobile"],
                    "releaseDate": "2018-01-25",
                    "developer": "Matt Thorson and Noel Berry"
                },
                {
                    "id": 17,
                    "name": "Cuphead",
                    "description": "Cuphead is a run-and-gun video game developed and published by Studio MDHR. The game is inspired by 1930s cartoons and features a unique hand-drawn animation style. Test your skills in challenging boss battles inspired by classic cartoons.",
                    "price": "19.99",
                    "image": "images/game/Cuphead.png",
                    "genre": "Run and Gun, Action",
                    "platforms": ["PC", "Xbox", "Switch"],
                    "releaseDate": "2017-09-29",
                    "developer": "Studio MDHR"
                },
                {
                    "id": 18,
                    "name": "Undertale",
                    "description": "Undertale is a role-playing video game created by Toby Fox. The game is known for its unique combat system, where players can choose to fight or spare their enemies.  Experience a unique story and explore a world with memorable characters in this innovative RPG.",
                    "price": "9.99",
                    "image": "images/game/Undertale.png",
                    "genre": "RPG, Indie",
                    "platforms": ["PC", "PlayStation", "Switch"],
                    "releaseDate": "2015-09-15",
                    "developer": "Toby Fox"
                }
            ];
            const game = games.find(game => game.id == gameId);

            // 传递游戏信息到 product.html
            window.location.href = `product.html?gameId=${gameId}&gameName=${game.name}&gameDescription=${game.description}&gameImage=${game.image}`;
        }
    });

});