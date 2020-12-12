name: GitHub Pages

on:
  push:
    branches: [ master ]

jobs:
    build:
        runs-on: ubuntu-latest
    
        steps:
        - uses: actions/checkout@v2
        - uses: actions/setup-node@v1
          with:
            node-version: '12'
        - name: Install dependencies
          run: npm install

        - name: Build distribution folder
          run: npm run build

        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GH_PAGES_TOKEN }}
            publish_dir: ./dist