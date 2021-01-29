const alerts = (color, data) => {
  let alertid = document.getElementById("alert");
  alertid.style.transitionDuration = "0.5s";
  alertid.style.top = "62px";
  alertid.style.display = "block";

  let icon = "";
  if (color === "bg-warning") {
    icon = `<svg style="transform: scale(1.5,1.5)" width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
  </svg>`;
  } else if (color === "bg-info") {
    icon = `<svg style="transform: scale(1.5,1.5)" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
    <circle cx="8" cy="4.5" r="1"/>
  </svg>`;
  } else if (color === "bg-danger") {
    icon = `<svg style="transform: scale(1.5,1.5)" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-circle mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
  </svg>`;
  } else {
    icon = `<svg style="transform: scale(1.5,1.5)" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-circle mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
    </svg>`;
  }

  alertid.innerHTML = `<div class="alertBar text-light px-5 ${color}" ><p class="text-center">${icon}<span style="font-size: 16px; position: relative; top: 2px">${data}</span></p></div>`;
  setTimeout(function () {
    alertid.style.top = "-70px";
  }, 6000);
};

export default alerts;
