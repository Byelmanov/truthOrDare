'use scrict';
let arrayOfTrue = [
    'Кого из этого круга ты считаешь самым близким?',
    'Что тебя раздражает в девушках?',
    'Что тебя раздражает в парнях?',
    'Что сделаешь, если подруга / друг скажет, что ей / ему нравится твоя вторая половина?',
    'Есть ли у тебя комплексы?',
    'Поцеловал бы человека, сидящего напротив?',
    'За что тебе очень стыдно в своей жизни?',
    'Какие качества тебе не нравятся в человеке слева?',
    'Расскажи о худшем свидании, на которое ты когда-либо ходил.',
    'Если бы пришлось целоваться с парнем / девушкой из университета / с работы, кого бы выбрал?',
    'Парню: Встречался с девушкой, которая старше тебя?\nДевушке: Встречалась с парнем, который старше тебя как минимум на 10 лет?',
    'Парню: Сколько сантиметров у тебя член?\nДевушке: Какого размера у тебя грудь?',
    'У тебя была безответная любовь?',
    'Что тебя больше всего возбуждает?',
    'Расскажи, к кому испытываешь чувства в данный момент.',
    'Если бы мог / могла изменить одну вещь в своем теле или внешности, чтобы это было?',
    'С кем был твой первый поцелуй? Тебе понравилось?',
    'Парню: Самое сексуальное в девушке?\nДевушке: Самое сексуальное в парне?',
    'Парню: Что бы сделал, если бы на один день стал девушкой?\nДевушке: Что бы сделала, если бы на один день стала парнем?',
    'Тебе пришлось отправиться на необитаемый остров. Назови пять вещей, которые возьмешь с собой?',
    'Парню: Если девушка будет выше тебя, это создаст препятствия вашим отношениям?\nДевушке: Если молодой человек будет ниже тебя, это создаст препятствия вашим отношениям?',
    'Парню: Лучший друг говорит, что влюбился в твою девушку. Что будешь делать?\nДевушке: Лучшая подруга говорит, что влюбилась в твоего парня. Что будешь делать?',
    'Назови одну вещь, которую хотел бы изменить в себе?',
    'Ты выиграл путешествие и разрешено с собой взять двух человек. Кто они?',
    'Какова твоя самая смелая фантазия?',
    'Изменял ли ты своей второй половинке?',
    'Твое самое нелюбимое занятие?',
    'Носишь ли ты чулки?',
    'Любишь ли ты алкогольные напитки?',
    'Парню: Смог бы ты выйти замуж за человека, который старше тебя на 20 лет, но богат?\nДевушке: Смогла бы ты выйти замуж за человека, который старше тебя на 20 лет, но богат?',
    'Расскажи о своем первом сексуальном опыте.',
    'Ответь только «да» или «нет». Ты уже перестал пить коньяк по утрам?',
    'Когда ты первый раз мастурбировал?',
    'Нравятся ли тебе представители твоего пола?',
    'Сколько партнеров у тебя было за всю жизнь?',
    'Максимальное количество партнеров, которые были одновременно?',
    'Нравятся ли тебе ролевые игры?',
    'Если бы тебя застали в постели с партнером друга, подруги, как бы ты себя повел?',
    'Смог бы ты зарабатывать телом, если бы у тебя вообще не было денег?',
    'Снимал ли ты секс на видео?',
    'Занимался ли любовью в общественном месте?',
    'Кому лучше проявлять в сексе инициативу, мужчине или женщине?',
    'Какое время суток для интимной близости ты предпочитаешь?',
    'Как часто смотришь порно?',
    'Был ли у тебя любовный опыт, который оказался неприятен?',
    'Жалел ли ты о сексе, который произошел во время алкогольного опьянения?',
    'В каком самом странном месте у тебя был секс?',
    'Где у тебя последний раз был секс?',
    'С кем из знаменитостей ты бы переспал?',

];
let arrayOfAction = [
    'Напиши 3 комментария первому знакомому в ленте Инстаграмма.',
    'Станцуй и спой песню “What is love”.',
    'Выпей рюмку спиртного.',
    'Сядь на колени человека справа и попрыгай 10 раз.',
    'Сними зубами футболку любого из играющих.',
    'Притворись котом. Мяукай и мурчи. Трись об играющих.',
    'Обменяйся брюками с человеком, который сидит рядом с тобой.',
    'Сходи (в белье или без него) в душ с человеком, у которого выиграешь в “Камень, ножницы, бумага”.',
    'Разденься до нижнего белья и в таком виде оставайся до конца игры.',
    'Станцуй стриптиз на протяжении минуты.',
    'Страстно поцелуй человека противоположного пола из вашей компании',
    'Станцуй под свою любимую песню как можно более эмоционально',
    'Выпей рюмку спиртного.',
    'Покажи танец живота',
    'Нарисуй монобровь на своем лице',
    'Изображай все, что тебе скажет игрок слева на протяжении нескольких минут.',
    'Съешь ломтик лимона и не скривись при этом (у игрока не должно быть проблем с желудком; если нет лимона, можно предложить острый перец, кетчуп, щепотку соли).',
    'Изобрази петушка, хлопая крыльями и кукарекая.',
    'Выпей стакан воды залпом, не отрываясь.',
    'Присядь на корточки и пройди по комнате туда-обратно 5 раз.',
    'Накорми трех участников из чайной ложечки с завязанными глазами.',
    'Красиво избавьтесь от одной вещи на себе.',
    'Передай кусочек апельсина (яблока) губами в губы другого участника.',
    'Изобрази свою любимую позу в сексе.',
    'Расстегни бюстгальтер девушке справа.',
    'Сделай массаж головы игроку напротив.',
    '5 раз поцелуй шею игроку напротив.',
    'Парню: сделай макияж тому, у кого выиграешь в “Камень, ножницы, бумага”.\nДевушке: пусть тебе сделаешь макияж парень, у которого ты выиграешь в “Камень, ножницы, бумага”.',
    'Выпей рюмку спиртного.',
    'Положи нарезанный фрукт на живот человека слева. Съешь фрукт, не используя руки.',
    'Станцуй твёрк.',
    'Сделай дорожку из поцелуев на ноге того, кто выполнял задание перед тобой.',
    'Прикуси губу человека напротив.',
    'Выпей рюмку спиртного не используя руки.',
    'Позвони последнему из списка недавних звонков. Узнай погоду на завтра.',
    'Поцелуй голые ягодицы человека слева.',
    'Вместе с самым высоким человеком в компании изобразите любую позу из Камасутры. Дополните это стонами.',
    'Спусти штаны и проползи по комнате с голой жопой. ',
    'Позвони в доставку пиццы. Спроси у оператора, когда он пойдет спать.',
    'Посади на стул человека слева и станцуй приватный танец под музыку, которую выберет игрок справа.',
    'Включи первое попавшееся порно и все вместе смотрите его 2 минуты.',
    'Оближи участника справа за мочку уха.',
    'Выпей алкоголь из пупка участника, который выполнял задание до этого.',
    'Постройте пирамиду из тел всех участников. Сфотографируйтесь. Тот, кому выпало задание, пусть выложит фотографию к себе в историю.',
    'Выпей рюмку спиртного.',
    'Пусть игрок напротив сядет к вам на колени, повернувшись к вам лицом. Обнимитесь руками и ногами. Сидите так 3 минуты.',
    'Изобразите позу 69 с игроком, который выполнял задание перед вами.',
    'Разденьтесь до белья и сидите так 20 минут.',
    'Наберите в рот воды и  обрызгайте одного их игроков на ваше усмотрение.',
    'Станьте в позу собачки. Пусть игрок справа ляжет на вас. Прокатите его верхом.',
    'Пусть тебе завяжут глаза. Открой рот. Любой из участников на свое усмотрение может положить что-либо тебе в рот.',
    'Пусть тебе завяжут глаза. Остальные участники должны выстроиться в ряд. На ощупь определи имя каждого из участников.',
    'Выпей рюмку спиртного.',
    'Сними зубами штаны любого из играющих.',
    'На ощупь определи размер груди девушки слева.',
    'Пусть на тебе наденет ошейник участник, которому ты проиграешь в “Камень, ножницы, бумага”. Выполняй все команды, которые тебе скажут.',
    'Укуси голые ягодицы человека справа.',
    'Полостью поменяйся одеждой с человеком противоположного пола, который выполнял задание до этого.',
    'Выпей на брудершафт с участником напротив.',
    'Представь, что ты художник, а игрок справа - твоя натурщица. Пусть натурщица позирует для тебя, пока ты ее рисуешь.',
    'Пусть каждый из игроков шлепнет тебя по попе.',
    'Используй игрока напротив как шест, танцуя стриптиз.',
];
let numberOfPlayers;
let namesOfPlayers = [];
let error = true;
actionCounter = arrayOfAction.length - 1;
trueCounter = arrayOfTrue.length - 1;

