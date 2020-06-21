        // prog8 js cap1 ------------------------------------------------
        let length = 5;
        console.log(length);
        console.log(length * length * 3);


        let number = 2;
        console.log(number);

        number = number + 3;
        console.log(number);

        let number2 = 10;
        number2 = number2 + 10;
        number2 += 10;
        console.log(number2);

        const name = "にんじゃわんこ";
        console.log(`こんにちは、${name}さん`);
        console.log("こんにちは、"+ name + "さん");

        const number = 10;
        if (number > 10) {
            console.log("numberは10より大きいです");
        } else {
            console.log("numberは10より大きくないです");
        }

        console.log(number > 10);

        const number3 = 12;
        console.log(number3 === 12);

        const name3 = "John";
        console.log(name3 !== "John");



        const age = 17;

        if (age >= 20) {
            console.log("私は20歳以上です");
        } else {
            console.log("私は20歳未満です");
        }

        const number4 = 31;

        if (number4 >= 10 && number4 < 100) {
            console.log("numberは2桁です");
        }

        const color = "red";
        switch (color) {
            case "赤":
                console.log("STOP!");
                break;

            case "黃":
                console.log("要注意");
                break;

            default:
                console.log("colorの値が正しくありません");
                break;
        }

        // prog8 js cap2 ----------------------------------------------------


        console.log(1);
        console.log(2);
        console.log(3);

        let number = 1;
        console.log(number);

        number += 1;
        console.log(number);


        let number2 = 1; 
        while (number2 <= 100) {
            console.log(number2);
            number2 += 1;
        }

        for (let number3 = 1; number3 <= 100; number3 ++) {
            if(number3 % 3 === 0){
                console.log("3の倍数です");
            } else {
                console.log(number3);
            }
        }

        const fruits = ["apple", "banana", "Orange"];
        console.log(fruits);
        console.log(fruits.length);
        
        for(let i = 0; i < 3; i ++) {
            console.log(fruits[i]);
        }

        for(let i = 0; i < fruits.length ; i ++) {
            console.log(fruits[i]);
        }

        const book = "The long goodbye";
        console.log(book);

        const fruits = ["apple", "banana", "Orange"];
        console.log(fruits);

        const item = {name: "手裏剣", price: 300};
        console.log(item);
        console.log(item.name);



        const items = [
            {name: "撒菱", price: 200},
            {name: "忍者刀", price: 1200} 
        ];
        console.log(items[1].price);


        const characters = [
            {name: "にんじゃわんこ", age: 14},
            {name: "ひつじ仙人", age: 1000},
            {name: "ベイビーわんこ", age: 5},
            {name: "とりずきん"}
        ];

        for(let i = 0; i < characters.length; i++){

            const character = characters[i];
            console.log("=================");
            console.log(`名前は${character.name}です`);

            if(character.age === undefined) {
                console.log("年齢は秘密です");
            } else {
                console.log(`${character.age}歳です`);
            }
        }

        const cafe = {
            name: "Progateカフェ",
            businessHours: {
                // businessHoursの値に指定されたオブジェクトを代入してください
                opening: "10:00(AM)",
                closing: "8:00(PM)",
            },
            menus:["コーヒー","紅茶","チョコレートケーキ"]
        };

        // 「店名:〇〇」を出力してください
        console.log(`店名:${cafe.name}`);

        // 「営業時間:〇〇から△△」を出力してください
        console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
        console.log(`----------------------------`);
        console.log("おすすめメニューはこちら");
        
        for(let i = 0; i < cafe.menus.length; i++){
            console.log(cafe.menus[i]);
        }


        // prog8 js cap3 -------------------------------------------
        const add = (number1, number2) => {
            console.log(number1 + number2);
        }
        add(5,7)



        const add2 = (number3, number4) => {
            return number3 + number4;
        };

            const sum2 = add2(1,3);
            console.log(`${sum2}です`);




        const half = (number) => {
            return number / 2;
        };
            const result = half(130);
            console.log(`130の半分は${result}です`);


        const half2 = (number0) => {
            console.log(`130の半分は${number0 / 2}です`);
        };
            half2(130);
        

        
        // scope
        const name = "にんじゃわんこ"

        const introduce = (name) =>  {
            console.log(`私は${name}です`);
        }

        introduce("ひつじ仙人");
        introduce("にんじゃわんこ");
        console.log(name);
        
        const greet = () => {
            console.log("こんにちは！");
        }
        greet();



        // prog8 js cap4 -----------------------------------------

        const greet0 = () => {
            console.log("こんにちは");
        }
        greet0();
        
        const user = {
            name: "にんじゃわんこ",
            age: 14,
            greet: () =>  {
            console.log("おはよう");
            }
        };

        console.log(user.age);
        user.greet();


        class Animal0 {
            constructor() {
                this.name0 = "れお";
                this.age0 = 5;
            }
        }

        const animal0 = new Animal0();
        console.log(animal0.name0);
        console.log(animal0.age0);


         
        class Animal {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log("こんにちは");
            }

            info() {
                this.greet();
                console.log(`名前は${this.name}です`);
                console.log(`${this.age}歳です`);
            }
        }


        class Dog extends Animal {
            constructor(name, age, breed) {
                super(name, age);

                this.breed = breed;
                
                this.name = name;
                this.age = age;
            }


            
            getHumanAge() {
                return this.age * 7;
            }

            info() {
                this.greet();
                console.log(`名前は${this.name}です`);
                console.log(`${this.age}歳です`);
                const humanAge = this.getHumanAge();
                console.log(`人間年齢で${humanAge}歳です`);
            }
        }

        const dog = new Dog("レオ", 4);
        dog.info();



        
