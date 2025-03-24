document.getElementById('start-btn').addEventListener('click', startGame);

window.onload = function () {
    alert("作为一名受雇于《俗世奇闻》栏目的记者。你们专注于收集各种奇闻逸事。近日你在海角论坛刷到了一篇“盘一盘国内神秘老店”的帖子，你决定对楼主语焉不详的“八苦居”进行采访。与其登记在册的资料不同，据说这家店里接人待物全由两个会动的纸人负责，店主更是神龙见首不见尾。根据那帖子给出的网址，你来到了这个界面。");
};

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
        text: "突然你听到一阵杂音，那人似乎拿开了话筒。“你看我都说了，一个时辰内必有闲杂人等给我打电话——”声音又由小变大，“您好啊，这里是八苦居，请问有什么可以帮您的？”背景隐隐传来其他人的说话声。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "您好，我是线上栏目“俗世奇闻”的记者，想对您进行一个简短的采访。", nextScene: 6 },
            { text: "（居然意料之外地正常啊，要不算了吧。）", nextScene: 7 }
        ]
    },
    {
        text: "出人意料的是对面同意得非常爽快，于是你开始采访。不知道聊了多久，你终于挂断了电话。长舒一口气。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "继续", nextScene: 9 }
        ]
    },
    {
        text: "“您好？您好？”听着对面的声音，你突然打了一个冷颤。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "不好意思，我打错了。", nextScene: 0 }
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
        text: "对面实在是打太极的高手，一些基础信息之外的话头都被他滴水不漏地引向别处。这么长的采访时间你居然只问到了网上随便一搜都能搜到的信息，最后甚至聊到了蝴蝶兰怎么养。你决定改日登门拜访。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "可当你退回主页，发现并没有店铺的具体地址。", nextScene: 0 }
        ]
    },
    {
        text: "“滴————”一阵电子音过后，传来（似乎是预置的）机器人的声音。“已为您预约明日中午12时的时间段，预祝您得偿所愿。”。",
        name: " ",
        avatar: "avatar1.png",
        choices: [
            { text: "“好的。”", nextScene: 0 }
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