let random = (min, max) => {
    if (min < max) {
        return Math.floor(Math.random() * (++max - min) + min);
    } else {
        return Math.floor(Math.random() * (++min - max) + max);
    }

}
let ucFirstLetter = str => str.charAt(0).toUpperCase() + str.substr(1);

function oneMove(randomPlayer, spinTo) {
    document.getElementById('chooseText').innerText = ((namesOfPlayers[randomPlayer]).toUpperCase() + (', выберите').toUpperCase());
    $('#modalChoose').css('display', 'block');
    document.getElementById('modalChoose_skip').onclick = function () {
        $('#modalChoose').hide();
        let currentPos = $('.arrow').getRotateAngle();
        let angleTospin = currentPos[0] + (1080 - spinTo);
        $('.arrow').rotate({
            animateTo: angleTospin,
            duration: 500,
            callback: function () {
                return
            }
        });
        $('#circle__name' + (randomPlayer + 1)).css({ 'background': '#05C3DE' });
        return;
    }
    document.getElementById('action').onclick = function () {
        $('#modalChoose').hide();
        $('#card').show();
        document.getElementById('card__heading').innerText = "действие";
        let randomNumberAction = random(0, actionCounter);
        document.getElementById('card__task').innerText = (arrayOfAction[randomNumberAction]);
        addToEndOfArr(arrayOfAction, randomNumberAction);
        actionCounter--;
        actionCounter = actionCounter == -1 ? arrayOfAction.length - 1 : actionCounter;
        return;

    }
    document.getElementById('true').onclick = function () {
        $('#modalChoose').hide();
        $('#card').show();
        document.getElementById('card__heading').innerText = "правда";
        let randomNumberTrue = random(0, trueCounter);
        document.getElementById('card__task').innerText = (arrayOfTrue[randomNumberTrue]);
        addToEndOfArr(arrayOfTrue, randomNumberTrue);
        trueCounter--;
        trueCounter = trueCounter == -1 ? arrayOfTrue.length - 1 : trueCounter;
        return;
    }
    document.getElementById('done').onclick = function () {
        $('#card').hide();
        let currentPos = $('.arrow').getRotateAngle();
        let angleTospin = currentPos[0] + (1080 - spinTo);
        $('.arrow').rotate({
            animateTo: angleTospin,
            duration: 500,
            callback: function () {
                return
            }
        });
        $('#circle__name' + (randomPlayer + 1)).css({ 'background': '#05C3DE' });
        return;
    }


}

