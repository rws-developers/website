set shell := ["bash", "-cu"]

default:
  @just --list

install:
  npm install

dev:
  npm run dev

build:
  npm run build

test:
  npm run build

serve:
  python3 -m http.server 4173 --directory out
