
// POBIERANIE PRZYCISK
document.getElementById("przelicz").addEventListener("click",pobierz);    

function pobierz(){
let ilosc = document.getElementById("kaska").value;
let przeliczz = document.getElementById("przeliczz").value;
let przeliczna = document.getElementById("przeliczna").value;
let przeliczone;

// POBIERANIE WARTOŚCI WALUT Z API

        function get_value(a){
            let value;
            let b=a;
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            if(day<10){
                day="0"+day;
            }

            let data=year+"-"+month+"-"+day;
            let url='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/'+data+'/currencies/pln.json';
            
            $.ajax({
                url: url,
                async:false,
                success: function(response){
                    let all=response.pln;
                    value=all[b];
                }
            })
            return value;
        }

// USTALENIE WARTOŚCI WALUT Z PLN  

        let waluty={
            "eur": get_value('eur'),
            "pln": get_value('pln'),
            "usd": get_value('usd'),
            "gbp": get_value('gbp'),
            "mdl": get_value('mdl'),
            "huf": get_value('huf'),
            "rub": get_value('rub'),
        }
//  PRZELICZ Z      
        let value=waluty[document.getElementById("przeliczz").value]; // czego szukamy

//  PRZELICZ NA      
        let value2=waluty[document.getElementById("przeliczna").value]; // czego szukamy

// KAŻDA WALUTA
        if(true) 
        {
            przeliczone=ilosc/value*value2;
            przeliczone=String(Math.round(przeliczone*100)/100)+" "+przeliczna;
        }

// WYPISYWANIE
        document.getElementById("wynik").innerHTML = przeliczone;
        }