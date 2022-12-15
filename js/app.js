let hello = document.getElementById("hello")
let witchmy = document.getElementById("witch")
let stats = document.getElementById("stats")
function hidehello(){
    hello.classList.add("hide-hello");
    
    setTimeout(() => {
        hello.classList.add("noneddisplay");
    }, 300);
    setTimeout(() => {
        witchmy.classList.add("show-stats");
    }, 350);
    setTimeout(() => {
        witchmy.classList.add("animate__fadeInRight");
    }, 350);
}

function sh(){
    witchmy.classList.add("hide-hello");
    
    setTimeout(() => {
        witchmy.classList.remove("show-stats")
        witchmy.classList.add("noneddisplay");
        witchmy.classList.add("hide-hello2");
    }, 300);
    setTimeout(() => {
        stats.classList.add("show-stats");
    }, 350);
    setTimeout(() => {
        stats.classList.add("animate__fadeInRight");
    }, 350);
}

const data = {
    labels: 
    ['Mon', 'Tue', 'Wed', 'Tue', 'Wed','Wed'],
   
    datasets: [{
      label: "My Stats",
      data: [100, 100 , 100 , 100 , 100, 100],
      backgroundColor: [
        '#a9d6ee',
        '#ff7669',
        '#e1d486',
        '#72ff89',
        '#7069FF',
        '#FFB5EB',
      ],
      borderColor: [
        '#a9d6ee',
        '#ff7669',
        '#e1d486',
        '#72ff89',
        '#7069FF',
        '#FFB5EB',
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      plugins: {  // 'legend' now within object 'plugins {}'
        legend: {
          labels: {
            color: "#fff",  // not 'fontColor:' anymore
            // fontSize: 18  // not 'fontSize:' anymore
            font: {
              size: 18 // 'size' now within object 'font {}'
            }
          }
        }
      },
        scales: {
            y: {  // not 'yAxes: [{' anymore (not an array anymore)
              ticks: {
                color: "#fff", // not 'fontColor:' anymore
                // fontSize: 18,
                font: {
                  size: 14, // 'size' now within object 'font {}'
                },
                beginAtZero: true
              }
            },
            x: {  // not 'xAxes: [{' anymore (not an array anymore)
              ticks: {
                color: "#fff",  // not 'fontColor:' anymore
                //fontSize: 14,
                font: {
                  size: 14 // 'size' now within object 'font {}'
                },
                beginAtZero: true
              }
            }
          }

    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  // header title
  function changeTitlee(title){
    console.log(title);
    myChart.config.data.datasets[0].label = title.value;
    myChart.update();
  }

  // first
  function changeTitle(title){
    console.log(title);
    // myChart.config.data.datasets[0].label = title.value;
    myChart.config.data.labels[0] = title.value;
    myChart.update();
  }
  function chageDesc(desc){
    console.log(desc.value);
    myChart.config.data.datasets[0].backgroundColor[0] = desc.value;
    myChart.update();
  }
  function changeTotal(total){
    console.log(total.value);
    myChart.config.data.datasets[0].data[0] = total.value;
    myChart.update();
  }
// 2th
  function changeTitle2(title){
    console.log(title);
    myChart.config.data.labels[1] = title.value;
    myChart.update();
  }
  function chageDesc2(desc0){
    console.log(desc0.value);
    myChart.config.data.datasets[0].backgroundColor[1] = desc0.value;
    myChart.update();
  }
  function changeTotal2(total0){
    console.log(total0.value);
    myChart.config.data.datasets[0].data[1] = total0.value;
    myChart.update();
  }
  // 3th
  function changeTitle3(title){
    console.log(title);
    myChart.config.data.labels[2] = title.value;
    myChart.update();
  }
  function chageDesc3(desc){
    console.log(desc.value);
    myChart.config.data.datasets[0].backgroundColor[2] = desc.value;
    myChart.update();
  }
  function changeTotal3(total){
    console.log(total.value);
    myChart.config.data.datasets[0].data[2] = total.value;
    myChart.update();
  }
  // 4th
  function changeTitle4(title){
    console.log(title);
    myChart.config.data.labels[3] = title.value;
    myChart.update();
  }
  function chageDesc4(desc){
    console.log(desc.value);
    myChart.config.data.datasets[0].backgroundColor[3] = desc.value;
    myChart.update();
  }
  function changeTotal4(total){
    console.log(total.value);
    myChart.config.data.datasets[0].data[3] = total.value;
    myChart.update();
  }
  // 5th
  function changeTitle5(title){
    console.log(title);
    myChart.config.data.labels[4] = title.value;
    myChart.update();
  }
  function chageDesc5(desc){
    console.log(desc.value);
    myChart.config.data.datasets[0].backgroundColor[4] = desc.value;
    myChart.update();
  }
  function changeTotal5(total){
    console.log(total.value);
    myChart.config.data.datasets[0].data[4] = total.value;
    myChart.update();
  }
  // 6th
  function changeTitle6(title){
    console.log(title);
    myChart.config.data.labels[5] = title.value;
    myChart.update();
  }
  function chageDesc6(desc){
    console.log(desc.value);
    myChart.config.data.datasets[0].backgroundColor[5] = desc.value;
    myChart.update();
  }
  function changeTotal6(total){
    console.log(total.value);
    myChart.config.data.datasets[0].data[5] = total.value;
    myChart.update();
  }
function chartType(type){
  myChart.config.type = type
  myChart.update();
}
let colo = document.getElementById("color")
let colo2 = document.getElementById("color2")
let colo3 = document.getElementById("color3")
let colo4 = document.getElementById("color4")
let colo5 = document.getElementById("color5")
let colo6 = document.getElementById("color6")
colo.value = myChart.config.data.datasets[0].backgroundColor[0]
colo2.value = myChart.config.data.datasets[0].backgroundColor[1]
colo3.value = myChart.config.data.datasets[0].backgroundColor[2]
colo4.value = myChart.config.data.datasets[0].backgroundColor[3]
colo5.value = myChart.config.data.datasets[0].backgroundColor[4]
colo6.value = myChart.config.data.datasets[0].backgroundColor[5]