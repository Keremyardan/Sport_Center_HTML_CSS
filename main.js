// classes section

document.addEventListener("DOMContentLoaded", () => {
    const classContent = document.querySelector('.class-content');

    const yogaFunc = () => {
        classContent.innerHTML = `
            <div class="class-text">
                <h4>Why yoga?</h4> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam reprehenderit atque quod labore ad autem harum, aliquam quidem similique assumenda? Laboriosam similique quo dolores laborum at nulla dignissimos corrupti.</p>
                <h4>When comes yoga your time?</h4> 
                <p>Saturday-Sunday: 8:00am-10:00am</p>
                <p>Monday-Tuesday: 10:00am-12:00am</p>
                <p>Wednesday-Friday: 3:00am-6:00am</p>
            </div>
            <img class="class-img" src="./images/yoga.jpg" alt="">
        `;
    };

    const groupFunc = () => {
        classContent.innerHTML = `
            <img class="class-img" src="./images/group.webp" alt="">
            <div class="class-text">
                <h4>Group classes</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam dolores, vitae dicta in harum molestias vel, dolor asperiores veritatis assumenda at accusamus neque repudiandae deserunt corporis incidunt, cupiditate a nemo perspiciatis exercitationem impedit aliquid veniam. Fuga sequi voluptas, quasi explicabo reprehenderit provident quo excepturi sapiente ex quae labore dolorem.</p>
                <p>Saturday-Sunday: 8:00am-10:00am</p>
                <p>Monday-Tuesday: 10:00am-12:00am</p>
                <p>Wednesday-Friday: 3:00am-6:00am</p>
            </div>
        `;
    };

    const soloFunc = () => {
        classContent.innerHTML = `
            <div class="class-text">
                <h4>Solo lessons</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Velit, ducimus sint hic corporis ipsam nobis.</p>
                <p>Eum ipsa possimus cum aspernatur vel ad.</p>
                <p>Quasi cupiditate, amet libero necessitatibus accusantium ex.</p>
                <p>Saturday-Sunday: 8:00am-10:00am</p>
                <p>Monday-Tuesday: 10:00am-12:00am</p>
                <p>Wednesday-Friday: 3:00am-6:00am</p>
            </div>
            <img class="class-img" src="./images/solo.jpg" alt="">
        `;
    };

    const stretchingFunc = () => {
        classContent.innerHTML = `
            
            <div class="class-text">
                <h4>Benefits of stretching exercises</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam!</p>
                <p>Ullam reiciendis debitis,  sint molestias praesentium earum odit?</p>
                <h4>Before and after exercise</h4> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas mollitia cumque illo saepe minima laborum recusandae porro obcaecati delectus amet!</p>
                <p>Saturday-Sunday: 8:00am-10:00am</p>
                <p>Monday-Tuesday: 10:00am-12:00am</p>
                <p>Wednesday-Friday: 3:00am-6:00am</p>
            </div>
            <img class="class-img" src="./images/stret.webp" alt="">
        `;
    };

    document.getElementById('yoga').addEventListener('click', yogaFunc);
    document.getElementById('group').addEventListener('click', groupFunc);
    document.getElementById('solo').addEventListener('click', soloFunc);
    document.getElementById('stretching').addEventListener('click', stretchingFunc);
});

let classBtn = document.querySelector('.class-btn');
classBtn.addEventListener('click', selectBtn);

function selectBtn (e) {
    const selectBtn = e.target;
    const btns = document.querySelectorAll('.class-btn button');

    btns.forEach(button => {
        button.classList.remove('selected');
    });

    selectBtn.classList.add('selected');

    if(selectBtn.id === 'yoga') {
        yogaFunc();
    }else if (selectBtn.id === 'group'){
        groupFunc();
    }else if (selectBtn.id === 'solo') {
        soloFunc();
    }else if (selectBtn.id === 'stretching') {
        stretchingFunc();
    }
}

// calculation functions for bmi calculator
const inputWeight = document.querySelector("#inputweight");
const inputHeight = document.querySelector("#inputheight");
const indicator = document.querySelector("#indicator");

inputHeight.addEventListener("keypress", (e) => {
    const key = e.key;
    if (key === "'Enter"){
        calculator();
    }
});

inputWeight.addEventListener("keypress", (e) => {
    const key = e.key;
    if (key === "Enter"){
        calculator();
    }
});

//calculator function

function calculator() {
    let weight = parseInt(inputWeight.value);
    let height = parseInt(inputHeight.value);

    if(weight && height && weight > 0 && height >100) {
        let result = weight / ((height/100)**2)

    // conditions below;

    if (result <= 18.5) {
        indicator.style.left = "16%";
    }else if (result > 18.5 && result <= 24.9) {
        indicator.style.left ="29%";
    }else if (result > 25 && result <= 29.9) {
        indicator.style.left ="47%";
    }else if (result > 30 && result <= 34.9){
        indicator.style.left ="62%"
    }else if (result >35 && result <= 39.9){
        indicator.style.left ="78%"
    }else if (result >39.9) {
        indicator.style.left ="85%"
    }
} else {
    alert('Enter a valid number')
}};

const trainerImg = document.getElementById('.trainers-gallery img');
const trainerBg = document.getElementById('.trainer-bg');
const trainerTexts = document.getElementById('.trainer-text');

trainerImg.forEach(img => {
    img.addEventListener('mouseenter', () => {
        const bg = img.closest('.trainer-1, .trainer-2, .trainer-3').querySelector('.trainer-bg');
        bg.style.clipPath = "polygon(0% 30%, 30% 30%, 30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%)";
        bg.style.width = "106%";
        bg.style.height = "106%";
    });

    img.addEventListener('mouseleave', () => {
        const bg = img.closest('.trainer-1, .trainer-2, .trainer-3').querySelector('.trainer-bg');
        bg.style.clipPath = "";
        bg.style.width = "";
        bg.style.height = "";
    });
});

trainerImg.forEach((img, index) => {
    img.addEventListener('mouseenter', () => {
        trainerTexts[index].style.opacity = "1";
    });

    img.addEventListener('mouseleave', () => {
        trainerTexts[index].style.opacity = "0";
    })
})