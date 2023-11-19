function SomatorioValores() {
    let numeroInput = document.getElementById("numeroInput").value;
    let totalSomatorio = 0;

    if (numeroInput > 0) {
        for (let i = 0; i < numeroInput; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                totalSomatorio = totalSomatorio + i;
            }
        }
        alert(totalSomatorio);

    }
    else {
        alert("Insira um número válido");
    }
}