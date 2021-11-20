//---------------------------firebase config---------------------------------------//
var firebaseConfig = {
    apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
    authDomain: "analyzerdb.firebaseapp.com",
    databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
    projectId: "analyzerdb",
    storageBucket: "analyzerdb.appspot.com",
    messagingSenderId: "326480477399",
    appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
    measurementId: "G-NHM4EMZ8HS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore(); 
  let engineers = [];
  var username; 
  var os;
  //--------------writing data---------------------//

  var socket = io();
socket.on('status', function(status) {
  if (String(status).includes("COM1") ){
    document.getElementById('data4').innerHTML += "Connected";
} 
if (String(status).includes("COM2") ){
  document.getElementById('data4').innerHTML += "Connected";
} 
if (String(status).includes("COM3") ){
  document.getElementById('data4').innerHTML += "Connected";
} else
{
  document.getElementById('data4').innerHTML += "Connected";
}
socket.close(); 
}); 




  function card(){

                var socket = io();   
socket.on('uptimedata', function(uptimedata) 
{
    document.getElementById("Connection1").innerHTML += String((parseFloat(uptimedata) / 60).toFixed(2)) + " Minutes";
    socket.close(); 
     });   
    firebase.auth().onAuthStateChanged(function(user) {
      var user = firebase.auth().currentUser;
      username = user.email;
      document.getElementById("opname").innerText += username ;  
      document.getElementById("usrLvl").innerText = "Medical Practitioner";    
      //count data
 
   db.collection("patientvalues").doc(username).collection("DATE").get()
  .then( snapshot => document.getElementById("data1").innerHTML = snapshot.size) ;

  db.collection("patientvalues").get()
  .then( snapshot => document.getElementById("data2").innerHTML = snapshot.size) ;

  
  db.collection("patientvalues").doc(username).collection("DATE").get()
  .then( snapshot => document.getElementById("data3").innerHTML = String((parseFloat(snapshot.size) / 7).toFixed(2))) ;


    db.collection("patientvalues").doc(username).collection("DATE").doc("26-03-2021").collection("SID").doc("2").collection("DATA")
     .get()  
     .then(snapshot => {
       snapshot.forEach(doc => {
           var date0 = doc.data().DATE;
           var sid1 = doc.data().SID;
           var wbc1 = doc.data().WBC;
           var lym1 = doc.data().LYM;
           var eos1 = doc.data().EOS;
           var rbc1 = doc.data().RBC;
           var hct1 = doc.data().HCT;
           var neu1 = doc.data().NEU;
           var mon1 = doc.data().MON;
           var bas1 = doc.data().BAS;
           var hgb1 = doc.data().HGB;
           var mcv1 = doc.data().MCV;
           var fname1 = doc.data().FirstName;
           var lname1 = doc.data().LastName;
           document.getElementById('date0').innerHTML += date0;
           document.getElementById('sid1').innerHTML += sid1;
           document.getElementById('wbc1').innerHTML += wbc1;
           document.getElementById('lym1').innerHTML += lym1;
           document.getElementById('eos1').innerHTML += eos1;
           document.getElementById('rbc1').innerText += rbc1;
           document.getElementById('hct1').innerHTML += hct1;
           document.getElementById('neu1').innerHTML += neu1;
           document.getElementById('mon1').innerHTML += mon1;
           document.getElementById('bas1').innerHTML += bas1;
           document.getElementById('mcv1').innerHTML += mcv1;
           document.getElementById('hgb1').innerHTML += hgb1;
           document.getElementById('fname1').innerHTML += fname1;
           document.getElementById('lname1').innerHTML += lname1;
       });
     })
     .catch(err => {
       console.log('Error getting documents', err);
     });
   //-----------------------Card2---------------------------------//
   db.collection("patientvalues").doc(username).collection("DATE").doc("24-06-2021").collection("SID").doc("00001").collection("DATA")
   .get()  
   .then(snapshot => {
     snapshot.forEach(doc => {
         var date2 = doc.data().DATE;
         var sid2 = doc.data().SID;
         var wbc2 = doc.data().WBC;
         var lym2 = doc.data().LYM;
         var eos2 = doc.data().EOS;
         var rbc2 = doc.data().RBC;
         var hct2 = doc.data().HCT;
         var neu2 = doc.data().NEU;
         var mon2 = doc.data().MON;
         var bas2 = doc.data().BAS;
         var hgb2 = doc.data().HGB;
         var mcv2 = doc.data().MCV;
         var fname2 = doc.data().FirstName;
         var lname2 = doc.data().LastName;
         document.getElementById('date2').innerHTML += date2;
         document.getElementById('sid2').innerHTML += sid2;
         document.getElementById('wbc2').innerHTML += wbc2;
         document.getElementById('lym2').innerHTML += lym2;
         document.getElementById('eos2').innerHTML += eos2;
         document.getElementById('rbc2').innerText += rbc2;
         document.getElementById('hct2').innerHTML += hct2;
         document.getElementById('neu2').innerHTML += neu2;
         document.getElementById('mon2').innerHTML += mon2;
         document.getElementById('bas2').innerHTML += bas2;
         document.getElementById('mcv2').innerHTML += mcv2;
         document.getElementById('hgb2').innerHTML += hgb2;
         document.getElementById('fname2').innerHTML += fname2;
         document.getElementById('lname2').innerHTML += lname2;
     });
   })
   .catch(err => {
     console.log('Error getting documents', err);
   });
      //-----------------------Card3---------------------------------//
      db.collection("patientvalues").doc(username).collection("DATE").doc("22-05-2022").collection("SID").doc("00003").collection("DATA")
      .get()  
      .then(snapshot => {
        snapshot.forEach(doc => {
            var date = doc.data().DATE;
            var sid = doc.data().SID;
            var wbc = doc.data().WBC;
            var rbc = doc.data().RBC;
            var hgb = doc.data().HGB;
            var mch = doc.data().MCH;
            var mcv = doc.data().MCV;
            var pdw = doc.data().PDW;
            var hct = doc.data().HCT;
            var lym = doc.data().LYM;
            var plt = doc.data().PLT;
            var gra = doc.data().GRA;
            var fname = doc.data().FirstName;
            var lname = doc.data().LastName;
            document.getElementById('date3').innerHTML += date;
            document.getElementById('sid3').innerHTML += sid;
            document.getElementById('wbc3').innerHTML += wbc;
            document.getElementById('rbc3').innerText += rbc;
            document.getElementById('mch3').innerHTML += mch;
            document.getElementById('mcv3').innerHTML += mcv;
            document.getElementById('hgb3').innerHTML += hgb;
            document.getElementById('pdw3').innerHTML += pdw;
            document.getElementById('hct3').innerHTML += hct;
            document.getElementById('lym3').innerHTML += lym;
            document.getElementById('plt3').innerHTML += plt;
            document.getElementById('gra3').innerHTML += gra;
            document.getElementById('fname3').innerHTML += fname;
            document.getElementById('lname3').innerHTML += lname;
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      //-----------------------Card4---------------------------------//
      db.collection("patientvalues").doc(username).collection("DATE").doc("23-05-2021").collection("SID").doc("00003").collection("DATA")
      .get()  
      .then(snapshot => {
        snapshot.forEach(doc => {
            var date = doc.data().DATE;
            var sid = doc.data().SID;
            var wbc = doc.data().WBC;
            var rbc = doc.data().RBC;
            var hgb = doc.data().HGB;
            var mch = doc.data().MCH;
            var mcv = doc.data().MCV;
            var pdw = doc.data().PDW;
            var hct = doc.data().HCT;
            var lym = doc.data().LYM;
            var plt = doc.data().PLT;
            var gra = doc.data().GRA;
            var fname = doc.data().FirstName;
            var lname = doc.data().LastName;
            document.getElementById('date4').innerHTML += date;
            document.getElementById('sid4').innerHTML += sid;
            document.getElementById('wbc4').innerHTML += wbc;
            document.getElementById('rbc4').innerHTML += rbc;
            document.getElementById('mch4').innerHTML += mch;
            document.getElementById('mcv4').innerHTML += mcv;
            document.getElementById('hgb4').innerHTML += hgb;
            document.getElementById('pdw4').innerHTML += pdw;
            document.getElementById('hct4').innerHTML += hct;
            document.getElementById('lym4').innerHTML += lym;
            document.getElementById('plt4').innerHTML += plt;
            document.getElementById('gra4').innerHTML += gra;
            document.getElementById('fname4').innerHTML += fname;
            document.getElementById('lname4').innerHTML += lname;
        
        });
   
      })
      .catch(err => {
        
        console.log('Error getting documents', err);
     
      });

    })
    
}
