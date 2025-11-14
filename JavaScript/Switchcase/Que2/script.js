// Wap to print month name by first letter of month.

let month = "ays";

switch (month){
    case "Ja":
    case "ja":
       document.writeln("January");
        break;

    case "F":
    case "f":
        document.writeln("February");
        break;

        case "Ma":
        case "ma":
            document.writeln("March");
            break;
        
        case "Ap":
        case "ap":
            document.writeln("April");
            break;
        
        case "May":
        case "may":
            document.writeln("May");
            break;
        
        case "Ju":
        case "ju":
            document.writeln("June");
            break;
        
        case "Jl":
        case "jl":
            document.writeln("July");
            break;

        case "Au":
        case "au":
            document.writeln("August");
            break;

        case "S":   
        case "s":
            document.writeln("September");
            break;

        case "O":
        case "o":
            document.writeln("October");
            break;


        case "N":
        case "n":
            document.writeln("November");
            break;

        case "D":
        case "d":
            document.writeln("December");
            break;
    default:

        document.writeln("Invalid Input");
        break;

        
}