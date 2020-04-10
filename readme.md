Update 10-04-2020 - No longer maintained. 

---

# Overview
A simple asp.net core based vue template with typescript.
Modified from: https://github.com/aspnet/JavaScriptServices
Built to be used with: https://github.com/dotnet/templating

## Main differences:
* Remove the bootstrap/jquery dependencies.
* .vue files are still the main template files, but now with seperate .ts files
* Router uses imports rather than requires
* Cleaner setup for my .net core vue based projects.
* Using axios for the fetchdata example

# Features

* Uses the ASP.NET Core SPA Services setup, meaning it all runs via .net core and integrates nicely with kestral and co.
* HMR - Live injection of your code changes into the Vue app.
* Vue JS with full typescript build support, still maintaining .vue template files handled by vue-loader.
* Vue Router
* Via Webpack DllPlugin seperation of vendor specific libraries for faster build times / better caching.
* Axios bundled for HTTP requests.

# Requirements
* Node.js
* .NET core

# Usage 1 - dotnet templating
1. git clone
2. dotnet new --install /Path/To/AspCoreVueTemplate
3. mkdir MyTestProject
4. cd MyTestProject
5. npm install
4. dotnet restore
5. dotnet run

# Usage 2 - Git clone it

1. git clone
2. npm install
3. node node_modules/webpack/bin/webpack.js --config webpack.config.vendor.js *Note this one time run in most cases*
4. dotnet restore
5. dotnet run *note aspnetcore_environment must be set for development if you want node to be in dev mode too*
