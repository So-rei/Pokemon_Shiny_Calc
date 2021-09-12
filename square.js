function Calc(){
  let pid = document.getElementById("PID").value;
  let pid_h = parseInt(pid.substr(-4),16);
  let pid_l = pid.length > 4 ? parseInt(pid.slice(0,-4),16) : 0;
  let sid = document.getElementById("SID_r").checked ? parseInt(document.getElementById("SID").value, 16) : document.getElementById("SID").value;
  let tid = document.getElementById("TID_r").checked ? parseInt(document.getElementById("TID").value, 16) : document.getElementById("TID").value;
  
  //計算..
  var num = pid_h ^ pid_l ^ sid ^ tid;
  var ret = document.getElementById("RET");
  ret.innerHTML = num + "(0x" + num.toString(16) + ")";
  if (num == 0)
  {
    ret.style.color = '#f00';
    ret.innerHTML += " ◆色";
  }
  else if (num < 16){
    ret.style.color = '#0cc';
    ret.innerHTML += " ★色";
  }
  else
    ret.style.color = '#000';
};