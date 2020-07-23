 var hours = document.getElementById("hours");
    var minutes = document.getElementById("min");
 
    function tick() {
        var time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
 
        hours.innerHTML = h.toString() + " : ";
        minutes.innerHTML = m.toString();
    }
    setInterval(tick,300); // что бы была точность, если допустим клиент зайдет на сайт, между сменой секунд
