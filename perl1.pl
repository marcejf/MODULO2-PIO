print "BIENVENIDO A PERL. \n";

print "por favor ingresa el primer numero\n";
my $num1 = <STDIN>; # lee el primer numero y asigna la variable
chomp($num1); # elimina el salto de linea al final de la cadena

print "por favor ingresa el segundo numero\n";
my $num2 = <STDIN>;
chomp($num2);

my $resultadosuma = $num1 + $num2;

my $resultadoresta = $num1 - $num2;
my $resultadomultiplica = $num1 * $num2;
my $resultadodivide = $num1 / $num2;
my $resultadodivisionmod = $num1 % $num2;


print "el resultado de la suma es: $resultadosuma!\n";
print "el resultado de resta es :  $resultadoresta!\n";
print "el resultado de la multiplicacion es: $resultadomultiplica!\n";
print "el resultado de la division es: $resultadodivide!\n";
print "el resultado de la division modular es: $resultadodivisionmod!\n";






