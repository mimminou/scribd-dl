# Scribd-dl ![nodedotjs](https://img.shields.io/badge/node.js-v21.6-339933.svg?style=flat&logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-10.2-dc2c35.svg?style=flat&logo=npm&logoColor=white)  ![Regression Tests](https://github.com/rkwyu/scribd-dl/actions/workflows/test.yml/badge.svg) 

<a href="https://buymeacoffee.com/r1y5i" target="_blank">
<img style="border-radius: 20px" src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174">
</a>

## FORK ##
This fork is aimed to wrap this code with very minimal and simple UI, so far most of the CSS was vibe coded, but GPT is good enough to be trusted with simple styles.

## About ##

Scribd-dl helps downloading:
- documents on [scribd.com](https://www.scribd.com/) and [slideshare.net](https://www.slideshare.net/) without membership / sign-in  
- podcast audios on [everand.com](https://www.everand.com/podcasts)  

## Prerequisites ##
To use Scridb-dl, you need to install [Node.js](https://nodejs.org/en/download/). It is recommended that you use the latest LTS version available.  

> Please install Node.js using pre-built installers for your platform. You may encounter incompatibility issues with different development tools otherwise.  

To check that Node.js was installed correctly, type the following commands in your terminal client:  
```console
node -v
npm -v
```
The commands should print the versions of Node.js and npm accordingly.  

## Setup ##
1. Download repository  
```console
git clone https://github.com/rkwyu/scribd-dl
```
2. Install dependencies
```console
cd ./scribd-dl
npm install
```

## Configuration ##
Configuration can be altered in `config.ini`.  
```ini
[SCRIBD]
rendertime=100

[DIRECTORY]
output=output
filename=title
```
| Config | Description | Support |
| --- | --- | --- |
| `rendertime` | waiting time in millisecond for single page rendering | [scribd.com](https://www.scribd.com/) |
| `output` | output directory | [scribd.com](https://www.scribd.com/)<br/>[slideshare.net](https://www.slideshare.net/)<br/>[everand.com](https://www.everand.com/podcasts) |
| `filename` | output filename<br/>`title`: filename = default filename / title<br/>(otherwise, filename = ID) | [scribd.com](https://www.scribd.com/)<br/>[slideshare.net](https://www.slideshare.net/) |

## Usage (WEBUI) ##
Simply run npm start, then visit the hosted page on a web browser

## Support URL Format ##
- https://www.scribd.com/doc/**
- https://www.scribd.com/embeds/**
- https://www.slideshare.net/**
- https://www.slideshare.net/slideshow/**
- https://www.everand.com/podcast-show/**
- https://www.everand.com/podcast/**
- https://www.everand.com/listen/podcast/**

## Development Plan ##

- Scribd obfuscates the .pdf files, the texts copied from the documents might become strange garbled message. De-obfuscating is one of the future plan.

## License ##
This project is licensed under the [MIT License](LICENSE.md)
