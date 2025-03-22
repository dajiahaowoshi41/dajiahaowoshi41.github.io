document.getElementById('start-btn').addEventListener('click', startGame);

function sayHello() {
  var userName = prompt("您好，尊姓大名？");
  if (userName) {
        alert("欢迎光临，" + userName + "。");
        document.getElementById('welcome-text').innerText =
            "欢迎光临（刚刚装修好的）八苦居事务所线上平台！尊敬的 " + userName + "！";
    }
  else {
        alert("欢迎光临！");
        document.getElementById('welcome-text').innerText =
            "欢迎光临（刚刚装修好的）八苦居事务所线上平台！";
    }
}
sayHello();

function startGame() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderScene();
}

let currentScene = 0;

const scenes = [
    {
        text: "你找到了网址留下的电话。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "拨通电话", nextScene: 1 },
            { text: "算了吧", nextScene: 2 }
        ]
    },
    {
        text: "“嘟——嘟——嘟——”，漫长的忙音，要继续等吗？",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "打都打了，等会儿吧", nextScene: 3 },
            { text: "不接就算了，我再联系别人吧", nextScene: 4 }
        ]
    },
    {
        text: "算了吧，总感觉没什么好事。还是别打了。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "就这样吧。", nextScene: 0 },
            { text: "要不还是打一个试试吧", nextScene: 1 }
        ]
    },
    {
        text: "又是一阵忙音过去，电话被接通了。在接通的时候对面似乎有人轻咳了一声，随后便是死一般的寂静。",
        name: "  ",
        avatar: "avatar1.png",
        choices: [
            { text: "？对面为什么不说话？", nextScene: 5 },
            { text: "哦哦我懂了是那个吧！", nextScene: 8 }
        ]
    },
    {
        text: "你挂断了电话。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "就这样吧。", nextScene: 0 },
            { text: "再打一次吧，有点好奇。", nextScene: 1 }
        ]
    },
    {
        text: "突然你听到一阵杂音，那人似乎拿开了话筒。“你看我都说了，一个时辰内必有闲杂人等给我打电话——”声音又由小变大，“您好啊，这里是八苦居，请问有什么可以帮您的？”",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "来都来了那就聊聊吧。", nextScene: 6 },
            { text: "说谁闲杂人等呢？有没有点礼貌？", nextScene: 7 }
        ]
    },
    {
        text: "你开始咨询对面的店内业务，结果聊着聊着话题就天马行空起来了。对面的声音听起来非常年轻，但博学到一种诡异的程度。估计他也是闲得无聊，不管你提到什么都会热情地唠上好半天，太可怕了这个人。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "继续", nextScene: 9 }
        ]
    },
    {
        text: "“哎呀不好意思，没在说您，有什么事情吗？”对面这样说道。你有点恼火。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "挂断电话", nextScene: 0 }
        ]
    },
    {
        text: " ",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "“42”", nextScene: 5 },
            { text: "“福来祸走，千秋太平。”", nextScene: 10 }
        ]
    },
    {
        text: "不知道聊了多久，你终于挂断了电话。长舒一口气。你有点好奇这位店长了。可当你退回主页，发现并没有具体地址。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "结束", nextScene: 0 }
        ]
    },
    {
        text: "“……唉。”你听见一声叹息。“明天中午十二点，我们见面聊。”对面随即挂断了电话。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "结束", nextScene: 0 }
        ]
    }
    ];


function endGame() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
}

function renderScene() {
    const scene = scenes[currentScene];

    document.getElementById('character-name').innerText = scene.name;
    document.getElementById('character-avatar').src = scene.avatar;

    document.getElementById('dialogue-text').innerText = scene.text;

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';


    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.className = 'choice-btn';
        button.onclick = () => {
            if (choice.nextScene === 0) {
                endGame();
            } else {
                currentScene = choice.nextScene;
                renderScene();
            }
        };
        choicesContainer.appendChild(button);
    });
}
