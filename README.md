# Docker
1-Creamos una nueva carpeta donde guardaremos nuestra aplicacion con el comando mkdir y accedemos a ella
2-Creamos nuestra app node
3-Creamos un fichero dockerignore y un DockerFile con los comandos touch DockerIgnore y touch DockerFile
4-Accedemos a ellos y añadimos los parametros que consideremos necesarios
5-docker build -t nombreDeUsuario/node-web-app .
6-docker run -p puertoquequeramos:8080 -d nombreDeUsuario/node-web-app

Esos han sido los pasos para dockerizar esta aplicacion.
Si quiere ejecutar la aplicacion simplemente siga estos pasos:

1-docker build -t rmejias/node-web-app .
2-docker run -p 8081:8080 -d rmejias/node-web-app
