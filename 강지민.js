const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 }
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" }
};

function exampleOne(inputPrice, currency, basicData){
    if(typeof inputPrice !=="number"){
        console.log("숫자만 입력하시오.")
        return;
    }
    else{
        switch(inputPrice){
            case currency.thousand.value:
                console.log(currency.thousand.name+" 을 투입했습니다.");
                for(let i=0;i<basicData.length;i++){
                    if(currency.thousand.value>basicData[i].price){
                        console.log(basicData[i].name);
                    }
                }
                break;
            case currency.fiveThousand.value:
                console.log(currency.fiveThousand.name+" 을 투입했습니다.");
                for(let i=0;i<basicData.length;i++){
                    if(currency.fiveThousand.value>basicData[i].price){
                        console.log(basicData[i].name);
                    }
                }
                break;
            case currency.tenThousand.value:
                console.log(currency.tenThousand.name+" 을 투입했습니다.");
                for(let i=0;i<basicData.length;i++){
                    if(currency.tenThousand.value>basicData[i].price){
                        console.log(basicData[i].name);
                    }
                }
                break;
            case currency.fiveHundred.value:
                console.log(currency.fiveHundred.name+" 을 투입했습니다.");
                for(let i=0;i<basicData.length;i++){
                    if(currency.fiveHundred.value>basicData[i].price){
                        console.log(basicData[i].name);
                    }
                }
                break;
            case currency.hundred.value:
                console.log(currency.hundred.name+" 을 투입했습니다.")
                for(let i=0;i<basicData.length;i++){
                    if(currency.hundred.value>basicData[i].price){
                        console.log(basicData[i].name);
                    }
                }
                break;
        }
        let array1 = []
        for(let i=0;i<basicData.length;i++){
            array1.push(basicData[i].price)
        }
        if(inputPrice>Math.max(...array1)){
            console.log("당신은 부자입니다.")
        }
        else if(inputPrice<Math.min(...array1)){
            console.log("당신은 가난합니다.")
        }
    }
}
exampleOne(500,currency,basicData)