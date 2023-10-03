function component() {
    const element = document.getElementById('content');

    element.innerHTML = "<h1>Olá Mundo</h1>"; //_.join(['Hello', 'webpack'], ' ');
    element.innerHTML += "<h1>Olá Mundo</h1>";

    return element;
  }

  component();