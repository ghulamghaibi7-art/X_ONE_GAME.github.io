function restoreHost(){
  alert("Host settings restored. برای اتصال عملکرد واقعی، فایل‌های اصلی Host باید در پروژه قرار داده شوند.");
}

document.querySelectorAll(".firmware-grid button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    alert("نسخه انتخاب شد: " + btn.textContent.trim());
  });
});
