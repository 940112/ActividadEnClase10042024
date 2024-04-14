A continuación estaremos desarrollando el paso a paso para conectar mi repositorio local (el código en mi computador), con mi repositorio remoto (mi biblioteca en GitHub )

Crear el repositorio en GitHub (remoto)

buscamos el boton verde con ícono de libro que dic
click en el boton verde crear repositorio
Crear nuestro repositorio local

abrimos la consola de git bash desde visual:

ctrl + ñ
... -> terminal -> nuevo terminal
vamos a escribir los comandos para inicializar nuestro repositorio local y conectarlo con el remoto

COMANDOS (DEBEN IR EN ORDEN) holi:
git init -> Inicializar mi repositorio local

git status -> memuestra el estado de mis archivos
git add .-> se usa todo para agregar cambios al entorno de preparación

git commit -> nos permite poner un mensaje pero además significa que sus archivos están listos para enviarse al repositorio remoto

ej: git commit -m "lo que está dentro de las comillas es lo que yo edito"

(estos sólo se usan la primera vez que creo el repositorio) 4. git branch -M main -> establecer la rama main 5. git remote add origin -> me conecta con el remositorio en internet

git push -u origin main -> me envía los cambios a la rama main en mi github (me sube todo a internet)

##QUE PONER EN EL README PARA MI PROYECTO FINAL

Titulo -> Psicología online
Descrpción general que me hable de todo el proyecto ->  Terapias psicologicas de manera online accesibles para todo el publico
Autor -> Quién lo hizo-Daniel Alvarez# ActividadEnClasee "nuevo"
llenamos el nombre del repositorio, descripción (si quieren) y lo ponemos público
