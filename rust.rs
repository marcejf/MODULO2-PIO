use std::io;

fn main() {
    // Solicitar al usuario el primer número
    let mut num1 = String::new();
    println!("Ingresa el primer número:");
    io::stdin().read_line(&mut num1).expect("Error al leer la entrada");
    let num1: i32 = num1.trim().parse().expect("Por favor, ingresa un número válido");

    // Solicitar al usuario el segundo número
    let mut num2 = String::new();
    println!("Ingresa el segundo número:");
    io::stdin().read_line(&mut num2).expect("Error al leer la entrada");
    let num2: i32 = num2.trim().parse().expect("Por favor, ingresa un número válido");

    // Menú de operaciones
    println!("Elige una operación:");
    println!("1. Suma");
    println!("2. Resta");
    println!("3. Multiplicación");
    println!("4. División");
    println!("5. División Modular");

    // Leer la operación
    let mut operacion = String::new();
    io::stdin().read_line(&mut operacion).expect("Error al leer la operación");

    // Realizar la operación seleccionada
    match operacion.trim() {
        "1" => println!("Resultado: {}", num1 + num2),
        "2" => println!("Resultado: {}", num1 - num2),
        "3" => println!("Resultado: {}", num1 * num2),
        "4" => {
            if num2 != 0 {
                println!("Resultado: {}", num1 / num2);
            } else {
                println!("Error: No se puede dividir entre cero.");
            }
        }
        "5" => {
            if num2 != 0 {
                println!("Resultado: {}", num1 % num2);
            } else {
                println!("Error: No se puede dividir entre cero.");
            }
        }
        _ => println!("Opción no válida."),
    }
}
