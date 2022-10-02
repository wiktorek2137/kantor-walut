
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
                url:'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-10-02/currencies/pln.json',
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

        let waluty=[eur, pln, usd, gbp, mdl, huf];
        
//  PRZELICZ Z      
        let value=document.getElementById("przeliczz").value; // czego szukamy
        var index = -1;
        for (var i = 0; i < waluty.length; ++i) {
            if (value === waluty[i]) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            console.log('indeks to ' + index);
        } else {
            console.log('Nie znaleziono "' + value + '".');
        }
        
//

//  PRZELICZ NA      
        let value2=document.getElementById("przeliczna").value; // czego szukamy
        var index = -1;
        for (var i = 0; i < waluty.length; ++i) {
            if (value2 === waluty[i]) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            console.log('indeks to ' + index);
        } else {
            console.log('Nie znaleziono "' + value2 + '".');
        }

//

// POBIERANIE PRZYCISK

        document.getElementById("przelicz").addEventListener("click",pobierz);
        
        function pobierz(){

        let ilosc = document.getElementById("kaska").value;
        let przeliczz = document.getElementById("przeliczz").value;
        let przeliczna = document.getElementById("przeliczna").value;
        let przeliczone;

        
    
// // KAŻDA WALUTA
// 
//             if(przeliczz==[waluty] && przeliczna==[waluty]) //a= dowolna waluta b=dowolna waluta
//             {
//                 przeliczone=ilosc/przeliczz[waluty]*przeliczna[waluty];
//                 przeliczone=Math.round(przeliczone*100)/100+" "+przeliczna;
//             }
// 
//             if(przelicz=przeliczna){
//                 przeliczone=ilosc*1;
//                 przeliczone=Math.round(przeliczone*100)/100+" "+przeliczna;
//             }
// 
// //        

// LICZENIE PLN NA INNE

                if(przeliczz=="PLN" && przeliczna=="EUR")
                {
                    przeliczone=ilosc*eur;
                    przeliczone=Math.round(przeliczone*1000)/1000+" EUR";
                }

                if(przeliczz=="PLN" && przeliczna=="PLN")
                {
                    przeliczone=ilosc*pln;
                    przeliczone=Math.round(przeliczone*1*100)/100+" PLN";
                }

                if(przeliczz=="PLN" && przeliczna=="USD")
                {
                    przeliczone=ilosc*usd;
                    przeliczone=Math.round(przeliczone*100)/100+" USD";
                }

                if(przeliczz=="PLN" && przeliczna=="GBP")
                {
                    przeliczone=ilosc*gbp;
                    przeliczone=Math.round(przeliczone*100)/100+" GBP";
                }

                if(przeliczz=="PLN" && przeliczna=="HUF")
                {
                    przeliczone=ilosc*huf;
                    przeliczone=Math.round(przeliczone*100)/100+" HUF";
                }
                
                if(przeliczz=="PLN" && przeliczna=="MDL")
                {
                    przeliczone=ilosc*mdl;
                    przeliczone=Math.round(przeliczone*100)/100+" MDL";
                }

    // 


    // LICZENIE EUR NA INNE

                if(przeliczz=="EUR" && przeliczna=="PLN")
                {
                    przeliczone=ilosc/eur*pln;
                    przeliczone=Math.round(przeliczone*100)/100+" PLN";
                }

                if(przeliczz=="EUR" && przeliczna=="USD")
                {
                    przeliczone=ilosc/eur*usd;
                    przeliczone=Math.round(przeliczone*100)/100+" USD";
                }

                if(przeliczz=="EUR" && przeliczna=="EUR")
                {
                    przeliczone=ilosc*1;
                    przeliczone=Math.round(przeliczone*100)/100+" EUR";
                }

                if(przeliczz=="EUR" && przeliczna=="GBP")
                {
                    przeliczone=ilosc/eur*gbp;
                    przeliczone=Math.round(przeliczone*100)/100+" GBP";
                }

                if(przeliczz=="EUR" && przeliczna=="HUF")
                {
                    przeliczone=ilosc/eur*huf;
                    przeliczone=Math.round(przeliczone*100)/100+" HUF";
                }
                
                if(przeliczz=="EUR" && przeliczna=="MDL")
                {
                    przeliczone=ilosc/eur*mdl;
                    przeliczone=Math.round(przeliczone*100)/100+" MDL";
                }

    //


    // LICZENIE USD NA INNE

                if(przeliczz=="USD" && przeliczna=="PLN")
                {
                    przeliczone=ilosc/usd*pln;
                    przeliczone=Math.round(przeliczone*100)/100+" PLN";
                }

                if(przeliczz=="USD" && przeliczna=="USD")
                {
                    przeliczone=ilosc*1;
                    przeliczone=Math.round(przeliczone*100)/100+" USD";
                }

                if(przeliczz=="USD" && przeliczna=="EUR")
                {
                    przeliczone=ilosc/usd*eur;
                    przeliczone=Math.round(przeliczone*100)/100+" EUR";
                }

                if(przeliczz=="USD" && przeliczna=="GBP")
                {
                    przeliczone=ilosc/usd*gbp;
                    przeliczone=Math.round(przeliczone*100)/100+" GBP";
                }

                if(przeliczz=="USD" && przeliczna=="HUF")
                {
                    przeliczone=ilosc/usd*huf;
                    przeliczone=Math.round(przeliczone*100)/100+" HUF";
                }
                
                if(przeliczz=="USD" && przeliczna=="MDL")
                {
                    przeliczone=ilosc/usd*mdl;
                    przeliczone=Math.round(przeliczone*100)/100+" MDL";
                }

    // 

    // LICZENIE GBP NA INNE

                if(przeliczz=="GBP" && przeliczna=="PLN")
                {
                    przeliczone=ilosc*Math.round(ilosc/gbp*100)/100+" PLN";
                }

                if(przeliczz=="GBP" && przeliczna=="USD")
                {
                    przeliczone=ilosc*Math.round(ilosc/gbp*usd*100)/100+" USD";
                }

                if(przeliczz=="GBP" && przeliczna=="EUR")
                {
                    przeliczone=ilosc*Math.round(ilosc/gbp*eur*100)/100+" EUR";
                }

                if(przeliczz=="GBP" && przeliczna=="GBP")
                {
                    przeliczone=ilosc*Math.round(ilosc*1*100)/100+" GBP";
                }

                if(przeliczz=="GBP" && przeliczna=="HUF")
                {
                    przeliczone=ilosc*Math.round(ilosc/gbp*huf*100)/100+" HUF";
                }

                if(przeliczz=="GBP" && przeliczna=="MDL")
                {
                    przeliczone=ilosc*Math.round(ilosc/gbp*mdl*100)/100+" MDL";
                }

    // 

    // LICZENIE HUF NA INNE

                if(przeliczz=="HUF" && przeliczna=="PLN")
                {
                    przeliczone=ilosc*Math.round(ilosc/huf*100)/100+" PLN";
                }

                if(przeliczz=="HUF" && przeliczna=="USD")
                {
                    przeliczone=ilosc*Math.round(ilosc/huf*usd*100)/100+" USD";
                }

                if(przeliczz=="HUF" && przeliczna=="EUR")
                {
                    przeliczone=ilosc*Math.round(ilosc/huf*eur*100)/100+" EUR";
                }

                if(przeliczz=="HUF" && przeliczna=="GBP")
                {
                    przeliczone=ilosc*Math.round(ilosc/huf*gbp*100)/100+" GBP";
                }

                if(przeliczz=="HUF" && przeliczna=="HUF")
                {
                    przeliczone=ilosc*Math.round(ilosc*1*100)/100+" HUF";
                }

                if(przeliczz=="HUF" && przeliczna=="MDL")
                {
                    przeliczone=ilosc*Math.round(ilosc/huf*mdl*100)/100+" MDL";
                }

    //

    // LICZENIE MDL NA INNE

                if(przeliczz=="MDL" && przeliczna=="PLN")
                {
                    przeliczone=ilosc*Math.round(ilosc/mdl*100)/100+" PLN";
                }

                if(przeliczz=="MDL" && przeliczna=="USD")
                {
                    przeliczone=ilosc*Math.round(ilosc/mdl*usd*100)/100+" USD";
                }

                if(przeliczz=="MDL" && przeliczna=="EUR")
                {
                    przeliczone=ilosc*Math.round(ilosc/mdl*eur*100)/100+" EUR";
                }

                if(przeliczz=="MDL" && przeliczna=="GBP")
                {
                    przeliczone=ilosc*Math.round(ilosc/mdl*gbp*100)/100+" GBP";
                }

                if(przeliczz=="MDL" && przeliczna=="HUF")
                {
                    przeliczone=ilosc*Math.round(ilosc/mdl*huf*100)/100+" HUF";
                }

                if(przeliczz=="MDL" && przeliczna=="MDL")
                {
                    przeliczone=ilosc*Math.round(ilosc*1*100)/100+" MDL";
                }

    //      
        document.getElementById("wynik").innerHTML = przeliczone;

        }
