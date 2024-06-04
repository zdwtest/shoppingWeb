// 获取所有 "加入购物车" 按钮
const addToCartButtons = document.querySelectorAll('.game-card button');

// 添加事件监听器，在按钮被点击时执行函数
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
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
        // 如果游戏已存在，增加数量
        existingGame.quantity++;
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

    // 显示提示信息
    alert(`${gameName} 已加入购物车！`);
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
                    description: "Destiny 2 is a free-to-play, massive multiplayer online action game set in an evolving world. You can play with your friends anytime, anywhere.",
                    image: "images/game/destiny2.png"
                },
                {
                    "id": 2,
                    "name": "Monster Hunter: World",
                    "description": "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
                    "price": "29.99",
                    "image": "images/game/MonsterHunterWorld.png"
                },
                {
                    "id": 3,
                    "name": "Red Dead Redemption 2",
                    "description": "Red Dead Redemption 2 is a sprawling epic tale of life in America’s unforgiving heartland. In a world on the brink of change, Arthur Morgan and the Van der Linde gang must survive in a rapidly shrinking space.",
                    "price": "39.99",
                    "image": "images/game/RedDeadRedemption2.png"
                },
                {
                    "id": 4,
                    "name": "The Witcher 3: Wild Hunt",
                    "description": "Geralt of Rivia, a professional monster slayer, is caught in the crossfire of a war raging across the Northern Kingdoms. With vast open worlds to explore, you'll encounter powerful enemies and make choices that will forever shape the fate of the world.",
                    "price": "19.99",
                    "image": "images/game/TheWitcher3.png"
                },
                {
                    "id": 5,
                    "name": "Elden Ring",
                    "description": "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game is set in the Lands Between, a vast and interconnected world.",
                    "price": "59.99",
                    "image": "images/game/EldenRing.png"
                },
                {
                    "id": 6,
                    "name": "God of War",
                    "description": "God of War is an action-adventure game developed by Sony Santa Monica Studio and published by Sony Interactive Entertainment. The game is set in Norse mythology and follows the story of Kratos, the Greek god of war, as he attempts to atone for his past sins.",
                    "price": "19.99",
                    "image": "images/game/GodOfWar.png"
                },
                {
                    "id": 7,
                    "name": "Horizon Zero Dawn",
                    "description": "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The game is set in a post-apocalyptic world where humanity has been overthrown by machines.",
                    "price": "29.99",
                    "image": "images/game/HorizonZeroDawn.png"
                },
                {
                    "id": 8,
                    "name": "Grand Theft Auto V",
                    "description": "Grand Theft Auto V is an action-adventure game developed by Rockstar North and published by Rockstar Games. The game is set in the fictional state of San Andreas, based on Southern California.",
                    "price": "29.99",
                    "image": "images/game/GrandTheftAutoV.png"
                },
                {
                    "id": 9,
                    "name": "Cyberpunk 2077",
                    "description": "Cyberpunk 2077 is an action role-playing game developed and published by CD Projekt Red. The game is set in Night City, a fictional metropolis in the state of California.",
                    "price": "39.99",
                    "image": "images/game/Cyberpunk2077.png"
                },
                {
                    "id": 10,
                    "name": "Marvel’s Spider-Man Remastered",
                    "description": "Marvel’s Spider-Man Remastered is a superhero action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. The game is set in the Marvel Universe.",
                    "price": "19.99",
                    "image": "images/game/SpiderMan.png"
                },
                {
                    "id": 11,
                    "name": "Ghost of Tsushima",
                    "description": "Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. The game is set on the Japanese island of Tsushima during the Mongol invasion of Japan.",
                    "price": "49.99",
                    "image": "images/game/GhostOfTsushima.png"
                },
                {
                    "id": 12,
                    "name": "Death Stranding",
                    "description": "Death Stranding is an action game developed and published by Kojima Productions. The game is set in a post-apocalyptic world where the United States has been divided into isolated regions.",
                    "price": "39.99",
                    "image": "images/game/DeathStranding.png"
                },
                {
                    "id": 13,
                    "name": "Stardew Valley",
                    "description": "Stardew Valley is a farming simulation video game developed by ConcernedApe. The game is set in a small town called Pelican Town, where the player inherits a run-down farm.",
                    "price": "14.99",
                    "image": "images/game/StardewValley.png"
                },
                {
                    "id": 14,
                    "name": "Hades",
                    "description": "Hades is a roguelike dungeon crawler developed and published by Supergiant Games. The game is set in the Underworld, where the player controls Zagreus, the son of Hades.",
                    "price": "24.99",
                    "image": "images/game/Hades.png"
                },
                {
                    "id": 15,
                    "name": "Hollow Knight",
                    "description": "Hollow Knight is a Metroidvania video game developed and published by Team Cherry. The game is set in the kingdom of Hallownest, which is being plagued by a mysterious infection.",
                    "price": "14.99",
                    "image": "images/game/HollowKnight.png"
                },
                {
                    "id": 16,
                    "name": "Celeste",
                    "description": "Celeste is a platformer video game developed by Matt Thorson and Noel Berry and published by Extremely OK Games. The game follows the story of Madeline, a young woman who is struggling to climb Mount Celeste.",
                    "price": "19.99",
                    "image": "images/game/Celeste.png"
                },
                {
                    "id": 17,
                    "name": "Cuphead",
                    "description": "Cuphead is a run-and-gun video game developed and published by Studio MDHR. The game is inspired by 1930s cartoons and features a unique hand-drawn animation style.",
                    "price": "19.99",
                    "image": "images/game/Cuphead.png"
                },
                {
                    "id": 18,
                    "name": "Undertale",
                    "description": "Undertale is a role-playing video game created by Toby Fox. The game is known for its unique combat system, where players can choose to fight or spare their enemies.",
                    "price": "9.99",
                    "image": "images/game/Undertale.png"
                }
            ];

            const game = games.find(game => game.id == gameId);

            // 传递游戏信息到 product.html
            window.location.href = `product.html?gameId=${gameId}&gameName=${game.name}&gameDescription=${game.description}&gameImage=${game.image}`;
        }
    });
});