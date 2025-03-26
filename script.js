//Signing in 
function Signin()
{
var em1 = document.getElementById("em");
var password = document.getElementById("pass");

if (em1 === "" , password === "") {
  alert("Fillout all the fields");
  return false;
}
else if(em1.value.trim()=="")
{
    alert("Insert Your Email");
    return false;
}
else if(password.value.trim()=="")
{
    alert("Insert Your Password");
    return false;
}
else if(password.value.trim().length<5)
{
    alert("Password too Shorts");
    return false;
}
else{
    return true;
}
}

//Register
function SignUp(){
    var em = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    var password = document.getElementById("ps").value;
    var Cpass = document.getElementById("cpwd").value;

    if(name === "" || em === "" || password===""|| Cpass===""){
            alert("Please fillout the fields");
            return false;
        }

        else if(em == regx){
            return true;
        }
        else if(password.length<6){
            alert("Password too short");
                return false;
        }

        else if(password === Cpass){

            return true;
        }
        else if (password != Cpass) {
          alert("Password and Confirm Password must be the same");
          return false;
        }
        else{
           return true;    
        }

     }
     
     /*
     function send(){
         var em = document.getElementById("email").value;
        const nodemailer = require("nodemailer");
        const account = {
            user:"",
            pass:""
        };
         if (em == "") {
             alert("enter your Email!");
         } else {
             let transporter = nodemailer.createTransport({
                host:'google.com',
                auth:{
                    user:account.user,
                    pass:account.pass
                }
             });

             let mailOptions ={
                from:'',
                to:'',
                subject:'',
                text:'',
             };
             transporter.sendMail(mailOptions,(error,info) =>{
                if(error){
                    return console.log(error);
                }
                console.log("Message Sent",info.messageId);
                console.log("Preview URL",nodemailer.getTestMessageurl(info));
             });
         }
     }
     */

  
    var modalbtn = document.querySelector('#Cart');
    var modalbg = document.querySelector('.modal-bg');
    var close = document.querySelector('.modal-close');

    modalbtn.addEventListener('click',function(){
      modalbg.classList.add('bg-active');
      
  });

    close.addEventListener('click', function(){
      modalbg.classList.remove('bg-active');
      
    });
//Lechon Manok
    function product1() {
      document.getElementById("item1").classList.remove("LM");
      document.getElementById("item1").classList.add("LMshow");
      alert("Successfully Added");
      var val = document.getElementById("quantity1").value;
      document.getElementById("qty1").innerHTML = val;
    
      var qty = $("#qty1").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total1").innerHTML = total;
    }
    
    function delete1() {
      document.getElementById("item1").classList.add("LM");
      document.getElementById("item1").classList.remove("LMshow");
    
      document.getElementById("total1").innerHTML = 0;
      $("#qty1").text(0);
    }
    function adding1() {
      var val = document.getElementById("add").value;
      document.getElementById("qty1").innerHTML = val;
    
      var qty = $("#qty1").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total1").innerHTML = total;
      }
//Liempo
    function product2() {
      document.getElementById("item2").classList.remove("Liempo");
      document.getElementById("item2").classList.add("Liemposhow");
      alert("Successfully Added");
      var val = document.getElementById("quantity2").value;
      document.getElementById("qty2").innerHTML = val;
    
      var qty = $("#qty2").text();
      var total = parseInt(qty) * 300;
    
      document.getElementById("total2").innerHTML = total;
    }
    
    function delete2() {
      document.getElementById("item2").classList.add("Liempo");
      document.getElementById("item2").classList.remove("Liemposhow");
    
      document.getElementById("total2").innerHTML = 0;
      $("#qty2").text(0);
    }
    function adding2() {
      var val = document.getElementById("add2").value;
      document.getElementById("qty2").innerHTML = val;
    
      var qty = $("#qty2").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total2").innerHTML = total;
      }
