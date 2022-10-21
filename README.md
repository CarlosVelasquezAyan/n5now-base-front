# Clonado
Una vez clonado el repositorio root [n5now-base-front](https://github.com/CarlosVelasquezAyan/n5now-base-front.git) deben clonar los siguientes repositorios:

1. [n5now-front-navbar](https://github.com/CarlosVelasquezAyan/n5now-front-navbar.git)
2. [n5now-front-harry](https://github.com/CarlosVelasquezAyan/n5now-front-harry.git)
3. [n5now-front-rick](https://github.com/CarlosVelasquezAyan/n5now-front-rick.git)
3. [n5now-front-footer](https://github.com/CarlosVelasquezAyan/n5now-front-footer.git)

# Instalación
Posteriormente, deben proceder a la instalación de las dependencias de cada uno de ellos. Para esto deben posicionarse en la raíz de cada proyecto y correr el comando

```
npm install
```

# Compilar
Para compilar cada uno de los proyectos deben comenzar con el repositorio root y continuar con el mismo orden indicado en la sección de clonado. Es decir:

```
cd n5now-base-front
npm run start
```
```
cd n5now-front-navbar
npm run serve: standalone
```
```
cd n5now-front-harry
npm run serve: standalone
```
```
cd n5now-front-rick
npm run serve: standalone
```
```
cd n5now-front-footer
npm run serve: standalone
```

Esto habilitará el puerto [9000](http://localhost:9000/) para poder visualizar a la Single SPA. Para no tener problemas de visualización, recomiendo la utilización de [Google Chrome](https://www.google.com/intl/es-419/chrome/)
# Testing unitarios
Para realizar testing unitario de los componentes vue de cada uno de los proyectos deben realizar los siguientes pasos

```
cd n5now-front-navbar
npm run test:unit
```
```
cd n5now-front-harry
npm run test:unit
```
```
cd n5now-front-rick
npm run test:unit
```
```
cd n5now-front-footer
npm run test:unit
```

