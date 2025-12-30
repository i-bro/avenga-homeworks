const button = document.getElementById("button");

button.addEventListener("click", function () {
  const animal = {
    name: document.getElementById("name").value,
    kind: document.getElementById("kind").value,
    speak: function (message) {
      console.log(
        "the" +
          " " +
          this.kind +
          " " +
          "with name " +
          this.name +
          " says:" +
          message
      );
    },
  };
  let msg = document.getElementById("message").value;
  animal.speak(msg);
});