//Sisig
    function product3() {
      document.getElementById("item3").classList.remove("Sisig");
      document.getElementById("item3").classList.add("Sisigshow");
      alert("Successfully Added");
      var val = document.getElementById("quantity3").value;
      document.getElementById("qty3").innerHTML = val;
    
      var qty = $("#qty3").text();
      var total = parseInt(qty) * 100;
    
      document.getElementById("total3").innerHTML = total;
    }
    
    function delete3() {
      document.getElementById("item3").classList.add("Sisig");
      document.getElementById("item3").classList.remove("Sisigshow");
    
      document.getElementById("total3").innerHTML = 0;
      $("#qty3").text(0);
    }
    function adding3() {
      var val = document.getElementById("add3").value;
      document.getElementById("qty3").innerHTML = val;
    
      var qty = $("#qty3").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total3").innerHTML = total;
      }
    //Tilapia
    function product4() {
      document.getElementById("item4").classList.remove("RT");
      document.getElementById("item4").classList.add("RTshow");
      alert("Successfully Added");
      var val = document.getElementById("quantity4").value;
      document.getElementById("qty4").innerHTML = val;
    
      var qty = $("#qty4").text();
      var total = parseInt(qty) * 230;
    
      document.getElementById("total4").innerHTML = total;
    }
    
    function delete4() {
      document.getElementById("item4").classList.add("RT");
      document.getElementById("item4").classList.remove("RTshow");
    
      document.getElementById("total4").innerHTML = 0;
      $("#qty4").text(0);
    }
    function adding4() {
      var val = document.getElementById("add4").value;
      document.getElementById("qty4").innerHTML = val;
    
      var qty = $("#qty4").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total4").innerHTML = total;
      }
    //butter Shrimp
    function product5() {
      document.getElementById("item5").classList.remove("BS");
      document.getElementById("item5").classList.add("BSshow");
      alert("Successfully Added");
      var val = document.getElementById("quantity5").value;
      document.getElementById("qty5").innerHTML = val;
    
      var qty = $("#qty5").text();
      var total = parseInt(qty) * 430;
    
      document.getElementById("total5").innerHTML = total;
    }
    
    function delete5() {
      document.getElementById("item5").classList.add("BS");
      document.getElementById("item5").classList.remove("BSshow");
    
      document.getElementById("total5").innerHTML = 0;
      $("#qty5").text(0);
    }
    function adding5() {
      var val = document.getElementById("add5").value;
      document.getElementById("qty5").innerHTML = val;
    
      var qty = $("#qty5").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total5").innerHTML = total;
      }
    //Daing
    function product6() {
      document.getElementById("item6").classList.remove("DB");
      document.getElementById("item6").classList.add("DBshow");
      alert("Successfully Added");
      var val = document.getElementById("quantity6").value;
      document.getElementById("qty6").innerHTML = val;
    
      var qty = $("#qty6").text();
      var total = parseInt(qty) * 325;
    
      document.getElementById("total6").innerHTML = total;
    }
    
    function delete6() {
      document.getElementById("item6").classList.add("DB");
      document.getElementById("item6").classList.remove("DBshow");

      document.getElementById("total6").innerHTML = 0;
      $("#qty6").text(0);
    }
    function adding6() {
      var val = document.getElementById("add6").value;
      document.getElementById("qty6").innerHTML = val;
    
      var qty = $("#qty6").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total6").innerHTML = total;
      }

    //Dilis
    function product7() {
      document.getElementById("item7").classList.remove("Dilis");
      document.getElementById("item7").classList.add("Dilisshow");
alert("Successfully Added");
      var val = document.getElementById("quantity7").value;
      document.getElementById("qty7").innerHTML = val;
    
      var qty = $("#qty7").text();
      var total = parseInt(qty) * 350;
    
      document.getElementById("total7").innerHTML = total;
    }
    
    function delete7() {
      document.getElementById("item7").classList.add("Dilis");
      document.getElementById("item7").classList.remove("Dilisshow");
    
      document.getElementById("total7").innerHTML = 0;
      $("#qty7").text(0);
    }
    function adding7() {
      var val = document.getElementById("add7").value;
      document.getElementById("qty7").innerHTML = val;
    
      var qty = $("#qty7").text();
      var total = parseInt(qty) * 260;
    
      document.getElementById("total7").innerHTML = total;
      }

      function product9() {
        document.getElementById("item9").classList.remove("Siopap");
        document.getElementById("item9").classList.add("Siopaoshow");
  alert("Successfully Added");
        var val = document.getElementById("quantity9").value;
        document.getElementById("qty9").innerHTML = val;
      
        var qty = $("#qty9").text();
        var total = parseInt(qty) * 25;
      
        document.getElementById("total9").innerHTML = total;
      }
      
      function delete9() {
        document.getElementById("item9").classList.add("Siopao");
        document.getElementById("item9").classList.remove("Siopaoshow");
      
        document.getElementById("total9").innerHTML = 0;
        $("#qty9").text(0);
      }
      function adding9() {
        var val = document.getElementById("add9").value;
        document.getElementById("qty9").innerHTML = val;
      
        var qty = $("#qty9").text();
        var total = parseInt(qty) * 260;
      
        document.getElementById("total9").innerHTML = total;
        }

      

    setInterval(function() {
      var t1 = $("#total1").text();
      var t2 = $("#total2").text();
      var t3 = $("#total3").text();
      var t4 = $("#total4").text();
      var t5 = $("#total5").text();
      var t6 = $("#total6").text();
      var t7 = $("#total7").text();

      var t9 = $("#total9").text();
      var subtotal = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4) + parseInt(t5)
      + parseInt(t6) + parseInt(t7); 
    
      document.getElementById("AmountTotal").innerHTML = subtotal;
      

    },1000);
    function Purchase(){
      var sms = document.getElementById("email").value;
      var address = document.getElementById("add").value;
      var amount = document.getElementById("num");
      var card = document.getElementById("card").value;
      if(sms === "" || address === "" || num === "" || card === ""){
        alert("Fillout all the Field");
      }
      else{
        document.getElementById("item1").classList.add("LM");
        document.getElementById("item1").classList.remove("LMshow");
        document.getElementById("item2").classList.add("Liempo");
        document.getElementById("item2").classList.remove("Liemposhow");
        document.getElementById("item3").classList.add("Sisig");
        document.getElementById("item3").classList.remove("Sisigshow");
        document.getElementById("item4").classList.add("RT");
        document.getElementById("item4").classList.remove("RTshow");
        document.getElementById("item5").classList.add("BS");
        document.getElementById("item5").classList.remove("BSshow");
        document.getElementById("item6").classList.add("DB");
        document.getElementById("item6").classList.remove("DBshow");
        document.getElementById("item7").classList.add("Dilis");
        document.getElementById("item7").classList.remove("Dilisshow");
        
        document.getElementById("total1").innerHTML=0;
        document.getElementById("total2").innerHTML=0;
        document.getElementById("total3").innerHTML=0;
        document.getElementById("total4").innerHTML=0;
        document.getElementById("total5").innerHTML=0;
        document.getElementById("total6").innerHTML=0;
        document.getElementById("total7").innerHTML=0;
      }
    }
    /*
    const http = require();

    const hostname= "127.0.0.1";
    const port = 3000;
  
    const server = http.createServer((req,res)=>{
  
      res.statusCode = 200;
      res.setHeader('Content-Type',text/plain);
      res.send("hello World/n");
    });
  
    server.listen(port,hostname,()=>{
      console.log('server running at http://{$hostname}:${port}/')
    });
*/
    