#!/bin/bash
function display_help {
  echo "Minato"
  echo
  echo "Usage:" 
  echo "  Minato COMMAND [options] [arguments]"
  echo
  echo "Unknown commands are passed to the docker-compose binary."
  echo
  echo "docker-compose Commands:"
  echo "  Minato up        Start the application"
  echo "  Minato up -d     Start the application in the background"
  echo "  Minato stop      Stop the application"
  echo "  Minato down      Stop the application and remove related resources"
  echo "  Minato restart   Restart the application"
  echo "  Minato ps        Display the status of all containers"
  echo
  echo "Node Commands:"
  echo "  Minato node ...         Run a Node command"
  echo "  Minato node --version"
  echo
  echo "Yarn Commands:"
  echo "  Minato yarn ...        Run a yarn command"
  echo "  Minato yarn build"
  echo "  Minato yarn add"
  echo
  echo "NPX Commands:"
  echo "  Minato npx ....       Run npx commands"
  echo
  echo "Fix file permissions:"
  echo "  Minato fix"
  exit 1
}

if [ $# -gt 0 ]; then
  if [ "$1" == "yarn" ]; then
    shift 1
    docker-compose run --rm app yarn "$@"
  elif [ "$1" == "node" ]; then
    shift 1
    docker-compose run --rm app node "$@"
  elif [ "$1" == "help" ] || [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
    display_help
  elif [ "$1" == "npx" ]; then
    shift 1
    docker-compose run --rm app npx "$@"
  elif [ "$1" == "fix" ]; then
    shift 1
    sudo chown -R $USER:$USER .
  else
    docker-compose -f docker-compose.yml "$@"
  fi
else
  display_help
fi