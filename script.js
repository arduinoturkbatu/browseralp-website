document.onload = osfunction()

function osfunction ()
{
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="windows";

        document.getElementById("downloadWindows").classList.add("btn-primary");
        document.getElementById("downloadMacos").classList.add("btn-outline-primary");
        document.getElementById("downloadLinux").classList.add("btn-outline-primary");
    }
    else if (os.search('Mac')!==-1){
        finalOs="apple";

        document.getElementById("downloadWindows").classList.add("btn-outline-primary");
        document.getElementById("downloadMacos").classList.add("btn-primary");
        document.getElementById("downloadLinux").classList.add("btn-outline-primary");
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="ubuntu"

        document.getElementById("downloadWindows").classList.add("btn-outline-primary");
        document.getElementById("downloadMacos").classList.add("btn-outline-primary");
        document.getElementById("downloadLinux").classList.add("btn-primary");
    }
    
    console.log(finalOs);

}

window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
  }
}


//? Bootstrap


const toastTrigger1 = document.querySelector('.toastBtn1')
const toastTrigger2 = document.querySelector('.toastBtn2')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger1) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger1.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger2) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap.show()
  })
}