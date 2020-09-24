# Soil bearing capacity calculation application

An application to calculate floor bearing capacity using the terzaghi formula

## Getting Started

### Prerequisites

I assume you have installed Docker and it is running.

See the [Docker website](http://www.docker.io/gettingstarted/#h_installation) for installation instructions.
See the Docker website for installation instructions.

### Build

Steps to build a Docker image:

1.Clone this repo
  
  ```
  $ git clone https://github.com/melihs/soil-mech.git
  ```

2.Build the image

```
$ cd soil-mech
$ docker build -t soil-mech:dev .
```
3.Run Project
```
$ docker-compose up -d soil-mech
```
4. Open the browser
```
http://localhost:3000
```

## Built With

- file-saver  https://github.com/eligrey/FileSaver.js
- xlsx https://github.com/SheetJS/sheetjs
- antd https://github.com/ant-design/ant-design

## Versioning

0.1.0
## Authors

* **Melih ŞAHİN** - [personel web page](http://melihs.github.io)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

