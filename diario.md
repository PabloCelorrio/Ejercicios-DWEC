# Diario de tareas y aprendizaje

## 12/02/2025

Hoy hemos aprendido cómo configurar Git para su uso diario a lo largo de la práctica evaluable. Los comandos usados son los siguientes:

- git clone [enlace del repositorio]: Este comando sirve para clonar el repositorio de GitHub especificado en el enlace a la carpeta actual, y comenzar a rastrear los cambios del repositorio local nuevo.
- git config --global user.name "[nombre de usuario]": Este comando cambia el nombre de usuario que se usa en los commits de Git en el repositorio local. Si se cambia de repositorio, hay que volverlo a cambiar en el repositorio nuevo.
- git config --global user.email "[dirección de email]": Lo mismo que user.name, pero cambia la dirección de correo asociada al usuario.

Comandos usados a través de la interfaz Git de Visual Studio Code:

- git add: Sirve para añadir todos los archivos del repositorio que no se están rastreando al espacio de trabajo.
- git commit -m "[Mensaje de commit (sencillo e informativo)]": Este comando sube al repositorio de GitHub los archivos que se están rastreando en el repositorio local, añadiendo un mensaje que informa de los cambios realizados en la última actualización. 