function addToEndOfArr(array, index) {
    let element = array.splice(index, 1);
    array.push(element[0]);
}

document.getElementById('headerOkay').onclick = function () {
    $('header').hide();
    $('#playersSection').show();
}

document.getElementById("playerUp").onclick = function () {
    let numberOfPlayers = parseInt(document.getElementById("numberOfPlayers").innerText);
    if (numberOfPlayers == 8) {
        document.getElementById("message__max").style.display = "block";
        $("#message__max").fadeOut(5000);
        return;
    } else {
        document.getElementById("numberOfPlayers").innerText = ++numberOfPlayers;
        return;
    }
}

document.getElementById("playerDown").onclick = function () {
    let numberOfPlayers = parseInt(document.getElementById("numberOfPlayers").innerText);
    if (numberOfPlayers == 2) {
        document.getElementById("message__min").style.display = "block";
        $("#message__min").fadeOut(5000);
        return;
    } else {
        document.getElementById("numberOfPlayers").innerText = --numberOfPlayers;
        return;
    }
}

document.getElementById('playersFurther').onclick = function () {
    numberOfPlayers = parseInt(document.getElementById("numberOfPlayers").innerText);

    for (let i = 1, x = 0; i <= numberOfPlayers; i++ , x += 360 / numberOfPlayers) {
        $('#circle' + i).css({
            'transform': function () { return 'rotate(' + x + 'deg)'; },
            'display': 'block'
        });
    }

    $('#circle__names').addClass('circle__names--' + numberOfPlayers);

    $('#playersSection').hide();


    for (let i = 2; i <= numberOfPlayers; i++) {
        $('#names__fieldItem' + i).css({ 'display': 'flex' });
    }
    $('#namesSection').show();
}

document.getElementById('namesFurther').onclick = function () {
    let error = false;
    for (let i = 1; i <= numberOfPlayers; i++) {
        let value = document.querySelector('#nameInput' + i).value;
        if (value == '' || value == null || value == undefined) {
            document.getElementById('namesError').style.display = 'block';
            error = true;
            return;
        } else {
            namesOfPlayers[i - 1] = value;
        }
    }
    if (!error) {
        $('#namesSection').hide();
        for (let i = 0; i < numberOfPlayers; i++) {
            document.getElementById('circle__name' + (i + 1)).innerText = namesOfPlayers[i];
            $('#circle__name' + (i + 1)).css({ 'display': 'block' });
        }
        $('.playArea').show();
    }
}





document.getElementById('playButton').onclick = function () {
    let randomPlayer = random(0, namesOfPlayers.length - 1);
    let randomPart = random(0, (360 / numberOfPlayers));
    let spinTo = 720 + (randomPlayer * 360 / numberOfPlayers) + randomPart;
    $('.arrow').rotate({
        angle: 0,
        animateTo: spinTo,
        duration: 4000,
        callback: function () {
            $('#circle__name' + (randomPlayer + 1)).css({ 'background': '#ff5c39' })
            oneMove(randomPlayer, spinTo);
        }
    });
}
document.getElementById('exit').addEventListener('click', function () {
    location.reload();
});
document.getElementById('playersExit').addEventListener('click', function () {
    location.reload();
});
document.getElementById('nameExit').addEventListener('click', function () {
    location.reload();
})


