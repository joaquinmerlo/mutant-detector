# Mutant Detector

_Se desarrolla ejercicio de examen tecnico en proceso de selección para empresa_
_Este consiste en realizar una API la cual responde a 2 tiempos de peticiones evaluando los datos enviados(POST: '/mutant' ->recibe un json) y retornando lo pedido(GET: '/stats')_


### Pre-requisitos 📋

_Tener instalado node.js y mysql_

### Instalación 🔧

_Una vez descargado el repo, en la carpeta del proyecto ejecutar "npm install" para installar las dependencias_

_Luego debemos ejecutar conectarnos al servidor de mysql y ejecutar la sentencia sql, que se encuentra en el archivo src/sql/database.sql_

```
CREATE DATABASE IF NOT EXISTS humans;
USE humans; 
CREATE TABLE humans_dna (
	id INT NOT NULL auto_increment,
	dna json default NULL,
	mutant bool DEFAULT NULL,
    primary key (id)
);
```
_A tener en cuenta, que se usa un tipo de dato json. 
En versiones anteriores a 5.7 viejas de mysql, no podemos usar este tipo. Debemos cambiar json por alguno compatible como LONGTEXT por ejemplo_
```
dna json default NULL => dna longtext default NULL
```
_Hecho eso, podemos continuar a configurar la conexion a nuestra base de datos_
_Para ello debemos ingresar en el archivo src/dbConnection.js y modificar los valores_

```
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'humans'
});
```

_A este punto, ya podemos ejecutar el comando "npm start". 
Si todo esta bien, por consola veremos en que puerto escucha nuestra app y si es correcta la conexion a la DB_

## Ejecutando las pruebas ⚙️
_Para ejecutar los tests podemos ejecutar "npm test" y se mostraran por consola los resultados._

_En estas pruebas enviamos datos de prueba y valor esperado a los metodos que se evaluan._

```
const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
test(dna, true);
```
## Probando API
_https://mutants-detector.herokuapp.com/stats_
