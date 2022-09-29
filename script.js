
// POBIERANIE WARTOŚCI WALUT Z API

        function get_value(a){
            let value;
            let b=a;
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let data=year+"-"+month+"-"+day;
            
            $.ajax({
                //url:'https://api.apilayer.com/exchangerates_data/convert?to=usd&from=pln&amount=1',
                url:'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-09-29/currencies/pln.json',
                //url:'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/'+(data)+'/currencies/pln.json',
                //apikey: 'UfrUT8hf8DHJiZjydS38blvyNq5r1Qr9',
                async:false,
                success: function(response){
                    console.log(response);
                    let all=response.pln;
                    value=all[b];
                    
                }
            })
            return value;
        }

// USTALENIE WARTOŚCI WALUT Z PLN  

        const eur=get_value('eur');
        const pln=get_value('pln');
        const usd=get_value('usd');
        const gbp=get_value('gbp');
        const mdl=get_value('mdl');
        const huf=get_value('huf');
        
        
//

// POBIERANIE PRZYCISK

        document.getElementById("przelicz").addEventListener("click",pobierz);
        
        function pobierz(){

        let ilosc = document.getElementById("kaska").value;
        let przeliczz = document.getElementById("przeliczz").value;
        let przeliczna = document.getElementById("przeliczna").value;
        let przeliczone;
    
// LICZENIE PLN NA INNE

            if(przeliczz=="PLN" && przeliczna=="EUR")
            {
                przeliczone=ilosc*eur;
            }

            if(przeliczz=="PLN" && przeliczna=="PLN")
            {
                przeliczone=ilosc*pln;
            }

            if(przeliczz=="PLN" && przeliczna=="USD")
            {
                przeliczone=ilosc*usd;
            }

            if(przeliczz=="PLN" && przeliczna=="GBP")
            {
                przeliczone=ilosc*gbp;
            }

            if(przeliczz=="PLN" && przeliczna=="HUF")
            {
                przeliczone=ilosc*huf;
            }
            
            if(przeliczz=="PLN" && przeliczna=="MDL")
            {
                przeliczone=ilosc*mdl;
            }

// 


// LICZENIE EUR NA INNE

            if(przeliczz=="EUR" && przeliczna=="PLN")
            {
                przeliczone=ilosc/eur;
            }

            if(przeliczz=="EUR" && przeliczna=="USD")
            {
                przeliczone=ilosc/eur*usd;
            }

            if(przeliczz=="EUR" && przeliczna=="EUR")
            {
                przeliczone=ilosc*1;
            }

            if(przeliczz=="EUR" && przeliczna=="GBP")
            {
                przeliczone=ilosc/eur*gbp;
            }

            if(przeliczz=="EUR" && przeliczna=="HUF")
            {
                przeliczone=ilosc/eur*huf;
            }
            
            if(przeliczz=="EUR" && przeliczna=="MDL")
            {
                przeliczone=ilosc/eur*mdl;
            }

//


// LICZENIE USD NA INNE

            if(przeliczz=="USD" && przeliczna=="PLN")
            {
                przeliczone=ilosc/usd;
            }

            if(przeliczz=="USD" && przeliczna=="USD")
            {
                przeliczone=ilosc*1;
            }

            if(przeliczz=="USD" && przeliczna=="EUR")
            {
                przeliczone=ilosc/usd*eur;
            }

            if(przeliczz=="USD" && przeliczna=="GBP")
            {
                przeliczone=ilosc/usd*gbp;
            }

            if(przeliczz=="USD" && przeliczna=="HUF")
            {
                przeliczone=ilosc/usd*huf;
            }
            
            if(przeliczz=="USD" && przeliczna=="MDL")
            {
                przeliczone=ilosc/usd*mdl;
            }

// 
          document.getElementById("wynik").innerHTML = przeliczone;

        }
