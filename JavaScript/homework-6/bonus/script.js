const recipeInput = document.createElement("input");
recipeInput.placeholder = "Recipe name";
recipeInput.style.padding = "8px 8px";

const countInput = document.createElement("input");
countInput.type = "number";
countInput.placeholder = "Number of ingredients";
countInput.style.padding = "8px 8px";

const generateBtn = document.createElement("button");
generateBtn.textContent = "Generate Ingredient Inputs";
generateBtn.style.padding = "8px 8px";

const ingredientsDiv = document.createElement("div");

const createRecipeBtn = document.createElement("button");
createRecipeBtn.textContent = "Create Recipe";
createRecipeBtn.style.padding = "8px 8px";

const output = document.createElement("div");

document.body.append(
  recipeInput,
  document.createElement("br"),
  countInput,
  document.createElement("br"),
  generateBtn,
  document.createElement("hr"),
  ingredientsDiv,
  createRecipeBtn,
  document.createElement("hr"),
  output
);


generateBtn.onclick = function () {
  ingredientsDiv.innerHTML = "";

  const count = Number(countInput.value);

  for (let i = 0; i < count; i++) {
    const input = document.createElement("input");
    input.placeholder = `Ingredient ${i + 1}`;
    input.className = "ingredient";
    input.style.padding = "8px 8px";

    ingredientsDiv.appendChild(input);
    ingredientsDiv.appendChild(document.createElement("br"));
  }
};
 
createRecipeBtn.onclick = function () {
  output.innerHTML = "";

  
  const h1 = document.createElement("h1");
  h1.textContent = recipeInput.value;
  output.appendChild(h1);

  
  const table = document.createElement("table");
  table.border = "1 solid black";
  table.style.width = "200px";

  
  const headerRow = document.createElement("tr");
  headerRow.style.padding = "8px 8px";
  const th1 = document.createElement("th");
  th1.textContent = "#";
  th1.style.padding = "8px 8px";
  const th2 = document.createElement("th");
  th2.textContent = "Ingredients";
  th2.style.padding = "8px 8px";

  headerRow.append(th1, th2);
  table.appendChild(headerRow);

  const ingredientInputs = document.querySelectorAll(".ingredient");

  ingredientInputs.forEach((input, index) => {
    const row = document.createElement("tr");
    row.style.padding = "8px 8px";

    const cell1 = document.createElement("td");
    cell1.textContent = index + 1;
    cell1.style.padding = "8px 8px";

    const cell2 = document.createElement("td");
    cell2.textContent = input.value;
    cell2.style.padding = "8px 8px";

    row.append(cell1, cell2);
    table.appendChild(row);
  });

  output.appendChild(table);
};