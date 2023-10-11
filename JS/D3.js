window.onload = () => {
  const form = document.getElementById("myForm");
  const cancelButton = document.querySelector(
    "#buttonArea button[type='button']"
  );

  cancelButton.onclick = function () {
    const hasConfirmed = confirm("sei sicuro di voler cancellare i dati?");
    if (hasConfirmed) {
      form.reset();
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("task");
    const task = taskInput.value;

    const main = document.getElementsByTagName("main")[0];

    const card = document.createElement("div");
    card.className = "card";

    const h4 = document.createElement("h4");
    h4.innerText = `${task}`;

    button.onclick = function (e) {
      const clickedBtn = e.target;
      clickedBtn.parentNode.remove();
    };

    card.appendChild(h4);

    main.appendChild(card);

    taskInput.value = "";
  };
};

// window.onload = () => {
//   const form = document.getElementById("myForm");

//   form.onsubmit = function (e) {
//     e.preventDefault();

//     const taskInput = document.getElementById("add-task");
//     const task = taskInput.value;

//     const newObj = {
//       task,
//     };

//     const main = document.getElementsByTagName("main")[0];
//     const card = document.createElement("div");
//     card.className = "card";

//     const h4 = document.createElement("h4");
//     h4.innerText = `${task}`;

//     button.onclick = function (e) {
//       const clickbtn = e.target;
//       clickbtn.parentNode.remove();
//     };

//     card.appendChild(h4);

//     main.appendChild(card);

//     taskInput.value = "";

//     console.log("Task aggiunta!");
//     console.log(e);
//     console.log(newObj);
//   };
// };
